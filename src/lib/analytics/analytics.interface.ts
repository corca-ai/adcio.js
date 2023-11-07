import {
  TrackAddToCartRequestDto,
  TrackClickRequestDto,
  TrackImpressionRequestDto,
  TrackPageViewRequestDto,
  TrackPurchaseRequestDto,
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

export type AdcioOnPageViewFunction =
  OmitSessionFields<TrackPageViewRequestDto>;

export type AdcioOnImpressionFunction = TrackImpressionRequestDto;

export type AdcioOnClickFunction = TrackClickRequestDto;

export type AdcioOnAddToCartFunction = Omit<
  OmitSessionFields<TrackAddToCartRequestDto>,
  "requestId" | "adsetId"
>;

export type AdcioOnPurchaseFunction = Omit<
  OmitSessionFields<TrackPurchaseRequestDto>,
  "requestId" | "adsetId"
>;
