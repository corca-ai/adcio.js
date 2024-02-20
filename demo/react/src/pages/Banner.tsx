import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/banner.css";

import { useEffect, useState } from "react";
import { Adcio } from "adcio.js/src/adcio";
import { SuggestionTestId } from "../../../../mock/constants";
import { SuggestionDto } from "adcio.js/src/api/controller/v1/api";

interface Props {
  adcioInstance: Adcio;
}

export default function Banner({ adcioInstance }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [suggestionData, setSuggestionData] = useState<SuggestionDto[]>(null);

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
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination]}
        navigation={true}
        className="mySwiper"
        pagination={{
          clickable: true,
        }}
      >
        {suggestionData.map(({ banner }) => (
          <SwiperSlide key={banner.id}>
            <img src={banner.creative.mediaUrl} />
            <div className="explain_banner">
              {banner.data["title"] && (
                <p
                  className="title"
                  style={{
                    color: banner.data["titleColor"],
                  }}
                >
                  {banner.data["title"]}
                </p>
              )}
              {banner.data["subtitle"] && (
                <p
                  className="subtitle"
                  style={{
                    color: banner.data["subtitleColor"],
                  }}
                >
                  {banner.data["subtitle"]}
                </p>
              )}
              {banner.data["description"] && (
                <p
                  className="description"
                  style={{
                    color: banner.data["descriptionColor"],
                  }}
                >
                  {banner.data["description"]}
                </p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
