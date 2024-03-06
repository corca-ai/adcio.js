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
    tag: "div",
    classList: ["common_prd_list", "swiper-slide", "xans-record-"],
    attributes: {
      id: `anchorBoxId_${product.idOnStore}`,
      "adcio-adset-id": logOptions.adsetId,
      "adcio-request-id": logOptions.requestId,
    }, //Adcio attribute to disctinct ADCIO elements from others.
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
                classList: ["prdimg", "thumbnail"],
                children: [
                  {
                    tag: "a",
                    attributes: {
                      style: `display: block;`,
                      href: productHref,
                      name: `anchorBoxName_${product.idOnStore}`,
                    },
                    children: [
                      !!product.additionalImages?.[1] && {
                        tag: "img",
                        classList: ["overimg"],
                        attributes: {
                          src: product.additionalImages?.[1],
                          alt: product.name,
                          id: `eListPrdImage${product.idOnStore}_1`,
                        },
                      },
                      {
                        tag: "img",
                        attributes: {
                          src: product.additionalImages?.[0],
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
                tag: "a",
                classList: ["detail_review"],
                attributes: {
                  href: product.url,
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
                    attributes: { href: productHref },
                    children: [
                      {
                        tag: "span",
                        classList: ["product_name"],
                        children: [
                          {
                            tag: "span",
                            attributes: {
                              style: "font-size:14px;color:#000000;",
                            },
                            textContent: product.name,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                tag: "div",
                classList: ["price", ...(hasSale ? ["hassale"] : [])],
                children: [
                  {
                    tag: "span",
                    classList: ["sale_percent"],
                    attributes: {
                      style: `display: ${hasSale ? "inline" : "none"}`,
                    },
                    children: [
                      {
                        tag: "strong",
                        textContent: hasSale
                          ? discountPercent.toFixed() + "%"
                          : " ",
                      },
                    ],
                  },
                  {
                    tag: "span",
                    classList: ["sale", ...(hasSale ? [] : ["displaynone"])],
                    children: [
                      {
                        tag: "strong",
                        textContent: `${Number(
                          product.discountPrice,
                        ).toLocaleString()}원`,
                      },
                    ],
                  },
                  {
                    tag: "span",
                    classList: [
                      "sell",
                      ...(hasSale
                        ? []
                        : [
                            "product_price",
                            "displaynone1displaynone2displaynone",
                          ]),
                    ],
                    children: [
                      {
                        tag: "strong",
                        textContent: `${Number(
                          product.price,
                        ).toLocaleString()}원`,
                      },
                    ],
                  },
                  {
                    tag: "span",
                    classList: ["customer", "displaynone"],
                    children: [
                      {
                        tag: "strong",
                        textContent: `${Number(
                          product.price,
                        ).toLocaleString()}원`,
                      },
                    ],
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
              !!textBoxes.length && {
                tag: "ul",
                classList: [
                  "xans-element-",
                  "xans-product",
                  "xans-product-listitem",
                  "item_box",
                ],
                children: [
                  {
                    tag: "li",
                    classList: [
                      "display_텍스트박스",
                      "xans-record-",
                      "textBox",
                    ],
                    children: textBoxes.map((data) => ({
                      tag: "div",
                      classList: ["add_text"],
                      textContent: data.value,
                    })),
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
      .querySelector(".price .sell strong")
      .textContent.replace(/[^0-9]/g, ""),
  );
  const salePrice = Number(
    element
      .querySelector(".price .sale strong")
      ?.textContent.replace(/[^0-9]/g, "") || 0,
  );
  const customerPrice = Number(
    element
      .querySelector(".price .customer strong")
      ?.textContent.replace(/[^0-9]/g, "") || 0,
  );
  return {
    idOnStore: getProductIdFromElement(element),
    name: element.querySelector(".product_name").textContent.trim(),
    additionalImages: [
      element.querySelector(".prdimg > a > img:not(.overimg)").src,
      element.querySelector(".prdimg > a > img.overimg").src,
    ],
    additionalInformation: Array.from(element.querySelectorAll(".textBox")).map(
      (el) => ({ key: "custom_option9", value: el.textContent.trim() }),
    ),
    price: customerPrice ? customerPrice : sellPrice,
    discountPrice: customerPrice ? sellPrice : salePrice,
  };
};

const productToProductListElement = (suggestion, categoryId) => {
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
    classList: ["common_prd_list", "xans-record-"],
    attributes: {
      id: `anchorBoxId_${product.idOnStore}`,
      "adcio-adset-id": logOptions.adsetId,
      "adcio-request-id": logOptions.requestId,
    }, //Adcio attribute to disctinct ADCIO elements from others.
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
                classList: ["prdimg", "thumbnail"],
                children: [
                  {
                    tag: "a",
                    attributes: {
                      style: `display: block;`,
                      href: productHref,
                      name: `anchorBoxName_${product.idOnStore}`,
                    },
                    children: [
                      !!product.additionalImages?.[1] && {
                        tag: "img",
                        classList: ["overimg"],
                        attributes: {
                          src: product.additionalImages?.[1],
                          alt: product.name,
                          id: `eListPrdImage${product.idOnStore}_1`,
                        },
                      },
                      {
                        tag: "img",
                        attributes: {
                          src: product.additionalImages?.[0],
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
                tag: "a",
                classList: ["detail_review"],
                attributes: {
                  href: product.url,
                  "vreview-product-id": product.idOnStore,
                },
                children: [
                  {
                    tag: "div",
                    classList: ["vreview-review-summary"],
                    children: [
                      {
                        tag: "div",
                        classList: ["vreview-row", "vreview-board-popup"],
                        attributes: {
                          style: "margin-top: 6px;",
                        },
                      },
                    ],
                  },
                ],
              },
              {
                tag: "p",
                classList: ["model"],
                textContent: "product.model_name",
              },
              {
                tag: "p",
                classList: ["name"],
                children: [
                  {
                    tag: "a",
                    attributes: { href: productHref },
                    children: [
                      {
                        tag: "span",
                        classList: ["product_name"],
                        children: [
                          {
                            tag: "span",
                            attributes: {
                              style: "font-size:14px;color:#000000;",
                            },
                            textContent: product.name,
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
              {
                tag: "div",
                classList: ["price", ...(hasSale ? ["hassale"] : [])],
                children: [
                  {
                    tag: "span",
                    classList: ["sale_percent"],
                    attributes: {
                      style: `display: ${hasSale ? "inline" : "none"}`,
                    },
                    children: [
                      {
                        tag: "strong",
                        textContent: hasSale
                          ? discountPercent.toFixed() + "%"
                          : " ",
                      },
                    ],
                  },
                  {
                    tag: "span",
                    classList: ["sale", ...(hasSale ? [] : ["displaynone"])],
                    children: [
                      {
                        tag: "strong",
                        textContent: `${Number(
                          product.discountPrice,
                        ).toLocaleString()}원`,
                      },
                    ],
                  },
                  {
                    tag: "span",
                    classList: [
                      "sell",
                      ...(hasSale
                        ? []
                        : [
                            "product_price",
                            "displaynone1displaynone2displaynone",
                          ]),
                    ],
                    children: [
                      {
                        tag: "strong",
                        textContent: `${Number(
                          product.price,
                        ).toLocaleString()}원`,
                      },
                    ],
                  },
                  {
                    tag: "span",
                    classList: ["customer", "displaynone"],
                    children: [
                      {
                        tag: "strong",
                        textContent: `${Number(
                          product.price,
                        ).toLocaleString()}원`,
                      },
                    ],
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
              !!textBoxes.length && {
                tag: "ul",
                classList: [
                  "xans-element-",
                  "xans-product",
                  "xans-product-listitem",
                  "item_box",
                ],
                children: [
                  {
                    tag: "li",
                    classList: [
                      "display_텍스트박스",
                      "xans-record-",
                      "textBox",
                    ],
                    children: textBoxes.map((data) => ({
                      tag: "div",
                      classList: ["add_text"],
                      textContent: data.value,
                    })),
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

const run = async () => {
  const page = adcio.getMeta({ name: "path_role" });

  if (page === "MAIN") {
    // 메인 페이지
    await handleMain(
      "#mainBest",
      "#monthly-best > div > .prd_basic",
      PC_GRID_PLACEMENT_ID,
    );
  } else if (page === "PRODUCT_LIST") {
    // 카테고리 페이지
    await handleCategory(
      ".xans-product-normalpackage > .xans-product-listnormal > ul.prd_basic",
      (id) => `#anchorBoxId_${id}:not([adcio-request-id])`,
    );
  }
};

run().then(() => console.log("ADCIO done"));
