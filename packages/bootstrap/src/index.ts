export { Adcio } from "@adcio.js/core";
export type * from "@adcio.js/core";
export {
  waitForDOM,
  waitForElement,
  getMeta,
  getQuery,
  createElement,
  createNestedElement,
} from "@adcio.js/core";

export { AdcioBootstrap } from "./bootstrap";

document.dispatchEvent(new CustomEvent("adcio:loaded"));
