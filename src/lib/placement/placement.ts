import { AdcioCreateSuggestionArgs } from "adcio/adcio.interface";
import { Configuration, SuggestionApi } from "api/controller/v1";
import { AdcioCore } from "lib/core";
import { AdcioPlacementArgs } from "./placement.interface";

export class AdcioPlacement {
  private apiConfig: Configuration;
  private adcioCore: AdcioCore;

  constructor({ adcioCore, apiConfig }: AdcioPlacementArgs) {
    this.adcioCore = adcioCore;
    this.apiConfig = apiConfig;
  }

  public async createSuggestion(params: AdcioCreateSuggestionArgs) {
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
