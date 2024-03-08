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
export const clientApi = {
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

export {
  ElementSelector,
  VisualElementSelector,
  ListedElementSelector,
  Candidate,
  getCssSelector,
  dfs,
} from "lib/selectors";
