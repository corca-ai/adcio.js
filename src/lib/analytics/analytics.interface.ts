import {
  AdcioOnAddToCartArgs,
  AdcioOnClickArgs,
  AdcioOnPurchaseArgs,
} from "adcio/adcio.interface";
import {
  TrackImpressionRequestDto,
  TrackPageViewRequestDto,
} from "api/receiver/v1";
import { AdcioCore } from "lib/core";

export interface AdcioAnalyticsProps {
  adcioCore: AdcioCore;
  receiverEndpoint: string;
}

type OmitSessionFields<T> = Omit<
  T,
  "storeId" | "sessionId" | "deviceId" | "customerId"
>;

export type AdcioAnalyticsOnPageViewArgs =
  OmitSessionFields<TrackPageViewRequestDto>;

export type AdcioAnalyticsOnImpressionArgs = TrackImpressionRequestDto;

export type AdcioAnalyticsOnClickArgs = AdcioOnClickArgs;

export type AdcioAnalyticsOnAddToCartArgs = AdcioOnAddToCartArgs;

export type AdcioAnalyticsOnPurchaseArgs = AdcioOnPurchaseArgs;
