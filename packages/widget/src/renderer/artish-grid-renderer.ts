import { Product } from "@adcio.js/api/controller/v1";
import { GridRenderer } from "./grid-renderer";
import item from "../assets/templates/artish-grid/item.html?raw";
import list from "../assets/templates/artish-grid/list.html?raw";

export class ArtishGridRenderer extends GridRenderer {
  templateItem = item;
  templateList = list;

  refineProduct(product: Product) {
    const image =
      product.additionalImages?.find((i) =>
        i.includes("/web/product/medium"),
      ) || product.image;
    const artist = (
      product.additionalInformation as { key: string; value: string }[]
    )?.find((i) => i.key === "custom_option8")?.value;
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
      custom: { artist },
    };
  }
}
