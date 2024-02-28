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

const adcioInstanceGrid = new adcio.Adcio({
  clientId: "76dc12fa-5a73-4c90-bea5-d6578f9bc606",
});

/**
 * @param {SuggestionProductsDto} product
 * @param {string} categoryId
 * @returns {HTMLElement}
 */
const productToElement = (product, categoryId) => {
  const productHref = `${product.url}&cate_no=${categoryId}&display_group=1`;
  const discountPercent =
    !product.price || !product.discountPrice
      ? 0
      : ((product.price - product.discountPrice) / product.price) * 100;
  const textBoxes =
    product.additionalInformation?.filter(
      (info) => info.key === "custom_option9" && info.value != "",
    ) || [];

  return adcio.createNestedElement({
    tag: "div",
    classList: ["common_prd_list", "swiper-slide", "xans-record-"],
    attributes: { "vreview-dom-embeded": false, "data-adcio-id": true }, //Adcio attribute to disctinct ADCIO elements from others.
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
                    classList: ["prdimg", "thumbnail"],
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
                classList: ["price", "hassale"],
                children: [
                  {
                    tag: "span",
                    classList: ["sale_percent"],
                    attributes: {
                      style: "display: inline !important;", //added important for the very first of rendering.
                    },
                    children: [
                      {
                        tag: "strong",
                        textContent:
                          discountPercent < 1 || discountPercent >= 100
                            ? " "
                            : discountPercent.toFixed() + "%",
                      },
                    ],
                  },
                  {
                    tag: "span",
                    classList: ["sale"],
                    attributes: {
                      style: "display:inline !important;",
                    },
                    children: [
                      {
                        tag: "strong",
                        textContent: `${Number(
                          product.discountPrice || product.price,
                        ).toLocaleString()}원`,
                      },
                    ],
                  },
                  {
                    tag: "span",
                    classList: ["customer"],
                    attributes: {
                      style: "display: inline;",
                    },
                    children: [
                      discountPercent >= 1 && {
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
 * @returns {placements : Array<FetchActivePlacementsResponseDto>, customer: CustomerWithId}
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
 * @param {Array<Element>} newElements
 * @param {Array<number>} displayPositions
 */
const swapElementsForGrid = (newElements, displayPositions) => {
  const originalElements = document.querySelectorAll(
    "#monthly-best > div > .prd_basic > .swiper-slide",
  );

  originalElements.forEach((element, index) => {
    if (displayPositions.includes(index + 1) && newElements.length) {
      const newElement = newElements.shift();
      element.replaceWith(newElement);
    }
  });
};

/**
 * @param {Array<Element>} newElements
 * @param {Array<number>} displayPositions
 */
const insertElementsForGrid = (newElements, displayPositions) => {
  const originalElements = document.querySelectorAll(
    "#monthly-best > div > .prd_basic > .common_prd_list",
  );
  const originElementsArr = [...originalElements];

  originalElements.forEach((element, index) => {
    if (displayPositions.includes(index + 1) && newElements.length) {
      const newElement = newElements.shift();
      element.replaceWith(newElement);
      return;
    }

    if (!originElementsArr.length) {
      return;
    }
    const elementToBeInserted = originElementsArr.shift();
    element.replaceWith(elementToBeInserted);
  });
};

/**
 * @param {SuggestionResponseDto} suggestedData
 * @param {string} categoryId
 */
const injectGridSuggestions = (suggestedData, categoryId) => {
  const { placement, suggestions } = suggestedData;

  const elements = suggestions.map((suggestion) => {
    const element = productToElement(suggestion.product, categoryId);

    element.addEventListener("click", () =>
      adcioInstanceGrid.onClick(suggestion.logOptions),
    );
    element.addEventListener("impression", () =>
      adcioInstanceGrid.onImpression(suggestion.logOptions),
    );
    adcioInstanceGrid.observeImpression({
      element,
    });
    return element;
  });

  if (
    document.querySelectorAll(
      "#monthly-best > div > .prd_basic > [data-adcio-id]",
    ).length > 0
  ) {
    swapElementsForGrid(elements, placement.displayPositions);
    return;
  }

  insertElementsForGrid(elements, placement.displayPositions);
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

/**
 * @returns {Array<string>}
 */
const getAllProductIds = () => {
  const idOnStores = [];
  const elements = document.querySelector("#monthly-best > div > .prd_basic");
  elements.childNodes.forEach((element) => {
    if (!element.id) {
      return;
    }
    const regex = /anchorBoxId_(\d+)/;
    const match = element.id.match(regex);
    if (match.length >= 2) {
      idOnStores.push(match[1]);
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
    observer.disconnect();

    if (mutationsList.find((m) => m.type === "childList")) {
      callback();
    }

    observer.observe(targetElement, observeOptions);
  });

  observer.observe(targetElement, observeOptions);
  window.addEventListener("beforeunload", () => observer.disconnect());
};

const run = async () => {
  await adcio.waitForElement("#mainBest");

  let customer;
  await withHidden("#mainBest", async () => {
    customer = await getCustomer();
    await injectGrid(customer);
  });

  watchGrid(() => injectGrid(customer));
};

run().then(() => console.log("ADCIO done"));
