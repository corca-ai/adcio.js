import { CustomerId, StoreId } from "@adcio.js/api/dto/session.dto";
import {
  AdcioAnalyticsOnPageViewParams,
  AdcioAnalyticsOnAddToCartParams,
  AdcioAnalyticsOnClickParams,
  AdcioAnalyticsOnPurchaseParams,
  AdcioAnalyticsOnImpressionParams,
} from "./analytics";
import { AdcioAnalyticsOnSearchParams } from "./analytics/analytics.interface";
import {
  AdcioPlacementFetchPlacementsParams,
  AdcioPlacementCreateRecommendationProductsParams,
  AdcioPlacementCreateRecommendationBannersParams,
} from "./placement";
import {
  AdcioPlacementCreateAdvertisementBannersParams,
  AdcioPlacementCreateAdvertisementBannersResponse,
  AdcioPlacementCreateAdvertisementProductsParams,
  AdcioPlacementCreateAdvertisementProductsResponse,
  AdcioPlacementCreateRecommendationBannersResponse,
  AdcioPlacementCreateRecommendationProductsResponse,
  AdcioPlacementFetchPlacementsResponse,
} from "./placement/placement.interface";
import {
  AdcioSearchEngineSearchParams,
  AdcioSearchEngineSearchResponse,
} from "./search";

export interface AdcioParams {
  clientId: StoreId;
  customerId?: CustomerId;
  serverMode?: boolean;
  deviceId?: string;
  sessionId?: string;
  apiEndpoint?: string;
  messengerEndpoint?: string;
  receiverEndpoint?: string;
}

export interface AdcioConfig extends AdcioParams {
  apiEndpoint: string;
  messengerEndpoint: string;
  receiverEndpoint: string;
}

export type AdcioOnPageViewParams = Pick<
  AdcioAnalyticsOnPageViewParams,
  "productIdOnStore" & "categoryIdsOnStore"
>;

export type AdcioOnImpressionParams = AdcioAnalyticsOnImpressionParams;

export type AdcioOnClickParams = AdcioAnalyticsOnClickParams;

export type AdcioOnAddToCartParams = AdcioAnalyticsOnAddToCartParams;

export type AdcioOnPurchaseParams = AdcioAnalyticsOnPurchaseParams;

export type AdcioOnSearchParams = AdcioAnalyticsOnSearchParams;

export type AdcioObserveImpressionParams = {
  element: Element;
  onImpression?: () => void;
  filter?: (element: Element) => boolean;
  once?: boolean;
};

export type AdcioFetchPlacementsParams = AdcioPlacementFetchPlacementsParams;
export type AdcioFetchPlacementsResponse =
  AdcioPlacementFetchPlacementsResponse;

export type AdcioCreateRecommendationProductsParams =
  AdcioPlacementCreateRecommendationProductsParams;
export type AdcioCreateRecommendationProductsResponse =
  AdcioPlacementCreateRecommendationProductsResponse;

export type AdcioCreateRecommendationBannersParams =
  AdcioPlacementCreateRecommendationBannersParams;
export type AdcioCreateRecommendationBannersResponse =
  AdcioPlacementCreateRecommendationBannersResponse;

export type AdcioCreateAdvertisementProductsParams =
  AdcioPlacementCreateAdvertisementProductsParams;
export type AdcioCreateAdvertisementProductsResponse =
  AdcioPlacementCreateAdvertisementProductsResponse;

export type AdcioCreateAdvertisementBannersParams =
  AdcioPlacementCreateAdvertisementBannersParams;
export type AdcioCreateAdvertisementBannersResponse =
  AdcioPlacementCreateAdvertisementBannersResponse;

export type AdcioSearchParams = AdcioSearchEngineSearchParams;
export type AdcioSearchResponse = AdcioSearchEngineSearchResponse;
