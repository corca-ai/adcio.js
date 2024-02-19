import { SuggestionRequestDto } from "api/controller/v1";
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

export type AdcioPlacementCreateProductSuggestionParams =
  AdcioPlacementCreateSuggestionParams & {
    //TODO: fix after API is updated in production
    categoryIdOnStore: string;
    excludingProductIds: string[]; // -> composeId e.g) "['871fab52-4db5-41ab-b1d8-ffb16461c246:132']"
  };
