import { waitForDOM } from "@adcio.js/lib/utils";
import { AdcioBootstrap } from "./bootstrap";

const isBrowser = typeof window !== "undefined";

if (isBrowser) {
  waitForDOM().then(() => AdcioBootstrap.run());
}
