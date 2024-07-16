import {
  Product,
  ProductSuggestionResponseDto,
} from "@adcio.js/api/controller/v1";
import { AbstractRenderer } from "./abstract-renderer";
import { createElementFromHTML } from "./dom";
import { addCommas } from "./numbers";

export abstract class GridRenderer extends AbstractRenderer {
  abstract templateItem: string;
  abstract templateList: string;

  refineProduct(product: Product): Omit<Product, "price" | "discountPrice"> & {
    price: string;
    discountPrice: string | null;
    discountRate: number | null;
  } {
    return {
      ...product,
      price: addCommas(product.price),
      discountPrice:
        product.discountPrice && product.price !== product.discountPrice
          ? addCommas(product.discountPrice)
          : null,
      discountRate: product.discountPrice
        ? Math.round(
            ((product.price - product.discountPrice) / product.price) * 100,
          )
        : null,
    };
  }

  renderHtml(recommendation: ProductSuggestionResponseDto): string {
    return this.renderTemplate(this.templateList, {
      items: recommendation.suggestions
        .map(
          (suggestion) =>
            this.renderTemplate(
              this.templateItem,
              this.refineProduct(suggestion.product),
            ), // TODO impression / click event
        )
        .reduce((acc, item) => acc + item, ""),
      widgetValue: recommendation.placement.widgetValue?.values,
    });
  }

  render(recommendation: ProductSuggestionResponseDto): Element {
    return createElementFromHTML(this.renderHtml(recommendation));
  }
}
