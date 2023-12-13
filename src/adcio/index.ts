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
export type { FrontAPI } from "lib/front-api";
export { Cafe24API } from "lib/front-api";

import { Cafe24API } from "lib/front-api";
export const frontApi = {
  cafe24: new Cafe24API(),
};

// utils
export { waitForDOM, waitForElement, getMeta } from "lib/utils";
