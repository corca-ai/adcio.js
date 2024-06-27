import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Swiper as SwiperClass } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "src/styles/banner.css";
import {
  AdcioCreateRecommendationBannersResponse,
  AdcioOnClickParams,
  AdcioOnImpressionParams,
} from "@adcio.js/core";

interface Props {
  recommendation: AdcioCreateRecommendationBannersResponse;
  impressSlide: (currentSlideData: AdcioOnImpressionParams) => void;
  clickSlide: (currentSlideData: AdcioOnClickParams) => void;
}

export function Banner({ recommendation, impressSlide, clickSlide }: Props) {
  const handleSlideChange = (swiper: SwiperClass) => {
    const activeIndex = swiper.activeIndex;
    const currentSlideData = recommendation.suggestions[activeIndex];
    if (currentSlideData) {
      impressSlide(currentSlideData.logOptions);
    }
  };

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      modules={[Pagination]}
      navigation={true}
      className="mySwiper"
      pagination={{ clickable: true }}
      onSlideChange={handleSlideChange}
    >
      {recommendation.suggestions.map((currentSlideData) => {
        const { banner } = currentSlideData;

        return (
          <SwiperSlide
            key={banner.id}
            onClick={() => {
              clickSlide(currentSlideData.logOptions);
              alert(`click slide ${banner.id}`);
            }}
          >
            <img src={banner.creative.mediaUrl} alt="" />
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
        );
      })}
    </Swiper>
  );
}
