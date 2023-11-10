import { Configuration, LogOptionsDto } from "api/controller/v1";
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
} from "./adcio.interface";

export class Adcio {
  private readonly config: AdcioConfig;
  private apiConfig: Configuration;
  private adcioCore: AdcioCore;
  private adcioPlacement: AdcioPlacement;
  private adcioAnalytics: AdcioAnalytics;

  constructor(config: AdcioParams) {
    this.config = {
      apiEndpoint: "https://api.adcio.ai",
      receiverEndpoint: "https://receiver.adcio.ai",
      ...config,
    };

    this.apiConfig = new Configuration({ basePath: this.config.apiEndpoint });
    this.adcioCore = new AdcioCore({
      clientId: this.config.clientId,
      customerId: this.config.customerId,
    });
    this.adcioPlacement = new AdcioPlacement({
      adcioCore: this.adcioCore,
      apiConfig: this.apiConfig,
    });
    this.adcioAnalytics = new AdcioAnalytics({
      adcioCore: this.adcioCore,
      receiverEndpoint: this.config.receiverEndpoint,
    });
  }

  // AdcioAnalytics
  public onPageView(productIdOnStore?: AdcioOnPageViewParams) {
    this.adcioAnalytics.onPageView({
      path: window.location.pathname,
      title: document.title,
      referrer: document.referrer || undefined,
      productIdOnStore,
    });
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
    const onImpression = (logOptions: LogOptionsDto) => {
      this.adcioAnalytics.onImpression(logOptions);
    };

    return new AdcioImpressionDetector(params).detect(onImpression);
  }

  // AdcioPlacement
  public async createSuggestion(params: AdcioCreateSuggestionParams) {
    return this.adcioPlacement.createSuggestion(params);
  }
}
