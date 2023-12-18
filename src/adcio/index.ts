// Adcio
export { Adcio } from "./adcio";
export type {
  AdcioParams,
  AdcioConfig,
  AdcioOnPageViewParams,
  AdcioOnClickParams,
  AdcioOnAddToCartParams,
  AdcioOnPurchaseParams,
  AdcioObserveImpressionParams,
  AdcioCreateSuggestionParams,
} from "./adcio.interface";

// FrontAPI
export type { ClientAPI } from "lib/client-api";
export { Cafe24API } from "lib/client-api";

import { Cafe24API } from "lib/client-api";
export const frontApi = {
  cafe24: new Cafe24API(),
};

// utils
export {
  waitForDOM,
  waitForElement,
  getMeta,
  createElement,
  createNestedElement,
} from "lib/utils";
