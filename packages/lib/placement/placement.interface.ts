import {
  BannerSuggestionRequestDto,
  ProductSuggestionRequestDto,
  SuggestionRequestDto,
} from "@adcio/api/controller/v1";
import { AdcioCore } from "../core";

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
