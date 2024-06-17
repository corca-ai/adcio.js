import {
  Swiper as ReactSwiper,
  SwiperSlide as ReactSwiperSlide,
} from "swiper/react";

import { color } from "@corca-ai/design-system";
import styled from "@emotion/styled";
import _ from "lodash";

import { Product } from "@adcio.js/api/controller/v1";
import { TalkResponseMessageProduct } from "@adcio.js/api/messenger/v1.0";

import { ActionButtonList } from "./ActionButtonList";
import { ProductInfo } from "./ProductInfo";

const camelize = (obj) =>
  _.transform(obj, (acc, value, key, target) => {
    const camelKey = _.isArray(target) ? key : _.camelCase(key.toString());
    acc[camelKey] = _.isObject(value) ? camelize(value) : value;
  });

interface Props {
  dialogueProducts: TalkResponseMessageProduct[];
  onExplain: (product: Product) => void;
}

// TODO: swiper 라이브러리 대신 직접 캐러셀을 만들어서 사용하게끔 변경
export function ProductListSwiper({ dialogueProducts, onExplain }: Props) {
  return (
    <Swiper spaceBetween={7} slidesPerView="auto" scrollbar draggable>
      {dialogueProducts.map((dialogueProduct) => {
        const product = camelize(dialogueProduct.product) as Product;
        return (
          <SwiperSlide key={product.id}>
            <img src={product.image} alt={product.name} />
            <ProductInfo product={product} tags={dialogueProduct.tags} />
            <ActionButtonList product={product} onExplain={onExplain} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

const Swiper = styled(ReactSwiper)`
  width: 100%;
  overflow: visible;
  display: flex;
  align-items: flex-start;
  gap: 7px;
  overflow-x: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
  align-content: stretch;

  ::-webkit-scrollbar {
    display: none;
  }
  .swiper-wrapper {
    width: 100%;
    display: flex;
  }
`;

const SwiperSlide = styled(ReactSwiperSlide)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 14px;
  background-color: ${color.white};
  width: 210px;
  max-width: 360px;
  height: 513px;
  gap: 12px;
  padding: 0 12px 12px;

  img {
    width: 210px;
    height: 270px;
    object-fit: cover;
    border-radius: 14px 14px 0px 0px;
  }
`;
