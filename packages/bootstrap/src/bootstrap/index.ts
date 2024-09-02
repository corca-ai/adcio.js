import { Adcio, getMeta, waitForDOM } from "@adcio.js/core";
import { CartsStorage } from "./cart-storage";
import { AdcioPlacementBootstrap } from "./placement";
import { ClientAPI, createClientAPI } from "../client-api";
import { AdcioError } from "../errors";

export class AdcioBootstrap {
  private clientId: string;
  private clientApi: ClientAPI;
  private adcioInstance: Adcio;

  private suppressPlacement: boolean;

  constructor(
    config: {
      apiEndpoint?: string;
      receiverEndpoint?: string;
      messengerEndpoint?: string;
      clientId?: string;
      clientApi?: string;
      suppressPlacement?: boolean;
    } = {},
  ) {
    const clientId = config.clientId || this.getClientId();
    if (!clientId) {
      throw new AdcioError("Client ID is not found");
    }
    this.clientId = clientId;

    const clientApi = createClientAPI(config.clientApi);
    if (!clientApi) {
      throw new AdcioError("Client API is not found");
    }
    this.clientApi = clientApi;

    this.suppressPlacement = config.suppressPlacement || false;

    this.adcioInstance = new Adcio({
      clientId,
      ...(config.apiEndpoint ? { apiEndpoint: config.apiEndpoint } : {}),
      ...(config.receiverEndpoint
        ? { receiverEndpoint: config.receiverEndpoint }
        : {}),
      ...(config.messengerEndpoint
        ? { messengerEndpoint: config.messengerEndpoint }
        : {}),
    });
  }

  public static async run() {
    return await new AdcioBootstrap().run();
  }

  public async run() {
    await waitForDOM();
    const results = await this.bootstrap();
    const failed = results.filter((result) => result.status === "rejected");
    if (failed.length > 0) {
      console.warn("Some failed while bootstrapping Adcio: ", failed);
    }
    return this.adcioInstance;
  }

  public async bootstrap() {
    await this.clientApi.init();

    try {
      const customer = await this.clientApi.getCustomer();
      if (customer) {
        this.adcioInstance.setCustomerId(customer.id);
      }
    } catch (e) {
      console.warn("Failed to get customer id: ", e);
    }

    return await Promise.allSettled([
      ...(this.suppressPlacement ? [] : [this.loadPlacements()]),
      this.handleView(),
      this.handleCarts(),
      this.handleOrder(),
      this.handleSearch(),
    ]);
  }

  public getInstance() {
    return this.adcioInstance;
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

  private isMobile(): boolean | null {
    return this.clientApi.isMobile();
  }

  private async loadPlacements() {
    const pageName = this.getPageName();
    if (!pageName) {
      throw new AdcioError("pageName is not found");
    }
    const isMobile = this.isMobile();
    return new AdcioPlacementBootstrap({
      adcioInstance: this.adcioInstance,
    }).loadPlacements(pageName, isMobile);
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

  private async handleSearch(): Promise<void> {
    const search = await this.clientApi.getSearch();
    if (!search) {
      return;
    }

    await this.adcioInstance.onSearch(search);
  }
}
