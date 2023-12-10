import { AdcioAnalytics } from "lib/analytics/analytics";
import { AdcioCore } from "lib/core";
import { AdcioImpressionDetector } from "lib/impression-detector/impression-detector";
import { AdcioPlacement } from "lib/placement/placement";
import {
  AdcioConfig,
  AdcioParams,
  AdcioCreateSuggestionParams,
  AdcioOnPageViewParams,
  AdcioOnAddToCartParams,
  AdcioOnClickParams,
  AdcioOnPurchaseParams,
  AdcioOnDetectImpressionParams,
  AdcioOnImpressionParams,
} from "./adcio.interface";

export class Adcio {
  private readonly config: AdcioConfig;
  private adcioCore: AdcioCore;
  private adcioPlacement: AdcioPlacement;
  private adcioAnalytics: AdcioAnalytics;

  constructor(config: AdcioParams) {
    this.config = {
      apiEndpoint: "https://api.adcio.ai",
      receiverEndpoint: "https://receiver.adcio.ai",
      ...config,
    };
    this.adcioCore = new AdcioCore({
      clientId: this.config.clientId,
      customerId: this.config.customerId,
    });

    this.adcioPlacement = new AdcioPlacement({
      adcioCore: this.adcioCore,
      apiEndpoint: this.config.apiEndpoint,
    });
    this.adcioAnalytics = new AdcioAnalytics({
      adcioCore: this.adcioCore,
      receiverEndpoint: this.config.receiverEndpoint,
    });
  }

  // AdcioAnalytics
  public onPageView(params: AdcioOnPageViewParams) {
    return this.adcioAnalytics.onPageView({
      path: window.location.pathname,
      title: document.title,
      referrer: document.referrer || undefined,
      ...params,
    });
  }

  public onImpression(logOptions: AdcioOnImpressionParams) {
    return this.adcioAnalytics.onImpression(logOptions);
  }

  public onClick(logOptions: AdcioOnClickParams) {
    return this.adcioAnalytics.onClick(logOptions);
  }

  public onAddToCart(params: AdcioOnAddToCartParams) {
    return this.adcioAnalytics.onAddToCart(params);
  }

  public onPurchase(params: AdcioOnPurchaseParams) {
    return this.adcioAnalytics.onPurchase(params);
  }

  // AdcioImpressionDetector
  public onDetectImpression(params: AdcioOnDetectImpressionParams) {
    return new AdcioImpressionDetector(params).detect((logOption) =>
      this.onImpression(logOption),
    );
  }

  // AdcioPlacement
  public async createSuggestion(params: AdcioCreateSuggestionParams) {
    return this.adcioPlacement.createSuggestion(params);
  }
}
