import { Product } from "@adcio.js/api/controller/v1";
import { GridRenderer } from "./grid-renderer";
import item from "../assets/templates/rosemom-grid/item.html?raw";
import list from "../assets/templates/rosemom-grid/list.html?raw";

export class RosemomGridRenderer extends GridRenderer {
  templateItem = item;
  templateList = list;

  refineProduct(product: Product) {
    const image =
      product.additionalImages?.find((i) =>
        i.includes("/web/product/medium"),
      ) || product.image;
    const discountRate = Math.round(
      (((product as any).detail.data.retail_price - product.price) /
        (product as any).detail.data.retail_price) *
        100,
    );
    return {
      ...super.refineProduct(product),
      discountRate:
        isFinite(discountRate) && discountRate > 0 ? discountRate : null,
      image,
      custom: {},
    };
  }

  postRender(element: Element): Element {
    new (window as any).Swiper("div#adcio-rosemom-main-grid", {
      slidesPerView: 4,
      slidesPerGroup: 4,
      grid: {
        rows: 2,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    return element;
  }
}
