import { Configuration } from "@adcio.js/api/controller/v1";
import { EventsApi, LogsApi } from "@adcio.js/api/receiver/v1";
import {
  AdcioAnalyticsParams,
  AdcioAnalyticsOnPageViewParams,
  AdcioAnalyticsOnImpressionParams,
  AdcioAnalyticsOnClickParams,
  AdcioAnalyticsOnAddToCartParams,
  AdcioAnalyticsOnPurchaseParams,
  AdcioAnalyticsOnSearchParams,
} from "./analytics.interface";
import { AdcioCore } from "../core";
import { PACKAGE_VERSION } from "../version";

const sdkVersion = `js ${PACKAGE_VERSION}`;

export class AdcioAnalytics {
  private adcioCore: AdcioCore;
  private apiConfig: Configuration;

  constructor(params: AdcioAnalyticsParams) {
    this.adcioCore = params.adcioCore;
    this.apiConfig = new Configuration({
      basePath: params.receiverEndpoint,
    });
  }

  commonParams() {
    return {
      ...this.adcioCore.getSessionDto(),
      sdkVersion,
      userAgent:
        typeof navigator !== "undefined" && navigator.userAgent
          ? navigator.userAgent
          : "",
    };
  }

  async onPageView(params: AdcioAnalyticsOnPageViewParams) {
    await new EventsApi(this.apiConfig).eventsControllerOnPageView({
      ...params,
      ...this.commonParams(),
    });
  }

  async onImpression(params: AdcioAnalyticsOnImpressionParams) {
    await new EventsApi(this.apiConfig).eventsControllerOnImpression({
      ...params,
      ...this.commonParams(),
    });
  }

  async onClick(params: AdcioAnalyticsOnClickParams) {
    await new EventsApi(this.apiConfig).eventsControllerOnClick({
      ...params,
      ...this.commonParams(),
    });
  }

  async onAddToCart(params: AdcioAnalyticsOnAddToCartParams) {
    await new EventsApi(this.apiConfig).eventsControllerOnAddToCart({
      ...params,
      ...this.commonParams(),
    });
  }

  async onPurchase(params: AdcioAnalyticsOnPurchaseParams) {
    await new EventsApi(this.apiConfig).eventsControllerOnPurchase({
      ...params,
      ...this.commonParams(),
    });
  }

  async onSearch(params: AdcioAnalyticsOnSearchParams) {
    await new LogsApi(this.apiConfig).logsControllerOnSearch({
      ...params,
      ...this.commonParams(),
    });
  }
}
