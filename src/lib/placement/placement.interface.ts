import { AdcioCreateSuggestionArgs } from "adcio/adcio.interface";
import { Configuration } from "api/controller/v1";
import { AdcioCore } from "lib/core";

export type AdcioPlacementArgs = {
  adcioCore: AdcioCore;
  apiConfig: Configuration;
};

export type AdcioPlacementCreateSuggestionArgs = AdcioCreateSuggestionArgs;
