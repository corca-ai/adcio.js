import type {
  BannerSuggestionResponseDto,
  FetchActivePlacementsResponseDto,
  ProductSuggestionResponseDto,
  SuggestionResponseDto,
} from "@adcio/api/controller/v1";
import { AdcioAnalytics } from "@adcio/lib/analytics/analytics";
import { ClientAPI } from "@adcio/lib/client-api";
import { AdcioCore } from "@adcio/lib/core";
import { AdcioImpressionObserver } from "@adcio/lib/impression-observer/impression-observer";
import { AdcioPlacement } from "@adcio/lib/placement/placement";
import { CartsStorage } from "@adcio/lib/storage/tracker-storage";
import {
  AdcioConfig,
  AdcioCreateRecommendationBannersParams,
  AdcioCreateRecommendationProductsParams,
  AdcioCreateSuggestionParams,
  AdcioFetchPlacementsParams,
  AdcioObserveImpressionParams,
  AdcioOnAddToCartParams,
  AdcioOnClickParams,
  AdcioOnImpressionParams,
  AdcioOnPageViewParams,
  AdcioOnPurchaseParams,
  AdcioParams,
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

  public setCustomerId(customerId: string) {
    this.adcioCore.setCustomerId(customerId);
  }

  // AdcioAnalytics
  public onPageView(params: AdcioOnPageViewParams) {
    return this.adcioAnalytics.onPageView(params);
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
  public async fetchPlacements(
    params: AdcioFetchPlacementsParams,
  ): Promise<FetchActivePlacementsResponseDto[] | undefined> {
    return this.adcioPlacement.fetchPlacements(params);
  }

  /**
   *  @deprecated
   */
  public async createSuggestion(
    params: AdcioCreateSuggestionParams,
  ): Promise<SuggestionResponseDto | undefined> {
    return this.adcioPlacement.createSuggestion(params);
  }

  /**
   *  @deprecated
   */
  public async createSuggestionProducts(
    params: AdcioCreateRecommendationProductsParams,
  ): Promise<ProductSuggestionResponseDto | undefined> {
    return this.adcioPlacement.createRecommendationProducts(params);
  }

  public async createRecommendationProducts(
    params: AdcioCreateRecommendationProductsParams,
  ): Promise<ProductSuggestionResponseDto | undefined> {
    return this.adcioPlacement.createRecommendationProducts(params);
  }

  public async createRecommendationBanners(
    params: AdcioCreateRecommendationBannersParams,
  ): Promise<BannerSuggestionResponseDto | undefined> {
    return this.adcioPlacement.createRecommendationBanners(params);
  }

  public async collectLogs(clientApi: ClientAPI) {
    await clientApi.init();

    try {
      const client = await clientApi.getCustomer();
      if (client) {
        this.adcioCore.setCustomerId(client.id);
      }
    } catch (e) {
      console.warn("Failed to get customer id: ", e);
    }

    return Promise.allSettled([
      ...(await this.handleView(clientApi)),
      ...(await this.handleCarts(clientApi)),
      ...(await this.handleOrder(clientApi)),
    ]);
  }

  private async handleView(clientApi: ClientAPI): Promise<Promise<void>[]> {
    const product = await clientApi.getProduct();
    const category = await clientApi.getCategory();
    if (!product?.idOnStore && !category?.idOnStore) {
      return [];
    }
    return [
      this.onPageView({
        productIdOnStore: product?.idOnStore,
        categoryIdOnStore: category?.idOnStore,
      }),
    ];
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
        quantity: cart.quantity,
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
