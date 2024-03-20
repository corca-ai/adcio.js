import {
  AdcioAnalyticsOnAddToCartParams,
  AdcioAnalyticsOnImpressionParams,
  AdcioAnalyticsOnPurchaseParams,
} from "lib/analytics";

export const EVENT_IMPRESSION = "adcio.impression";
export const EVENT_ADD_TO_CART = "adcio.add_to_cart";
export const EVENT_PURCHASE = "adcio.purchase";

function dispatch<T>(eventName: string, params: T) {
  document.dispatchEvent(
    new CustomEvent(eventName, {
      detail: params,
    }),
  );
}

function listen<T>(eventName: string, callback: (params: T) => void) {
  document.addEventListener(eventName, (event) => {
    const { detail: params } = event as CustomEvent;
    if (!params) {
      return;
    }
    callback(params);
  });
}

export abstract class AdcioEvent<T> {
  protected params: T;

  constructor(params: T) {
    this.params = params;
  }

  abstract dispatch(): void;
}

export class ImpressionEvent extends AdcioEvent<AdcioAnalyticsOnImpressionParams> {
  static eventName = EVENT_IMPRESSION;

  dispatch() {
    dispatch(ImpressionEvent.eventName, this.params);
  }

  static listen(callback: (params: AdcioAnalyticsOnImpressionParams) => void) {
    listen(ImpressionEvent.eventName, callback);
  }
}

export class AddToCartEvent extends AdcioEvent<AdcioAnalyticsOnAddToCartParams> {
  static eventName = EVENT_ADD_TO_CART;

  dispatch() {
    dispatch(AddToCartEvent.eventName, this.params);
  }

  static listen(callback: (params: AdcioAnalyticsOnAddToCartParams) => void) {
    listen(AddToCartEvent.eventName, callback);
  }
}

export class PurchaseEvent extends AdcioEvent<AdcioAnalyticsOnPurchaseParams> {
  static eventName = EVENT_PURCHASE;

  dispatch() {
    dispatch(PurchaseEvent.eventName, this.params);
  }

  static listen(callback: (params: AdcioAnalyticsOnPurchaseParams) => void) {
    listen(PurchaseEvent.eventName, callback);
  }
}
