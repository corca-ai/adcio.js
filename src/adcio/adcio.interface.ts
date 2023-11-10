import { LogOptionsDto, SuggestionRequestDto } from "api/controller/v1";
import {
  TrackAddToCartRequestDto,
  TrackClickRequestDto,
  TrackPurchaseRequestDto,
} from "api/receiver/v1";

export interface AdcioParams {
  clientId: string;
  customerId: string;
}

export interface AdcioConfig extends AdcioParams {
  apiEndpoint: string;
  receiverEndpoint: string;
}

type OmitSessionFields<T> = Omit<
  T,
  "storeId" | "sessionId" | "deviceId" | "customerId"
>;

export type AdcioOnPageViewParams = string;

export type AdcioOnClickParams = TrackClickRequestDto;

export type AdcioOnAddToCartParams = Omit<
  OmitSessionFields<TrackAddToCartRequestDto>,
  "requestId" | "adsetId"
>;

export type AdcioOnPurchaseParams = Omit<
  OmitSessionFields<TrackPurchaseRequestDto>,
  "requestId" | "adsetId"
>;

export type AdcioOnDetectImpressionParams = {
  logOption: LogOptionsDto;
  selector: string;
  detector: (element: Element) => boolean;
};

export type AdcioCreateSuggestionParams = Pick<
  SuggestionRequestDto,
  | "placementId"
  | "placementPositionX"
  | "placementPositionY"
  | "age"
  | "gender"
  | "area"
>;
