import { SuggestionRequestDto } from "api/controller/v1";

export interface AdcioArgs {
  clientId: string;
  customerId: string;
}

export interface AdcioConfig extends AdcioArgs {
  apiEndpoint: string;
  receiverEndpoint: string;
}

export interface AdcioCreateSuggestionArgs
  extends Pick<
    SuggestionRequestDto,
    | "placementId"
    | "placementPositionX"
    | "placementPositionY"
    | "age"
    | "gender"
    | "area"
  > {}
