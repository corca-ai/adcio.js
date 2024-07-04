import {
  BannerSuggestionRequestDto,
  ProductSuggestionRequestDto,
  FetchActivePlacementsResponseDto,
  ProductSuggestionResponseDto,
  BannerSuggestionResponseDto,
} from "@adcio.js/api/controller/v1";
import { AdcioCore } from "../core";

export type AdcioPlacementParams = {
  adcioCore: AdcioCore;
  apiEndpoint: string;
};

export type AdcioPlacementFetchPlacementsParams = {
  pageName: string;
};

export type AdcioPlacementFetchPlacementsResponse =
  FetchActivePlacementsResponseDto[];

export type AdcioPlacementCreateRecommendationProductsParams = Omit<
  ProductSuggestionRequestDto,
  | "clientId"
  | "sessionId"
  | "deviceId"
  | "sdkVersion"
  | "fromAgent"
  | "userAgent"
>;

export type AdcioPlacementCreateRecommendationProductsResponse =
  ProductSuggestionResponseDto;

export type AdcioPlacementCreateRecommendationBannersParams = Omit<
  BannerSuggestionRequestDto,
  "sessionId" | "deviceId" | "sdkVersion" | "fromAgent" | "userAgent"
>;

export type AdcioPlacementCreateRecommendationBannersResponse =
  BannerSuggestionResponseDto;

export type AdcioPlacementCreateAdvertisementProductsParams = Omit<
  ProductSuggestionRequestDto,
  | "clientId"
  | "sessionId"
  | "deviceId"
  | "sdkVersion"
  | "fromAgent"
  | "userAgent"
>;

export type AdcioPlacementCreateAdvertisementProductsResponse =
  ProductSuggestionResponseDto;

export type AdcioPlacementCreateAdvertisementBannersParams = Omit<
  BannerSuggestionRequestDto,
  "sessionId" | "deviceId" | "sdkVersion" | "fromAgent" | "userAgent"
>;

export type AdcioPlacementCreateAdvertisementBannersResponse =
  BannerSuggestionResponseDto;
