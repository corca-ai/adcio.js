import {
  AdcioConfig,
  AdcioCreateRecommendationBannersParams,
  AdcioCreateRecommendationBannersResponse,
  AdcioCreateRecommendationProductsParams,
  AdcioCreateRecommendationProductsResponse,
  AdcioFetchPlacementsParams,
  AdcioFetchPlacementsResponse,
  AdcioObserveImpressionParams,
  AdcioOnAddToCartParams,
  AdcioOnClickParams,
  AdcioOnImpressionParams,
  AdcioOnPageViewParams,
  AdcioOnPurchaseParams,
  AdcioParams,
} from "./adcio.interface";
import { AdcioAnalytics } from "./analytics/analytics";
import { AdcioCore } from "./core";
import { AdcioImpressionObserver } from "./impression-observer/impression-observer";
import { AdcioPlacement } from "./placement/placement";

export class Adcio {
  private readonly config: AdcioConfig;
  private adcioCore: AdcioCore;
  private adcioPlacement: AdcioPlacement;
  private adcioAnalytics: AdcioAnalytics;

  constructor(config: AdcioParams) {
    this.config = {
      apiEndpoint: "https://api.adcio.ai",
      messengerEndpoint: "https://messenger.adcio.ai",
      receiverEndpoint: "https://receiver.adcio.ai",
      ...config,
    };
    this.adcioCore = new AdcioCore({
      clientId: this.config.clientId,
      customerId: this.config.customerId,
      serverMode: this.config.serverMode,
      deviceId: this.config.deviceId,
      sessionId: this.config.sessionId,
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

  public getConfig() {
    return this.config;
  }

  public getClientId() {
    return this.adcioCore.getClientId();
  }

  public getDeviceId() {
    return this.adcioCore.getDeviceId();
  }

  public getCustomerId() {
    return this.adcioCore.getCustomerId();
  }

  public setCustomerId(customerId: string) {
    this.adcioCore.setCustomerId(customerId);
  }

  // AdcioAnalytics
  public onPageView(params: AdcioOnPageViewParams) {
    return this.adcioAnalytics.onPageView(params);
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

  // AdcioImpressionObserver
  public observeImpression(params: AdcioObserveImpressionParams) {
    const observer = new AdcioImpressionObserver({ filter: params.filter });
    if (params.onImpression) {
      observer.addImpressionListener(params.element, params.onImpression);
    }
    return observer.observe(params.element);
  }

  // AdcioPlacement
  public async fetchPlacements(
    params: AdcioFetchPlacementsParams,
  ): Promise<AdcioFetchPlacementsResponse> {
    return this.adcioPlacement.fetchPlacements(params);
  }

  /**
   *  @deprecated
   */
  public async createSuggestionProducts(
    params: AdcioCreateRecommendationProductsParams,
  ): Promise<AdcioCreateRecommendationProductsResponse> {
    return this.adcioPlacement.createRecommendationProducts(params);
  }

  public async createRecommendationProducts(
    params: AdcioCreateRecommendationProductsParams,
  ): Promise<AdcioCreateRecommendationProductsResponse> {
    return this.adcioPlacement.createRecommendationProducts(params);
  }

  public async createRecommendationBanners(
    params: AdcioCreateRecommendationBannersParams,
  ): Promise<AdcioCreateRecommendationBannersResponse> {
    return this.adcioPlacement.createRecommendationBanners(params);
  }
}
