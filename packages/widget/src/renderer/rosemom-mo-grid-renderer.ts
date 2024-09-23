import { Product } from "@adcio.js/api/controller/v1";
import { GridRenderer } from "./grid-renderer";
import item from "../assets/templates/rosemom-grid/item-mo.html?raw";
import list from "../assets/templates/rosemom-grid/list-mo.html?raw";

export class RosemomMoGridRenderer extends GridRenderer {
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
      slidesPerView: 2,
      spaceBetween: 10,
      grid: {
        fill: "row",
        rows: 2,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      freeMode: {
        enabled: true,
      },
    });
    return element;
  }
}
