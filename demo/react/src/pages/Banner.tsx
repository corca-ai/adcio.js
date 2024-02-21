import "swiper/css";
import "swiper/css/pagination";
import "src/styles/banner.css";

import { useEffect, useState } from "react";
import { Adcio } from "adcio.js/adcio";
import { SuggestionDto } from "adcio.js/api/controller/v1/api";
import { SuggestionTestId } from "../../../../mock/constants";
import { Banner } from "src/component/banner";

interface Props {
  adcioInstance: Adcio;
}

export default function BannerPage({ adcioInstance }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [suggestionData, setSuggestionData] = useState<SuggestionDto[]>([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await adcioInstance.createSuggestion({
        placementId: SuggestionTestId.SUCCESS_PLACEMENT,
      });
      setSuggestionData(response.suggestions);
      setIsLoading(false);
    }
    fetchMyAPI();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <div className="title">[PC] Banner Test</div>
      <Banner
        suggestionData={suggestionData}
        impressSlide={(currentSlideData) => {
          adcioInstance.onImpression(currentSlideData.logOptions);
        }}
        clickSlide={(currentSlideData) => {
          adcioInstance.onClick(currentSlideData.logOptions);
        }}
      />
    </div>
  );
}
