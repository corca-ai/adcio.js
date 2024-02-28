/**
 * @typedef {(Omit<Customer,'id'>&{customerId:Pick<Customer,'id'>}) | {}} CustomerWithId
 */

const CATEGORY_IDS = {
  total: "2017",
  women: "2018",
  men: "2022",
  junior: "2578",
  acc: "2026",
};

// Andar test skin
const PC_GRID_PLACEMENT_ID = "5ae9907f-3cc2-4ed4-aaa4-4b20ac97f9f4";
const SWAPPED_KEY = "adcio-swapped";

const adcioInstanceGrid = new adcio.Adcio({
  clientId: "76dc12fa-5a73-4c90-bea5-d6578f9bc606",
});

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
                    classList: ["sell", ...(hasSale ? [] : ["product_price"])],
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
                    classList: ["sell", ...(hasSale ? [] : ["product_price"])],
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
/**
 * @returns {CustomerWithId}
 */
const getCustomer = async () => {
  let customer = {};
  try {
    const { id, ...rest } = await adcio.clientApi.cafe24.getCustomer();
    customer = { ...rest, customerId: id };
  } catch (e) {
    customer = {};
  }
  return customer;
};

/**
 * @param {Array<{ suggestion: SuggestionResponseDto; original: Product }>} replacements
 */
const setSwappedProduct = (replacements) => {
  window.sessionStorage.setItem(SWAPPED_KEY, JSON.stringify(replacements));
};

/**
 * @return {Array<{ suggestion: SuggestionResponseDto; originalId: string }>}
 */
const getSwappedProduct = () => {
  const stored = window.sessionStorage.getItem(SWAPPED_KEY);
  if (!stored) {
    return [];
  }
  const parsed = JSON.parse(stored);
  if (!Array.isArray(parsed)) {
    return [];
  }
  return parsed;
};

/**
 * @param {Element} originalElement
 * @param {Suggestion} suggestion
 * @param {string} categoryId
 */
const swapElement = (originalElement, newElement, logOptions) => {
  newElement.addEventListener("click", () =>
    adcioInstanceGrid.onClick(logOptions),
  );
  newElement.addEventListener("impression", () =>
    adcioInstanceGrid.onImpression(logOptions),
  );
  adcioInstanceGrid.observeImpression({
    element: newElement,
  });

  originalElement.replaceWith(newElement);
};

/**
 * @param {SuggestionResponseDto} suggestionResponse
 * @param {string} categoryId
 */
const injectGridSuggestions = (suggestionResponse, categoryId) => {
  const { placement, suggestions } = suggestionResponse;

  const originalElements = document.querySelectorAll(
    "#monthly-best > div > .prd_basic > .common_prd_list",
  );

  const swapped = [];
  suggestions.forEach((suggestion, index) => {
    const displayPosition = placement.displayPositions[index];
    if (!displayPosition) {
      return;
    }

    const originalElement = originalElements[displayPosition - 1];
    const newElement = productToElement(suggestion, categoryId);
    swapElement(originalElement, newElement, suggestion.logOptions);

    swapped.push({
      suggestion,
      original: elementToProduct(originalElement),
    });
  });

  setSwappedProduct(swapped);
};

/**
 * @param {string} html
 * @returns {string | null}
 */
const getCategoryIdFromHTML = (html) => {
  if (!html) {
    return null;
  }
  const regex = /\$cate_no\s*=\s*(\d+)/;
  const match = html.match(regex);
  return match.length >= 2 ? match[1] : null;
};

const getProductIdFromElement = (element) => {
  if (!element.id) {
    return null;
  }
  const regex = /anchorBoxId_(\d+)/;
  const match = element.id.match(regex);
  return match.length >= 2 ? match[1] : null;
};

/**
 * @returns {Array<string>}
 */
const getAllProductIds = () => {
  const idOnStores = [];
  const elements = document.querySelector("#monthly-best > div > .prd_basic");
  elements.childNodes.forEach((element) => {
    const productId = getProductIdFromElement(element);
    if (productId) {
      idOnStores.push(productId);
    }
  });
  return idOnStores;
};

