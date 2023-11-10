import { Configuration } from "api/controller/v1";
import { EventsApi, PerformanceApi } from "api/receiver/v1";
import { AdcioCore } from "lib/core";
import {
  AdcioAnalyticsParams,
  AdcioAnalyticsOnPageViewParams,
  AdcioAnalyticsOnImpressionParams,
  AdcioAnalyticsOnClickParams,
  AdcioAnalyticsOnAddToCartParams,
  AdcioAnalyticsOnPurchaseParams,
} from "./analytics.interface";

export class AdcioAnalytics {
  private adcioCore: AdcioCore;
  private apiConfig: Configuration;

  constructor(params: AdcioAnalyticsParams) {
    this.adcioCore = params.adcioCore;
    this.apiConfig = new Configuration({
      basePath: params.receiverEndpoint,
      baseOptions: {
        headers: {
          Authorization: "",
        },
      },
    });
  }

  async onPageView(params: AdcioAnalyticsOnPageViewParams) {
    await new EventsApi(this.apiConfig).eventsControllerOnPageView({
      ...params,
      ...this.adcioCore.getSessionDto(),
    });
  }

  async onImpression(params: AdcioAnalyticsOnImpressionParams) {
    await new PerformanceApi(this.apiConfig).performanceControllerOnImpression({
      ...params,
    });
  }

  async onClick(params: AdcioAnalyticsOnClickParams) {
    await new PerformanceApi(this.apiConfig).performanceControllerOnClick({
      ...params,
    });
  }

  async onAddToCart(params: AdcioAnalyticsOnAddToCartParams) {
    await new EventsApi(this.apiConfig).eventsControllerOnAddToCart({
      ...params,
      ...this.adcioCore.getSessionDto(),
    });
  }

  async onPurchase(params: AdcioAnalyticsOnPurchaseParams) {
    await new EventsApi(this.apiConfig).eventsControllerOnPurchase({
      ...params,
      ...this.adcioCore.getSessionDto(),
    });
  }
}
