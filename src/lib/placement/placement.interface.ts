import {
  SuggestionProductsRequestDto,
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

export type AdcioPlacementCreateSuggestionParams = Pick<
  SuggestionRequestDto,
  | "placementId"
  | "placementPositionX"
  | "placementPositionY"
  | "birthYear"
  | "gender"
  | "area"
>;

export type AdcioPlacementCreateSuggestionProductsParams = Pick<
  SuggestionProductsRequestDto,
  | "placementId"
  | "placementPositionX"
  | "placementPositionY"
  | "birthYear"
  | "gender"
  | "area"
  | "categoryIdOnStore"
  | "excludingProductIds"
>;
