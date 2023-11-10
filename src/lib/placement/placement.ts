import { Configuration, SuggestionApi } from "api/controller/v1";
import { AdcioCore } from "lib/core";
import {
  AdcioPlacementParams,
  AdcioPlacementCreateSuggestionParams,
} from "./placement.interface";

export class AdcioPlacement {
  private adcioCore: AdcioCore;
  private apiConfig: Configuration;

  constructor({ adcioCore, apiEndpoint }: AdcioPlacementParams) {
    this.adcioCore = adcioCore;
    this.apiConfig = new Configuration({ basePath: apiEndpoint });
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
