import { AdcioCreateSuggestionParams } from "adcio/adcio.interface";
import { AdcioCore } from "lib/core";

export type AdcioPlacementParams = {
  adcioCore: AdcioCore;
  apiEndpoint: string;
};

export type AdcioPlacementCreateSuggestionParams = AdcioCreateSuggestionParams;