const createOrFixRankBadge = () => {
  const elements = document.querySelectorAll("#monthly-best > * .img");
  elements.forEach((element, index) => {
    if (element.querySelector(".rankBadge") == null) {
      const rankBadge = document.createElement("span");
      rankBadge.classList.add("rankBadge");
      element.appendChild(rankBadge);
    }
    element.querySelector(".rankBadge").textContent = index + 1;
  });
};

const hide = (selector) => {
  document.querySelector(selector).style.visibility = "hidden";
};

const show = (selector) => {
  document.querySelector(selector).style.visibility = "visible";
};

const withHidden = async (selector, fn) => {
  hide(selector);
  try {
    await fn();
  } catch (e) {
    console.error(e);
  } finally {
    show(selector);
  }
};

const injectGrid = (customer) =>
  withHidden("#monthly-best > div > .prd_basic", async () => {
    const categoryId =
      getCategoryIdFromHTML(
        document.querySelector("#monthly-best")?.innerHTML,
      ) || CATEGORY_IDS.total;
    const allIdOnStore = getAllProductIds();

    const suggested = await adcioInstanceGrid.createSuggestionProducts({
      ...customer,
      categoryIdOnStore: categoryId,
      placementId: PC_GRID_PLACEMENT_ID,
      excludingProductIds: allIdOnStore,
    });
    injectGridSuggestions(suggested, categoryId);
    createOrFixRankBadge();
  });

const watchGrid = (callback) => {
  const targetElement = document.querySelector("#monthly-best");
  const observeOptions = {
    childList: true,
  };

  const observer = new MutationObserver((mutationsList, observer) => {
    if (mutationsList.find((m) => m.type === "childList")) {
      callback();
    }
  });

  observer.observe(targetElement, observeOptions);
  window.addEventListener("beforeunload", () => observer.disconnect());
};

const handleMain = async () => {
  let customer;
  await adcio.waitForElement("#mainBest");
  await withHidden("#mainBest", async () => {
    customer = await getCustomer();
    await injectGrid(customer);
  });
  watchGrid(() => injectGrid(customer));
};

const handleCategory = async (categoryId) => {
  if (!Object.values(CATEGORY_IDS).includes(categoryId)) {
    return;
  }

  const swapped = getSwappedProduct();
  const wrapper = await adcio.waitForElement(
    ".xans-product-normalpackage > .xans-product-listnormal > ul.prd_basic",
  );
  swapped.forEach(({ suggestion, original }) => {
    adcio
      .waitForElement(
        `#anchorBoxId_${original.idOnStore}:not([adcio-request-id]) > div.box > div.img`,
        wrapper,
      )
      .then(() => {
        const originalExisting = wrapper.querySelector(
          `#anchorBoxId_${original.idOnStore}:not([adcio-request-id])`,
        );
        swapElement(
          originalExisting,
          productToProductListElement(suggestion, categoryId),
          suggestion.logOptions,
        );
      });

    adcio
      .waitForElement(
        `#anchorBoxId_${suggestion.product.idOnStore}:not([adcio-request-id]) > div.box > div.img`,
        wrapper,
      )
      .then(() => {
        const suggestedExisting = wrapper.querySelector(
          `#anchorBoxId_${suggestion.product.idOnStore}:not([adcio-request-id])`,
        );
        suggestedExisting.replaceWith(
          productToProductListElement(
            { product: original, logOptions: {} },
            categoryId,
          ),
        );
      });
  });
};

const run = async () => {
  const page = adcio.getMeta({ name: "path_role" });

  if (page === "MAIN") {
    // 메인 페이지
    await handleMain();
  } else if (page === "PRODUCT_LIST") {
    const categoryId = new URL(window.location.href).searchParams.get(
      "cate_no",
    );
    handleCategory(categoryId);
  }
};

run().then(() => console.log("ADCIO done"));
