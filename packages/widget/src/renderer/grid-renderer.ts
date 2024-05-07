import {
  Product,
  ProductSuggestionResponseDto,
} from "@adcio/api/controller/v1";
import { addCommas, createElementFromHTML } from "@adcio/lib/utils";
import { AbstractRenderer } from "./abstract-renderer";

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
      discountPrice: product.discountPrice
        ? addCommas(product.discountPrice)
        : null,
      discountRate: product.discountPrice
        ? Math.round(
            ((product.price - product.discountPrice) / product.price) * 100,
          )
        : null,
    };
  }

  render(recommendation: ProductSuggestionResponseDto): Element {
    return createElementFromHTML(
      this.renderTemplate(this.templateList, {
        items: recommendation.suggestions
          .map((suggestion) =>
            this.renderTemplate(
              this.templateItem,
              this.refineProduct(suggestion.product),
            ),
          )
          .reduce((acc, item) => acc + item, ""),
        widgetConfig: {
          widget: { tableSize: { width: 4, height: 1 } },
          title: {
            hasTitle: true,
            text: "Default Grid Widget",
            fontSize: 12,
            fontColor: "#cccccc",
            fontWeight: 400,
          },
          product: {
            image: { borderRadius: 12, ratio: "1:1" },
            name: { fontSize: 14, fontColor: "#4d4d4d", fontWeight: 500 },
            summary: {
              hasSummary: true,
              fontSize: 12,
              fontColor: "#999999",
              fontWeight: 400,
            },
            price: {
              fontSize: 12,
              fontColor: "#999999",
              fontWeight: 400,
            },
            discountPrice: {
              hasDiscountPrice: true,
              fontSize: 14,
              fontColor: "#363636",
              fontWeight: 700,
            },
            discountRate: {
              hasDiscountRate: true,
              fontSize: 14,
              fontColor: "#f95d5d",
              fontWeight: 700,
            },
          },
        },
        // recommendation.placement.widgetConfig,
      }),
    );
  }
}
