import { Adcio, getMeta } from "@adcio.js/core";
import { CartsStorage } from "./cart-storage";
import { AdcioPlacementBootstrap } from "./placement";
import { ClientAPI, createClientAPI } from "../client-api";
import { AdcioError } from "../errors";

export class AdcioBootstrap {
  private clientId: string;
  private clientApi: ClientAPI;
  private adcioInstance: Adcio;

  private suppressPlacement: boolean;

  constructor(config: { clientId?: string; suppressPlacement?: boolean } = {}) {
    const clientId = config.clientId || this.getClientId();
    if (!clientId) {
      throw new AdcioError("Client ID is not found");
    }
    this.clientId = clientId;

    const clientApi = createClientAPI();
    if (!clientApi) {
      throw new AdcioError("Client API is not found");
    }
    this.clientApi = clientApi;

    this.suppressPlacement = config.suppressPlacement || false;

    this.adcioInstance = new Adcio({ clientId });
  }

  public static async run() {
    return new AdcioBootstrap().run();
  }

  public async run() {
    await this.clientApi.init();

    try {
      const client = await this.clientApi.getCustomer();
      if (client) {
        this.adcioInstance.setCustomerId(client.id);
      }
    } catch (e) {
      console.warn("Failed to get customer id: ", e);
    }

    return Promise.allSettled([
      ...(this.suppressPlacement ? [this.loadPlacements()] : []),
      this.handleView(),
      this.handleCarts(),
      this.handleOrder(),
    ]);
  }

  private getClientId(): string | null {
    return (
      getMeta({ property: "adcio:clientId" }) ||
      (window as unknown as Window & { ADCIO_CLIENT_ID: string })
        .ADCIO_CLIENT_ID
    );
  }

  private getPageName(): string | null {
    return (
      getMeta({ property: "adcio:pageName" }) ||
      (window as unknown as Window & { ADCIO_PAGE_NAME: string })
        .ADCIO_PAGE_NAME ||
      this.clientApi.getPageName()
    );
  }

  private async loadPlacements() {
    const pageName = this.getPageName();
    if (!pageName) {
      throw new AdcioError("pageName is not found");
    }
    return new AdcioPlacementBootstrap({
      adcioInstance: this.adcioInstance,
    }).loadPlacements(pageName);
  }

  private async handleView(): Promise<void> {
    const product = await this.clientApi.getProduct();
    const category = await this.clientApi.getCategory();
    if (!product?.idOnStore && !category?.idOnStore) {
      return;
    }
    await this.adcioInstance.onPageView({
      productIdOnStore: product?.idOnStore,
      categoryIdOnStore: category?.idOnStore,
    });
  }

  private async handleCarts(): Promise<void> {
    const carts = await this.clientApi.getCarts();
    if (!carts) {
      return;
    }

    const storage = new CartsStorage({
      key: `adcio-carts-${this.clientId}`,
    });
    const existing = storage.getOrSet();
    storage.set(carts);

    const newCarts = carts.filter(
      (cart) => !existing.find((c) => c.id === cart.id),
    );
    if (newCarts.length === 0) {
      return;
    }

    await Promise.allSettled(
      newCarts.map((cart) =>
        this.adcioInstance.onAddToCart({
          cartId: cart.id,
          productIdOnStore: cart.productIdOnStore,
          quantity: cart.quantity,
        }),
      ),
    );
  }

  private async handleOrder(): Promise<void> {
    const order = await this.clientApi.getOrder();
    if (!order) {
      return;
    }

    await Promise.allSettled(
      order.products.map((product) =>
        this.adcioInstance.onPurchase({
          orderId: order.id,
          amount: Number(
            product.subTotalPrice || product.price * product.quantity,
          ),
          quantity: product.quantity,
          productIdOnStore: product.idOnStore,
        }),
      ),
    );
  }
}
