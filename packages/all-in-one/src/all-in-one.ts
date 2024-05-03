import { Adcio } from "@adcio/core";
import { createClientAPI } from "@adcio/lib/client-api";
import { ClientAPI } from "@adcio/lib/client-api/client-api.interface";
import { CartsStorage } from "@adcio/lib/storage/tracker-storage";
import { getMeta } from "@adcio/lib/utils";

export class AdcioAllInOne {
  private clientId: string;
  private clientApi: ClientAPI;
  private adcioInstance: Adcio;

  constructor(config: { clientId?: string } = {}) {
    const clientId = config.clientId || this.getClientId();
    if (!clientId) {
      throw new Error("ADCIO: Client ID is not found");
    }
    this.clientId = clientId;
    this.adcioInstance = new Adcio({ clientId });

    const clientApi = createClientAPI();
    if (!clientApi) {
      throw new Error("ADCIO: Client API is not found");
    }
    this.clientApi = clientApi;
  }

  public static async run() {
    return new AdcioAllInOne().run();
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
      ...(await this.handleView()),
      ...(await this.handleCarts()),
      ...(await this.handleOrder()),
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

  private getPlacementIds(): string[] {
    return (
      getMeta({ property: "adcio:placementIds" }) ||
      (window as unknown as Window & { ADCIO_PLACEMENT_IDS: string })
        .ADCIO_PLACEMENT_IDS ||
      ""
    ).split(",");
  }

  private async loadPlacements() {
    let placementIds: string[] = [];

    const pageName = this.getPageName();
    if (!pageName) {
      const fetched = await this.adcioInstance.fetchPlacements({
        pageName: "",
      });
      if (!fetched) {
        throw new Error("ADCIO: no placements fetched");
      }
      placementIds = fetched.map((placement) => placement.id);
    } else {
      placementIds = this.getPlacementIds();
    }

    if (placementIds.length === 0) {
      throw new Error("ADCIO: no placements found");
    }
  }

  private async handleView(): Promise<Promise<void>[]> {
    const product = await this.clientApi.getProduct();
    const category = await this.clientApi.getCategory();
    if (!product?.idOnStore && !category?.idOnStore) {
      return [];
    }
    return [
      this.adcioInstance.onPageView({
        productIdOnStore: product?.idOnStore,
        categoryIdOnStore: category?.idOnStore,
      }),
    ];
  }

  private async handleCarts(): Promise<Promise<void>[]> {
    const carts = await this.clientApi.getCarts();
    if (!carts) {
      return [];
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
      return [];
    }

    return newCarts.map((cart) =>
      this.adcioInstance.onAddToCart({
        cartId: cart.id,
        productIdOnStore: cart.productIdOnStore,
        quantity: cart.quantity,
      }),
    );
  }

  private async handleOrder(): Promise<Promise<void>[]> {
    const order = await this.clientApi.getOrder();
    if (!order) {
      return [];
    }

    return order.products.map((product) =>
      this.adcioInstance.onPurchase({
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
