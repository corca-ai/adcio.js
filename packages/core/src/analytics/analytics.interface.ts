import {
  TrackAddToCartRequestDto,
  TrackClickRequestDto,
  TrackImpressionRequestDto,
  TrackPageViewRequestDto,
  TrackPurchaseRequestDto,
} from "@adcio.js/api/receiver/v1";
import { AdcioCore } from "../core";

export interface AdcioAnalyticsParams {
  adcioCore: AdcioCore;
  receiverEndpoint: string;
}

type OmitSessionFields<T> = Omit<
  T,
  "storeId" | "sessionId" | "deviceId" | "customerId"
>;

type OmitSuggestionFields<T> = Omit<T, "requestId" | "adsetId">;

export type AdcioAnalyticsOnPageViewParams =
  OmitSessionFields<TrackPageViewRequestDto>;

export type AdcioAnalyticsOnClickParams =
  OmitSessionFields<TrackClickRequestDto>;

export type AdcioAnalyticsOnImpressionParams =
  OmitSessionFields<TrackImpressionRequestDto>;

export type AdcioAnalyticsOnAddToCartParams = OmitSuggestionFields<
  OmitSessionFields<TrackAddToCartRequestDto>
>;

export type AdcioAnalyticsOnPurchaseParams = OmitSuggestionFields<
  OmitSessionFields<TrackPurchaseRequestDto>
>;
