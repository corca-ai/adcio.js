import { AdcioAnalytics } from "lib/analytics/analytics";
import { ClientAPI } from "lib/client-api/client-api.interface";
import { AdcioCore } from "lib/core";
import { AdcioImpressionObserver } from "lib/impression-observer/impression-observer";
import { AdcioPlacement } from "lib/placement/placement";
import { CartsStorage } from "lib/storage/tracker-storage";
import {
  AdcioConfig,
  AdcioParams,
  AdcioCreateSuggestionParams,
  AdcioOnPageViewParams,
  AdcioOnAddToCartParams,
  AdcioOnClickParams,
  AdcioOnPurchaseParams,
  AdcioObserveImpressionParams,
  AdcioOnImpressionParams,
  AdcioFetchPlacementsParams,
} from "./adcio.interface";

export class Adcio {
  private readonly config: AdcioConfig;
  private adcioCore: AdcioCore;
  private adcioPlacement: AdcioPlacement;
  private adcioAnalytics: AdcioAnalytics;

  constructor(config: AdcioParams) {
    this.config = {
      apiEndpoint: "https://api.adcio.ai",
      receiverEndpoint: "https://receiver.adcio.ai",
      ...config,
    };
    this.adcioCore = new AdcioCore({
      clientId: this.config.clientId,
      customerId: this.config.customerId,
    });

    this.adcioPlacement = new AdcioPlacement({
      adcioCore: this.adcioCore,
      apiEndpoint: this.config.apiEndpoint,
    });
    this.adcioAnalytics = new AdcioAnalytics({
      adcioCore: this.adcioCore,
      receiverEndpoint: this.config.receiverEndpoint,
    });
  }

  // AdcioAnalytics
  public onPageView(params: AdcioOnPageViewParams) {
    return this.adcioAnalytics.onPageView({
      path: window.location.pathname,
      title: document.title,
      referrer: document.referrer || undefined,
      ...params,
    });
  }

  public onImpression(logOptions: AdcioOnImpressionParams) {
    return this.adcioAnalytics.onImpression(logOptions);
  }

  public onClick(logOptions: AdcioOnClickParams) {
    return this.adcioAnalytics.onClick(logOptions);
  }

  public onAddToCart(params: AdcioOnAddToCartParams) {
    return this.adcioAnalytics.onAddToCart(params);
  }

  public onPurchase(params: AdcioOnPurchaseParams) {
    return this.adcioAnalytics.onPurchase(params);
  }

  // AdcioImpressionDetector
  public observeImpression(params: AdcioObserveImpressionParams) {
    return new AdcioImpressionObserver({ filter: params.filter }).observe(
      params.element,
    );
  }

  // AdcioPlacement
  public async fetchPlacements(params: AdcioFetchPlacementsParams) {
    return this.adcioPlacement.fetchPlacements(params);
  }

  public async createSuggestion(params: AdcioCreateSuggestionParams) {
    return this.adcioPlacement.createSuggestion(params);
  }

  public async collectLogs(clientApi: ClientAPI) {
    await clientApi.init();

    return Promise.allSettled([
      ...(await this.handleProduct(clientApi)),
      ...(await this.handleCarts(clientApi)),
      ...(await this.handleOrder(clientApi)),
    ]);
  }

  private async handleProduct(clientApi: ClientAPI): Promise<Promise<void>[]> {
    const product = await clientApi.getProduct();
    return [this.onPageView({ productIdOnStore: product?.idOnStore })];
  }

  private async handleCarts(clientApi: ClientAPI): Promise<Promise<void>[]> {
    const carts = await clientApi.getCarts();
    if (!carts) {
      return [];
    }

    const storage = new CartsStorage({
      key: `adcio-carts-${this.adcioCore.getClientId()}`,
    });
    const existing = storage.getOrSet();
    storage.set(carts);

    const newCarts = carts.filter(
      (cart) => !existing.find((c) => c.id === cart.id),
    );
    if (newCarts.length === 0) {
      return [];
    }

    return newCarts.map((cart) =>
      this.onAddToCart({
        cartId: cart.id,
        productIdOnStore: cart.productIdOnStore,
      }),
    );
  }

  private async handleOrder(clientApi: ClientAPI): Promise<Promise<void>[]> {
    const order = await clientApi.getOrder();
    if (!order) {
      return [];
    }

    return order.products.map((product) =>
      this.onPurchase({
        orderId: order.id,
        amount: Number(
          product.subTotalPrice || product.price * product.quantity,
        ),
        quantity: product.quantity,
        productIdOnStore: product.idOnStore,
      }),
    );
  }
}
