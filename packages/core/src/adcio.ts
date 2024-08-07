import {
  AdcioConfig,
  AdcioCreateAdvertisementBannersParams,
  AdcioCreateAdvertisementBannersResponse,
  AdcioCreateAdvertisementProductsParams,
  AdcioCreateAdvertisementProductsResponse,
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
  AdcioOnSearchParams,
  AdcioParams,
  AdcioSearchParams,
  AdcioSearchResponse,
} from "./adcio.interface";
import { AdcioAnalytics } from "./analytics";
import { AdcioCore } from "./core";
import { AdcioImpressionObserver } from "./impression-observer";
import { AdcioPlacement } from "./placement";
import { AdcioSearchEngine } from "./search";

export class Adcio {
  private readonly config: AdcioConfig;
  private adcioCore: AdcioCore;
  private adcioPlacement: AdcioPlacement;
  private adcioAnalytics: AdcioAnalytics;
  private adcioSearchEngine: AdcioSearchEngine;

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

    this.adcioSearchEngine = new AdcioSearchEngine({
      adcioCore: this.adcioCore,
      messengerEndpoint: this.config.messengerEndpoint,
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

  public onSearch(params: AdcioOnSearchParams) {
    return this.adcioAnalytics.onSearch(params);
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

  public async createAdvertisementProducts(
    params: AdcioCreateAdvertisementProductsParams,
  ): Promise<AdcioCreateAdvertisementProductsResponse> {
    return this.adcioPlacement.createAdvertisementProducts(params);
  }

  public async createAdvertisementBanners(
    params: AdcioCreateAdvertisementBannersParams,
  ): Promise<AdcioCreateAdvertisementBannersResponse> {
    return this.adcioPlacement.createAdvertisementBanners(params);
  }

  // AdcioSearchEngine
  public async search(params: AdcioSearchParams): Promise<AdcioSearchResponse> {
    return this.adcioSearchEngine.search(params);
  }
}
