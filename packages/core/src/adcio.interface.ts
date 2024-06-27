import { CustomerId, StoreId } from "@adcio.js/api/dto/session.dto";
import {
  AdcioAnalyticsOnPageViewParams,
  AdcioAnalyticsOnAddToCartParams,
  AdcioAnalyticsOnClickParams,
  AdcioAnalyticsOnPurchaseParams,
  AdcioAnalyticsOnImpressionParams,
} from "./analytics";
import {
  AdcioPlacementFetchPlacementsParams,
  AdcioPlacementCreateRecommendationProductsParams,
  AdcioPlacementCreateRecommendationBannersParams,
} from "./placement";
import {
  AdcioPlacementCreateRecommendationBannersResponse,
  AdcioPlacementCreateRecommendationProductsResponse,
  AdcioPlacementFetchPlacementsResponse,
} from "./placement/placement.interface";

export interface AdcioParams {
  clientId: StoreId;
  customerId?: CustomerId;
  serverMode?: boolean;
  deviceId?: string;
  sessionId?: string;
}

export interface AdcioConfig extends AdcioParams {
  apiEndpoint: string;
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
