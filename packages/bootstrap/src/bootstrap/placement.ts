import {
  FetchActivePlacementsResponseDto,
  PlacementDevelopEnvironmentEnum,
  PlacementSuggestionTypeEnum,
  PlacementSupportEnvironmentEnum,
  PlacementTypeEnum,
} from "@adcio.js/api/controller/v1";
import { Adcio } from "@adcio.js/core";
import { renderers } from "@adcio.js/widget";
import { AdcioError } from "../errors";

export class AdcioPlacementBootstrap {
  private adcioInstance: Adcio;

  constructor(config: { adcioInstance: Adcio }) {
    this.adcioInstance = config.adcioInstance;
  }

  public async loadPlacements(pageName: string, isMobile: boolean | null) {
    const placements = await this.adcioInstance.fetchPlacements({
      pageName,
      supportEnvironment:
        isMobile === null
          ? undefined
          : isMobile === true
            ? PlacementSupportEnvironmentEnum.WebMobile
            : PlacementSupportEnvironmentEnum.Web,
    });
    if (!placements || placements.length === 0) {
      throw new AdcioError("no placements fetched");
    }
    placements.map((placement) => this.loadPlacement(placement));
  }

  public async loadPlacement(placement: FetchActivePlacementsResponseDto) {
    switch (placement.suggestionType) {
      case PlacementSuggestionTypeEnum.Advertise:
        switch (placement.type) {
          case PlacementTypeEnum.Grid:
            return this.loadAdvertisementProducts(placement.id);
          case PlacementTypeEnum.Banner:
            return this.loadAdvertisementBanners(placement.id);
        }
      case PlacementSuggestionTypeEnum.Recommend:
        switch (placement.type) {
          case PlacementTypeEnum.Grid:
            return this.loadRecommendationProducts(placement.id);
          case PlacementTypeEnum.Banner:
            return this.loadRecommendationBanners(placement.id);
        }
    }
  }

  private async loadRecommendationProducts(placementId: string) {
    const recommendation =
      await this.adcioInstance.createRecommendationProducts({
        placementId,
      });
    if (!recommendation) {
      throw new AdcioError(
        `no recommendations fetched for placement ${placementId}`,
      );
    }
    if (
      recommendation.placement.developEnvironment ===
      PlacementDevelopEnvironmentEnum.Widget
    ) {
      const container = document.getElementById(`adcio:${placementId}`);
      if (!container) {
        throw new AdcioError(
          `container not found for placement ${placementId}`,
        );
      }
      if (!recommendation.placement.widgetValue) {
        throw new AdcioError(
          `widget value not found for placement ${placementId}`,
        );
      }
      const renderer = renderers.getRenderer(
        recommendation.placement.widgetValue.widgetId,
      );
      const element = renderer.render(recommendation, this.adcioInstance);
      container.replaceWith(element);
      renderer.postRender(element, recommendation.placement.widgetValue.values);
    } else {
      throw new AdcioError(
        `bootstrap does not support develop environment for placement ${placementId}: ${recommendation.placement.developEnvironment}`,
      );
    }
  }

  private async loadRecommendationBanners(placementId: string) {
    const recommendations =
      await this.adcioInstance.createRecommendationBanners({
        placementId,
      });
    if (!recommendations) {
      throw new AdcioError(
        `no recommendations fetched for placement ${placementId}`,
      );
    }
  }

  private async loadAdvertisementProducts(placementId: string) {
    // const advertisements = await this.adcioInstance.createAdvertisementProducts({
    //   placementId,
    // });
    throw new AdcioError(`Not implemented: ${placementId}`);
  }

  private async loadAdvertisementBanners(placementId: string) {
    // const advertisements = await this.adcioInstance.createAdvertisementBanners({
    //   placementId,
    // });
    throw new AdcioError(`Not implemented: ${placementId}`);
  }
}
