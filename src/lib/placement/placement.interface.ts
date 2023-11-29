import { SuggestionRequestDto } from "api/controller/v1";
import { AdcioCore } from "lib/core";

export type AdcioPlacementParams = {
  adcioCore: AdcioCore;
  apiEndpoint: string;
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
