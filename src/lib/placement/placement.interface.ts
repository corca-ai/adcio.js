import {
  BannerSuggestionRequestDto,
  ProductSuggestionRequestDto,
  SuggestionRequestDto,
} from "api/controller/v1";
import { AdcioCore } from "lib/core";

export type AdcioPlacementParams = {
  adcioCore: AdcioCore;
  apiEndpoint: string;
};

export type AdcioPlacementFetchPlacementsParams = {
  pageName: string;
};

/**
 *  @deprecated
 */
export type AdcioPlacementCreateSuggestionParams = Pick<
  SuggestionRequestDto,
  | "placementId"
  | "placementPositionX"
  | "placementPositionY"
  | "birthYear"
  | "gender"
  | "area"
>;

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

export type AdcioPlacementCreateRecommendationBannersParams = Pick<
  BannerSuggestionRequestDto,
  | "placementId"
  | "placementPositionX"
  | "placementPositionY"
  | "birthYear"
  | "gender"
  | "area"
  | "categoryId"
>;
