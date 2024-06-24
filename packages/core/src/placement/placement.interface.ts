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

export type AdcioPlacementCreateRecommendationProductsParams = Pick<
  ProductSuggestionRequestDto,
  | "placementId"
  | "placementPositionX"
  | "placementPositionY"
  | "birthYear"
  | "gender"
  | "area"
  | "categoryId"
  | "excludingProductIds"
>;

export type AdcioPlacementCreateRecommendationProductsResponse =
  ProductSuggestionResponseDto;

export type AdcioPlacementCreateRecommendationBannersParams = Pick<
  BannerSuggestionRequestDto,
  | "placementId"
  | "placementPositionX"
  | "placementPositionY"
  | "birthYear"
  | "gender"
  | "area"
>;

export type AdcioPlacementCreateRecommendationBannersResponse =
  BannerSuggestionResponseDto;
