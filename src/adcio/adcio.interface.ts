import { LogOptionsDto, SuggestionRequestDto } from "api/controller/v1";
import {
  TrackAddToCartRequestDto,
  TrackClickRequestDto,
  TrackPurchaseRequestDto,
} from "api/receiver/v1";

export interface AdcioArgs {
  clientId: string;
  customerId: string;
}

export interface AdcioConfig extends AdcioArgs {
  apiEndpoint: string;
  receiverEndpoint: string;
}

type OmitSessionFields<T> = Omit<
  T,
  "storeId" | "sessionId" | "deviceId" | "customerId"
>;

export type AdcioOnPageViewArgs = string;

export type AdcioOnClickArgs = TrackClickRequestDto;

export type AdcioOnAddToCartArgs = Omit<
  OmitSessionFields<TrackAddToCartRequestDto>,
  "requestId" | "adsetId"
>;

export type AdcioOnPurchaseArgs = Omit<
  OmitSessionFields<TrackPurchaseRequestDto>,
  "requestId" | "adsetId"
>;

export type AdcioOnDetectImpressionArgs = {
  logOption: LogOptionsDto;
  selector: string;
  detector: (element: Element) => boolean;
};

export type AdcioCreateSuggestionArgs = Pick<
  SuggestionRequestDto,
  | "placementId"
  | "placementPositionX"
  | "placementPositionY"
  | "age"
  | "gender"
  | "area"
>;
