import { Configuration } from "api/controller/v1";
import { AdcioCore } from "lib/core";

export interface AdcioPlacementArgs {
  adcioCore: AdcioCore;
  apiConfig: Configuration;
}
