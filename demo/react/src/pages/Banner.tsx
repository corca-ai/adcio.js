import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/banner.css";

import { Pagination } from "swiper/modules";
import React from "react";
// import { Adcio } from "@/adcio";

export default function Banner() {
  const [data, setData] = React.useState([]) as any[];
  // const adcio = new Adcio({
  //   clientId: "your-client-id",
  //   customerId: "your-customer-id",
  // });

  // console.log(adcio);
  // React.useEffect(async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await response.json();
  //   setData(data);
  // }, []);

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
