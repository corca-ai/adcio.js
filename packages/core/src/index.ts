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
export type { ClientAPI } from "@adcio/lib/client-api";
export { Cafe24API } from "@adcio/lib/client-api";

import { Cafe24API } from "@adcio/lib/client-api";
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
} from "@adcio/lib/utils";

export {
  ElementSelector,
  VisualElementSelector,
  VisualPositionSelector,
  ListedElementSelector,
  Candidate,
  getDepth,
  getElementAtDepth,
  getCssSelector,
  dfs,
} from "@adcio/lib/selectors";
