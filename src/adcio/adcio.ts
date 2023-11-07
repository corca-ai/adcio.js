import { Configuration, LogOptionsDto } from "api/controller/v1";
import { AdcioAnalytics } from "lib/analytics/analytics";
import { AdcioCore } from "lib/core";
import { AdcioImpressionDetector } from "lib/impression-detector/impression-detector";
import { AdcioPlacement } from "lib/placement/placement";
import {
  AdcioConfig,
  AdcioArgs,
  AdcioCreateSuggestionArgs,
  AdcioOnPageViewArgs,
  AdcioOnAddToCartArgs,
  AdcioOnClickArgs,
  AdcioOnPurchaseArgs,
  AdcioOnDetectImpressionArgs,
} from "./adcio.interface";

export class Adcio {
  private readonly config: AdcioConfig;
  private apiConfig: Configuration;
  private adcioCore: AdcioCore;
  private adcioPlacement: AdcioPlacement;
  private adcioAnalytics: AdcioAnalytics;

  constructor(config: AdcioArgs) {
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
  public onPageView(productIdOnStore?: AdcioOnPageViewArgs) {
    this.adcioAnalytics.onPageView({
      path: window.location.pathname,
      title: document.title,
      referrer: document.referrer || undefined,
      productIdOnStore,
    });
  }

  public onClick(logOptions: AdcioOnClickArgs) {
    return this.adcioAnalytics.onClick(logOptions);
  }

  public onAddToCart(args: AdcioOnAddToCartArgs) {
    return this.adcioAnalytics.onAddToCart(args);
  }

  public onPurchase(args: AdcioOnPurchaseArgs) {
    return this.adcioAnalytics.onPurchase(args);
  }

  // AdcioImpressionDetector
  public onDetectImpression(args: AdcioOnDetectImpressionArgs) {
    const onImpression = (logOptions: LogOptionsDto) => {
      this.adcioAnalytics.onImpression(logOptions);
    };

    return new AdcioImpressionDetector(args).detect(onImpression);
  }

  // AdcioPlacement
  public async createSuggestion(params: AdcioCreateSuggestionArgs) {
    return this.adcioPlacement.createSuggestion(params);
  }
}
