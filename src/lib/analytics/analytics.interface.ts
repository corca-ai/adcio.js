import {
  AdcioOnAddToCartParams,
  AdcioOnClickParams,
  AdcioOnPurchaseParams,
} from "adcio/adcio.interface";
import {
  TrackImpressionRequestDto,
  TrackPageViewRequestDto,
} from "api/receiver/v1";
import { AdcioCore } from "lib/core";

export interface AdcioAnalyticsParams {
  adcioCore: AdcioCore;
  receiverEndpoint: string;
}

type OmitSessionFields<T> = Omit<
  T,
  "storeId" | "sessionId" | "deviceId" | "customerId"
>;

export type AdcioAnalyticsOnPageViewParams =
  OmitSessionFields<TrackPageViewRequestDto>;

export type AdcioAnalyticsOnImpressionParams =
  OmitSessionFields<TrackImpressionRequestDto>;

export type AdcioAnalyticsOnClickParams = OmitSessionFields<AdcioOnClickParams>;

export type AdcioAnalyticsOnAddToCartParams = AdcioOnAddToCartParams;

export type AdcioAnalyticsOnPurchaseParams = AdcioOnPurchaseParams;
