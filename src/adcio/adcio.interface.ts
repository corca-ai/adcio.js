import { LogOptionsDto } from "api/controller/v1";
import { CustomerId, StoreId } from "api/dto/session.dto";
import {
  AdcioAnalyticsOnPageViewParams,
  AdcioAnalyticsOnAddToCartParams,
  AdcioAnalyticsOnClickParams,
  AdcioAnalyticsOnPurchaseParams,
  AdcioAnalyticsOnImpressionParams,
} from "lib/analytics";
import { AdcioPlacementCreateSuggestionParams } from "lib/placement";

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
  "productIdOnStore"
>;

export type AdcioOnImpressionParams = AdcioAnalyticsOnImpressionParams;

export type AdcioOnClickParams = AdcioAnalyticsOnClickParams;

export type AdcioOnAddToCartParams = AdcioAnalyticsOnAddToCartParams;

export type AdcioOnPurchaseParams = AdcioAnalyticsOnPurchaseParams;

export type AdcioOnDetectImpressionParams = {
  logOption: LogOptionsDto;
  selector: string;
  detector: (element: Element) => boolean;
};

export type AdcioCreateSuggestionParams = AdcioPlacementCreateSuggestionParams;
