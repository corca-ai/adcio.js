import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/banner.css";

import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { Adcio } from "adcio.js/src/adcio";
import { SuggestionTestId } from "../../../../mock/constants";
import { SuggestionResponseDto } from "adcio.js/src/api/controller/v1/api";

interface Props {
  adcioInstance: Adcio;
}

export default function Banner({ adcioInstance }: Props) {
  const [data, setData] = useState<SuggestionResponseDto>(null);

  useEffect(() => {
    async function fetchMyAPI() {
      const response = await adcioInstance.createSuggestion({
        placementId: SuggestionTestId.SUCCESS_PLACEMENT,
      });
      setData(response);
    }
    fetchMyAPI();
  }, []);

  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      modules={[Pagination]}
      className="mySwiper"
      pagination={{
        clickable: true,
      }}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      <SwiperSlide>Slide 5</SwiperSlide>
      <SwiperSlide>Slide 6</SwiperSlide>
      <SwiperSlide>Slide 7</SwiperSlide>
      <SwiperSlide>Slide 8</SwiperSlide>
      <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
  );
}
