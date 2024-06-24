import { waitForDOM } from "@adcio.js/core";
import { AdcioBootstrap } from "./bootstrap";

const isBrowser = typeof window !== "undefined";

if (isBrowser) {
  waitForDOM().then(() => AdcioBootstrap.run());
}
