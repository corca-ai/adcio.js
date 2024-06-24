import "swiper/css";
import "swiper/css/pagination";
import "src/styles/banner.css";

import { useEffect, useState } from "react";
import {
  Adcio,
  AdcioCreateRecommendationBannersResponse,
} from "@adcio.js/core";
import { Banner } from "src/component/banner";

interface Props {
  adcioInstance: Adcio;
}

export default function BannerPage({ adcioInstance }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [recommendation, setRecommendation] =
    useState<AdcioCreateRecommendationBannersResponse>();

  useEffect(() => {
    adcioInstance
      .createRecommendationBanners({
        placementId: "a7504fc7-e62a-4a0e-a262-95cbe4c11982",
      })
      .then((response) => {
        setRecommendation(response);
        setIsLoading(false);
      });
  }, [adcioInstance]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="title">[PC] Banner Test</div>
      <Banner
        recommendation={recommendation}
        impressSlide={(currentSlideData) => {
          adcioInstance.onImpression(currentSlideData);
        }}
        clickSlide={(currentSlideData) => {
          adcioInstance.onClick(currentSlideData);
        }}
      />
    </div>
  );
}
