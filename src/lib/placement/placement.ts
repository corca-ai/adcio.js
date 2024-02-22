import { Configuration, PageApi, SuggestionApi } from "api/controller/v1";
import { isAxiosError } from "axios";
import { ERROR_CODE, PLACEMENT_ERROR_MESSAGE } from "lib/constants/error";
import { AdcioCore } from "lib/core";
import { APIError } from "lib/error";
import {
  AdcioPlacementParams,
  AdcioPlacementFetchPlacementsParams,
  AdcioPlacementCreateSuggestionProductsParams,
  AdcioPlacementCreateSuggestionParams,
} from "./placement.interface";

export class AdcioPlacement {
  private adcioCore: AdcioCore;
  private apiConfig: Configuration;

  constructor({ adcioCore, apiEndpoint }: AdcioPlacementParams) {
    this.adcioCore = adcioCore;
    this.apiConfig = new Configuration({ basePath: apiEndpoint });
  }

  private handleError(error: unknown) {
    if (!(isAxiosError(error) && error.response)) {
      throw error;
    }

    if (error.response?.status === 400) {
      throw new APIError(error.response?.status, error.response.data.message);
    }

    switch (Number(error.response.data.message)) {
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
          PLACEMENT_ERROR_MESSAGE.UNKNOWN_ERROR,
        );
    }
  }

  public async fetchPlacements(params: AdcioPlacementFetchPlacementsParams) {
    try {
      const { data } = await new PageApi(
        this.apiConfig,
      ).pageControllerFetchActivePlacements(
        params.pageName,
        this.adcioCore.getClientId(),
      );

      return data;
    } catch (error) {
      this.handleError(error);
    }
  }

  public async createSuggestion(params: AdcioPlacementCreateSuggestionParams) {
    try {
      const { data } = await new SuggestionApi(
        this.apiConfig,
      ).suggestionControllerSuggest({
        customerId: this.adcioCore.getCustomerId(),
        sessionId: this.adcioCore.getSessionId(),
        deviceId: this.adcioCore.getDeviceId(),
        ...params,
      });

      return data;
    } catch (error) {
      this.handleError(error);
    }
  }

  public async createSuggestionProducts(
    params: AdcioPlacementCreateSuggestionProductsParams,
  ) {
    try {
      const { data } = await new SuggestionApi(
        this.apiConfig,
      ).suggestionControllerSuggestProducts({
        customerId: this.adcioCore.getCustomerId(),
        sessionId: this.adcioCore.getSessionId(),
        deviceId: this.adcioCore.getDeviceId(),
        ...params,
      });
      return data;
    } catch (error) {
      this.handleError(error);
    }
  }
}
