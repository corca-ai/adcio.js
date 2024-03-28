import { CustomerId, StoreId } from "api/dto/session.dto";
import {
  AdcioAnalyticsOnPageViewParams,
  AdcioAnalyticsOnAddToCartParams,
  AdcioAnalyticsOnClickParams,
  AdcioAnalyticsOnPurchaseParams,
  AdcioAnalyticsOnImpressionParams,
} from "lib/analytics";
import {
  AdcioPlacementFetchPlacementsParams,
  AdcioPlacementCreateSuggestionParams,
  AdcioPlacementCreateRecommendationProductsParams,
  AdcioPlacementCreateRecommendationBannersParams,
} from "lib/placement";

export interface AdcioParams {
  clientId: StoreId;
  customerId?: CustomerId;
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
  filter?: (element: Element) => boolean;
};

export type AdcioFetchPlacementsParams = AdcioPlacementFetchPlacementsParams;

/**
 *  @deprecated
 */
export type AdcioCreateSuggestionParams = AdcioPlacementCreateSuggestionParams;

export type AdcioCreateRecommendationProductsParams =
  AdcioPlacementCreateRecommendationProductsParams;

export type AdcioCreateRecommendationBannersParams =
  AdcioPlacementCreateRecommendationBannersParams;
