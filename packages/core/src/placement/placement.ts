import {
  Configuration,
  PageApi,
  SuggestionApi,
} from "@adcio.js/api/controller/v1";
import { isAxiosError } from "axios";
import { ERROR_CODE, PLACEMENT_ERROR_MESSAGE, APIError } from "./api-error";
import type {
  AdcioPlacementParams,
  AdcioPlacementFetchPlacementsParams,
  AdcioPlacementCreateRecommendationProductsParams,
  AdcioPlacementCreateRecommendationBannersParams,
  AdcioPlacementFetchPlacementsResponse,
  AdcioPlacementCreateRecommendationProductsResponse,
  AdcioPlacementCreateRecommendationBannersResponse,
  AdcioPlacementCreateAdvertisementBannersParams,
  AdcioPlacementCreateAdvertisementProductsParams,
  AdcioPlacementCreateAdvertisementBannersResponse,
  AdcioPlacementCreateAdvertisementProductsResponse,
} from "./placement.interface";
import { AdcioCore } from "../core";

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

  public async fetchPlacements(
    params: AdcioPlacementFetchPlacementsParams,
  ): Promise<AdcioPlacementFetchPlacementsResponse> {
    try {
      const { data } = await new PageApi(
        this.apiConfig,
      ).pageControllerFetchActivePlacements(
        params.pageName,
        this.adcioCore.getClientId(),
        params.supportEnvironment,
      );
      return data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  public async createRecommendationProducts(
    params: AdcioPlacementCreateRecommendationProductsParams,
  ): Promise<AdcioPlacementCreateRecommendationProductsResponse> {
    try {
      const { data } = await new SuggestionApi(
        this.apiConfig,
      ).suggestionControllerRecommendProducts({
        clientId: this.adcioCore.getClientId(),
        customerId: this.adcioCore.getCustomerId(),
        sessionId: this.adcioCore.getSessionId(),
        deviceId: this.adcioCore.getDeviceId(),
        ...params,
      });
      return data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  public async createRecommendationBanners(
    params: AdcioPlacementCreateRecommendationBannersParams,
  ): Promise<AdcioPlacementCreateRecommendationBannersResponse> {
    try {
      const { data } = await new SuggestionApi(
        this.apiConfig,
      ).suggestionControllerRecommendBanners({
        customerId: this.adcioCore.getCustomerId(),
        sessionId: this.adcioCore.getSessionId(),
        deviceId: this.adcioCore.getDeviceId(),
        ...params,
      });
      return data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  public async createAdvertisementProducts(
    params: AdcioPlacementCreateAdvertisementProductsParams,
  ): Promise<AdcioPlacementCreateAdvertisementProductsResponse> {
    try {
      const { data } = await new SuggestionApi(
        this.apiConfig,
      ).suggestionControllerAdvertiseProducts({
        clientId: this.adcioCore.getClientId(),
        customerId: this.adcioCore.getCustomerId(),
        sessionId: this.adcioCore.getSessionId(),
        deviceId: this.adcioCore.getDeviceId(),
        ...params,
      });
      return data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }

  public async createAdvertisementBanners(
    params: AdcioPlacementCreateAdvertisementBannersParams,
  ): Promise<AdcioPlacementCreateAdvertisementBannersResponse> {
    try {
      const { data } = await new SuggestionApi(
        this.apiConfig,
      ).suggestionControllerAdvertiseBanners({
        customerId: this.adcioCore.getCustomerId(),
        sessionId: this.adcioCore.getSessionId(),
        deviceId: this.adcioCore.getDeviceId(),
        ...params,
      });
      return data;
    } catch (error) {
      this.handleError(error);
      throw error;
    }
  }
}
