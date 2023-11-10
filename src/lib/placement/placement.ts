import { Configuration, SuggestionApi } from "api/controller/v1";
import { AdcioCore } from "lib/core";
import {
  AdcioPlacementParams,
  AdcioPlacementCreateSuggestionParams,
} from "./placement.interface";

export class AdcioPlacement {
  private apiConfig: Configuration;
  private adcioCore: AdcioCore;

  constructor({ adcioCore, apiConfig }: AdcioPlacementParams) {
    this.adcioCore = adcioCore;
    this.apiConfig = apiConfig;
  }

  public async createSuggestion(params: AdcioPlacementCreateSuggestionParams) {
    const { data } = await new SuggestionApi(
      this.apiConfig,
    ).suggestionControllerSuggest({
      ...params,
      sessionId: this.adcioCore.getSessionId(),
      deviceId: this.adcioCore.getDeviceId(),
    });

    return data;
  }
}
