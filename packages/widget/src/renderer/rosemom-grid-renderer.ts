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

    const retailPrice =
      (product as any).detail.data.retail_price !== "0.00"
        ? (product as any).detail.data.retail_price
        : undefined;

    product.price = Math.max(
      product.discountPrice ?? product.price,
      product.price,
      retailPrice ?? product.price,
    );

    product.discountPrice = Math.min(
      product.discountPrice ?? product.price,
      product.price,
      retailPrice ?? product.price,
    );

    return {
      ...super.refineProduct(product),
      image,
      custom: {},
    };
  }

  postRender(element: Element): Element {
    new (window as any).Swiper(element.querySelector(".swiper-container"), {
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
