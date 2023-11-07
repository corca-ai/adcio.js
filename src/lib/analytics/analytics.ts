import { Configuration } from "api/controller/v1";
import { EventsApi, PerformanceApi } from "api/receiver/v1";
import { AdcioCore } from "lib/core";
import {
  AdcioAnalyticsProps,
  AdcioOnAddToCartFunction,
  AdcioOnClickFunction,
  AdcioOnImpressionFunction,
  AdcioOnPageViewFunction,
  AdcioOnPurchaseFunction,
} from "./analytics.interface";

export class AdcioAnalytics {
  private apiConfig: Configuration;
  private adcioCore: AdcioCore;

  constructor(config: AdcioAnalyticsProps) {
    this.adcioCore = config.adcioCore;
    this.apiConfig = new Configuration({
      basePath: config.receiverEndpoint,
      baseOptions: {
        headers: {
          Authorization: "",
        },
      },
    });
  }

  async onPageView(params: AdcioOnPageViewFunction) {
    await new EventsApi(this.apiConfig).eventsControllerOnPageView({
      ...params,
      ...this.adcioCore.getSessionDto(),
    });
  }

  async onImpression(params: AdcioOnImpressionFunction) {
    await new PerformanceApi(this.apiConfig).performanceControllerOnImpression({
      ...params,
    });
  }

  async onClick(params: AdcioOnClickFunction) {
    await new PerformanceApi(this.apiConfig).performanceControllerOnClick({
      ...params,
    });
  }

  async onAddToCart(params: AdcioOnAddToCartFunction) {
    await new EventsApi(this.apiConfig).eventsControllerOnAddToCart({
      ...params,
      ...this.adcioCore.getSessionDto(),
    });
  }

  async onPurchase(params: AdcioOnPurchaseFunction) {
    await new EventsApi(this.apiConfig).eventsControllerOnPurchase({
      ...params,
      ...this.adcioCore.getSessionDto(),
    });
  }
}
