import { Configuration, SuggestionApi } from "api/controller/v1";
import { isAxiosError } from "axios";
import { ERROR_CODE, PLACEMENT_ERROR_MESSAGE } from "lib/constants/error";
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
          case ERROR_CODE.SUGGESTION.PLACEMENT_NOT_FOUND:
            throw new APIError(
              error.response?.status,
              PLACEMENT_ERROR_MESSAGE.PLACEMENT_NOT_FOUND,
            );
          case ERROR_CODE.SUGGESTION.NO_ACTIVATED_PLACEMENT:
            throw new APIError(
              error.response?.status,
              PLACEMENT_ERROR_MESSAGE.NO_ACTIVATED_PLACEMENT,
            );
          default:
            throw new APIError(
              error.response?.status,
              "Failed to suggestions: An unknown error occurred",
            );
        }
      }
    }
  }
}
