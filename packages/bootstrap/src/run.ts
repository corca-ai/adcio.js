import { waitForDOM } from "@adcio/lib/utils";
import { AdcioBootstrap } from "./bootstrap";

const isBrowser = typeof window !== "undefined";

if (isBrowser) {
  waitForDOM().then(() => AdcioBootstrap.run());
}
