import { AdcioCreateSuggestionParams } from "adcio/adcio.interface";
import { Configuration } from "api/controller/v1";
import { AdcioCore } from "lib/core";

export type AdcioPlacementParams = {
  adcioCore: AdcioCore;
  apiConfig: Configuration;
};

export type AdcioPlacementCreateSuggestionParams = AdcioCreateSuggestionParams;
