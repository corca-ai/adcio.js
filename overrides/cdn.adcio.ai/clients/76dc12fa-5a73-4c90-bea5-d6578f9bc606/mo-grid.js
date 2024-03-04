/**
 * @param {SuggestionProductsDto} product
 * @param {string} categoryId
 * @returns {HTMLElement}
 */
const productToElement = (suggestion, categoryId) => {
  const { logOptions, product } = suggestion;
  const productHref = `${product.url}&cate_no=${categoryId}&display_group=1`;
  const discountPercent =
    !product.price || !product.discountPrice
      ? 0
      : ((product.price - product.discountPrice) / product.price) * 100;
  const textBoxes =
    product.additionalInformation?.filter(
      (info) => info.key === "custom_option9" && info.value != "",
    ) || [];
  const hasSale = discountPercent >= 1;

  return adcio.createNestedElement({
    tag: "li",
    classList: ["swiper-slide", "common_prd_list", "xans-record-"],
    attributes: {
      id: `anchorBoxId_${product.idOnStore}`,
      "adcio-adset-id": logOptions.adsetId,
      "adcio-request-id": logOptions.requestId,
    },
    children: [
      {
        tag: "div",
        classList: ["box", "dd_box"],
        children: [
          {
            tag: "div",
            classList: ["img"],
            children: [
              {
                tag: "div",
                classList: ["prdimg"],
                children: [
                  {
                    tag: "a",
                    attributes: {
                      href: productHref,
                    },
                    children: [
                      {
                        tag: "img",
                        attributes: {
                          src:
                            product.additionalImages[0] ||
                            product.additionalImages?.[1],
                          alt: product.name,
                          id: `eListPrdImage${product.idOnStore}_1`,
                        },
                      },
                    ],
                  },
                ],
              },
              {
                tag: "span",
                classList: ["rankBadge"],
              },
            ],
          },
          {
            tag: "div",
            classList: ["info"],
            children: [
              {
                tag: "div",
                classList: ["detail_review"],
                attributes: {
                  href: productHref,
                  "vreview-product-id": product.idOnStore,
                },
              },
              {
                tag: "p",
                classList: ["model"],
                textContent: "",
              },
              {
                tag: "p",
                classList: ["name"],
                children: [
                  {
                    tag: "a",
                    classList: ["text_line2"],
                    attributes: {
                      href: productHref,
                    },
                    textContent: product.name,
                  },
                ],
              },
              {
                tag: "div",
                classList: ["price", "font_Gilroy"],
                children: [
                  {
                    tag: "span",
                    classList: [
                      "sale_percent",
                      ...(hasSale ? [] : ["displaynone"]),
                    ],
                    attributes: {
                      style: `display: ${hasSale ? "inline" : "none"}`,
                    },
                    children: [
                      {
                        tag: "strong",
                        textContent: discountPercent.toFixed() + "%",
                      },
                    ],
                  },
                  {
                    tag: "span",
                    classList: [
                      "sale_prc",
                      ...(hasSale ? [] : ["displaynone"]),
                    ],
                    children: [
                      {
                        tag: "span",
                        textContent: `${Number(
                          product.discountPrice,
                        ).toLocaleString()}원`,
                      },
                    ],
                  },
                  {
                    tag: "span",
                    classList: [
                      "sell_prc",
                      ...(hasSale ? ["strike", "mPriceStrike"] : []),
                    ],
                    textContent: `${Number(product.price).toLocaleString()}원`,
                  },
                  {
                    tag: "span",
                    classList: ["custom_prc", "strike", "displaynone"],
                    textContent: `${Number(product.price).toLocaleString()}원`,
                  },
                ],
              },
              {
                tag: "div",
                classList: ["color_review"],
                children: [
                  { tag: "div", classList: ["colorchip_count"] },
                  { tag: "div", classList: ["colorchip_box"] },
                ],
              },
              {
                tag: "div",
                classList: ["icon"],
              },
              {
                tag: "ul",
                classList: [
                  "xans-element-",
                  "xans-product",
                  "xans-product-listitem",
                  "item_box",
                ],
                children: [
                  textBoxes.length > 0 && {
                    tag: "li",
                    classList: ["xans-record-"],
                    attributes: {
                      style:
                        "display: inline-block;border: 1px solid rgba(142,31,41,0.5);box-sizing: border-box;padding: 5px 6px 4px 6px;margin-bottom: 5px;line-height: 1;opacity: 1;",
                    },
                    children: [
                      {
                        tag: "span",
                        attributes: {
                          style: "font-size:12px; color:#8e1f28;",
                        },
                        children: textBoxes.map((data) => ({
                          tag: "div",
                          classList: ["text_box", "add_text"],
                          attributes: {
                            style: "font-size:10px;font-weight:500;",
                          },
                          children: [
                            {
                              tag: "span",
                              textContent: data.value,
                            },
                          ],
                        })),
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  });
};

const elementToProduct = (element) => {
  const sellPrice = Number(
    element
      .querySelector(".price .sell_prc")
      .textContent.replace(/[^0-9]/g, ""),
  );
  const salePrice = Number(
    element
      .querySelector(".price .sale_prc")
      ?.textContent.replace(/[^0-9]/g, "") || 0,
  );
  const customerPrice = Number(
    element
      .querySelector(".price .customer_prc")
      ?.textContent.replace(/[^0-9]/g, "") || 0,
  );
  return {
    idOnStore: getProductIdFromElement(element),
    name: element.querySelector("p.name").textContent.trim(),
    additionalImages: [element.querySelector(".prdimg > a > img").src],
    additionalInformation: Array.from(element.querySelectorAll(".textBox")).map(
      (el) => ({ key: "custom_option9", value: el.textContent.trim() }),
    ),
    price: customerPrice ? customerPrice : sellPrice,
    discountPrice: customerPrice ? sellPrice : salePrice,
  };
};

const productToProductListElement = productToElement;

const run = async () => {
  const page = adcio.getMeta({ name: "path_role" });

  if (page === "MAIN") {
    // 메인 페이지
    await handleMain(
      "#monthly-best",
      "#monthly-best > div > .prd_basic",
      MO_GRID_PLACEMENT_ID,
    );
  } else if (page === "PRODUCT_LIST") {
    // 카테고리 페이지
    await handleCategory(
      ".common_prd > .xans-product-listnormal > ul.prd_basic",
      (id) => `#anchorBoxId_${id}:not([adcio-request-id])`,
    );
  }
};

run().then(() => console.log("MO ADCIO sdk end!"));
