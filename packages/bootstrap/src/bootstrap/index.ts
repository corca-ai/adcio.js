import { Adcio } from "@adcio/core";
import { createClientAPI } from "@adcio/lib/client-api";
import { ClientAPI } from "@adcio/lib/client-api/client-api.interface";
import { CartsStorage } from "@adcio/lib/storage/tracker-storage";
import { getMeta } from "@adcio/lib/utils";
import {
  FetchActivePlacementsResponseDto,
  PlacementSuggestionTypeEnum,
  PlacementTypeEnum,
} from "api/controller/v1";
import { AdcioPlacementBootstrap } from "./placement";
import { AdcioError } from "../errors";

export class AdcioBootstrap {
  private clientId: string;
  private clientApi: ClientAPI;
  private adcioInstance: Adcio;

  constructor(config: { clientId?: string } = {}) {
    const clientId = config.clientId || this.getClientId();
    if (!clientId) {
      throw new AdcioError("Client ID is not found");
    }
    this.clientId = clientId;
    this.adcioInstance = new Adcio({ clientId });

    const clientApi = createClientAPI();
    if (!clientApi) {
      throw new AdcioError("Client API is not found");
    }
    this.clientApi = clientApi;
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
      this.loadPlacements(),
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

  private async loadPlacements() {
    const pageName = this.getPageName();
    if (!pageName) {
      throw new AdcioError("pageName is not found");
    }
    return new AdcioPlacementBootstrap({
      adcioInstance: this.adcioInstance,
    }).loadPlacements(pageName);
  }

  private async loadPlacement(placement: FetchActivePlacementsResponseDto) {
    switch (placement.suggestionType) {
      case PlacementSuggestionTypeEnum.Advertise:
        switch (placement.type) {
          case PlacementTypeEnum.Grid:
            break;
          case PlacementTypeEnum.Banner:
            break;
        }
        break;
      case PlacementSuggestionTypeEnum.Recommend:
        switch (placement.type) {
          case PlacementTypeEnum.Grid:
            break;
          case PlacementTypeEnum.Banner:
            break;
        }
        break;
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
