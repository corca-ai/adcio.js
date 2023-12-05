import { Configuration, SuggestionApi } from "api/controller/v1";
import { isAxiosError } from "axios";
import { ERROR_CODE } from "lib/constants/error";
import { AdcioCore } from "lib/core";
import { APIError } from "lib/error";
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
    try {
      const { data } = await new SuggestionApi(
        this.apiConfig,
      ).suggestionControllerSuggest({
        ...params,
        sessionId: this.adcioCore.getSessionId(),
        deviceId: this.adcioCore.getDeviceId(),
      });

      return data;
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        switch (error.response.data.message) {
          case ERROR_CODE.SUGGESTION.INVALID_PLACEMENT_TYPE:
            throw new APIError(
              error.response?.status,
              `Failed to suggestions: The placement id(${params.placementId}) does not exist`,
            );
          default:
            throw new APIError(
              error.response?.status,
              "An unknown error occurred in Adcio web sdk.",
            );
        }
      }
    }
  }
}
