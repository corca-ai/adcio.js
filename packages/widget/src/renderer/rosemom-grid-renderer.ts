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

  postRender(element: Element, widgetValue: any): Element {
    if (!widgetValue.widget.swiper.enabled) {
      return element;
    }

    const slidesPerView = widgetValue.widget.tableSize.columns;
    const rows = widgetValue.widget.tableSize.rows;
    const freeModeEnabled = widgetValue.widget.freeMode.enabled;

    new (window as any).Swiper(".corca-rosemom-grid", {
      slidesPerView,
      slidesPerGroup: freeModeEnabled ? 1 : slidesPerView,
      spaceBetween: 10,
      grid: {
        fill: "row",
        rows,
      },
      navigation: {
        nextEl: ".corca-rosemom-grid.swiper-button-next",
        prevEl: ".corca-rosemom-grid.swiper-button-prev",
      },
      pagination: {
        el: ".corca-rosemom-grid.swiper-pagination",
      },
      freeMode: {
        enabled: freeModeEnabled,
      },
    });
    return element;
  }
}
