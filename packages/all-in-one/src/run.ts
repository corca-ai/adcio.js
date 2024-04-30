import { waitForDOM } from "@adcio/lib/utils";
import { AdcioAllInOne } from "./all-in-one";

waitForDOM().then(() => AdcioAllInOne.run());
