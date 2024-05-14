import { Configuration } from "@adcio.js/api/controller/v1";
import { EventsApi } from "@adcio.js/api/receiver/v1";
import {
  AdcioAnalyticsParams,
  AdcioAnalyticsOnPageViewParams,
  AdcioAnalyticsOnImpressionParams,
  AdcioAnalyticsOnClickParams,
  AdcioAnalyticsOnAddToCartParams,
  AdcioAnalyticsOnPurchaseParams,
} from "./analytics.interface";
import { AdcioCore } from "../core";

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
    await new EventsApi(this.apiConfig).eventsControllerOnImpression({
      ...params,
      ...this.adcioCore.getSessionDto(),
    });
  }

  async onClick(params: AdcioAnalyticsOnClickParams) {
    await new EventsApi(this.apiConfig).eventsControllerOnClick({
      ...params,
      ...this.adcioCore.getSessionDto(),
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
