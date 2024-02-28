/**
 * @typedef {(Omit<Customer,'id'>&{customerId:Pick<Customer,'id'>}) | {}} CustomerWithId
 */

const MO_GRID_PLACEMENT_ID = "f77b43c0-6062-4801-950d-104747aa349d";
const CLIENT_ID = "76dc12fa-5a73-4c90-bea5-d6578f9bc606";

const CATEGORY_IDS = {
  total: "2017",
  women: "2018",
  men: "2022",
  junior: "2578",
  acc: "2026",
};

console.log("MO GRID ADCIO sdk start!");
const adcioInstanceGrid = new adcio.Adcio({
  clientId: CLIENT_ID,
});

/**
 * @param {SuggestionProductsDto} product
 * @param {string} categoryId
 * @returns {HTMLElement}
 */
const productToElement = (product, categoryId) => {
  const productHref = `${product.url}&cate_no=${categoryId}&display_group=1`;
  const salePercent =
    !product.price || !product.discountPrice
      ? 0
      : ((product.price - product.discountPrice) / product.price) * 100;
  const textBoxes =
    product.additionalInformation?.filter(
      (info) => info.key === "custom_option9" && info.value != "",
    ) || [];

  return adcio.createNestedElement({
    tag: "li",
    classList: ["swiper-slide", "common_prd_list", "xans-record-"],
    attributes: {
      "vreview-dom-embeded": false,
      id: `anchorBoxId_${product.idOnStore}`,
      "data-adcio-id": true, //Adcio attribute to disctinct ADCIO elements from others.
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
                textContent: "product.data.model_name",
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
                  salePercent >= 1 && {
                    tag: "span",
                    classList: ["sale_percent"],
                    attributes: {
                      style: "display: inline !important;", //added important for the very first of rendering.
                    },
                    children: [
                      {
                        tag: "strong",
                        textContent: salePercent.toFixed() + "%",
                      },
                    ],
                  },
                  {
                    tag: "span",
                    classList: ["sale_prc"],
                    children: [
                      {
                        tag: "span",
                        attributes: {
                          style: "font-size:14px; color:#222222;",
                        },
                        textContent: `${Number(
                          product.discountPrice || product.price,
                        ).toLocaleString()}원`,
                      },
                    ],
                  },
                  salePercent >= 1 && {
                    tag: "span",
                    classList: [
                      "sell_prc",
                      "strike",
                      "mPriceStrike",
                      "displaynone12displaynone",
                    ],
                    attributes: {
                      style: "display: inline;",
                    },
                    textContent: product.price + "원",
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

/**
 * @returns {placements : Array<FetchActivePlacementsResponseDto>, customer: CustomerWithId}
 */
const getPlacementsAndCustomer = async () => {
  const pageName = `mobile156_${adcio.getMeta({
    name: "path_role",
  })}`;

  const placements = await adcioInstanceGrid.fetchPlacements({ pageName });
  if (!placements.length) {
    return;
  }

  let customer = {};
  try {
    const { id, ...rest } = await adcio.clientApi.cafe24.getCustomer();
    customer = { ...rest, customerId: id };
  } catch (e) {
    customer = {};
  }
  return { placements, customer };
};

/**
* @param {Array<Element>} newElements
 * @param {Array<number>} displayPositions

 */
const swapElementsForGrid = (newElements, displayPositions) => {
  const originalGridElements = document
    .querySelector(`#monthly-best`)
    .querySelector(`.prd_basic`)
    .querySelectorAll(".swiper-slide");

  originalGridElements.forEach((element, index) => {
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
  const originalGridElements = document
    .querySelector(`#monthly-best`)
    .querySelector(`.prd_basic`)
    .querySelectorAll(".swiper-slide");

  const gridElemArr = [...originalGridElements];

  originalGridElements.forEach((element, index) => {
    if (displayPositions.includes(index + 1) && newElements.length) {
      const newElement = newElements.shift();
      element.replaceWith(newElement);
      return;
    }

    if (!gridElemArr.length) {
      return;
    }
    const elementToBeInserted = gridElemArr.shift();
    element.replaceWith(elementToBeInserted);
  });
};

/**
 * @param {SuggestionProductsResponseDto} suggestedData
 * @param {string} categoryId
 */
const injectGridSuggestions = (suggestedData, categoryId) => {
  const { placement, suggestions } = suggestedData;

  const elements = suggestions.map((suggestion) => {
    const element = productToElement(suggestion.product, categoryId); //TODO: fix index

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
    document
      .querySelector(`#monthly-best`)
      .querySelector(`.prd_basic`)
      .querySelectorAll("[data-adcio-id]").length
  ) {
    swapElementsForGrid(elements, placement.displayPositions);
    return;
  }

  insertElementsForGrid(elements, placement.displayPositions);
};

/**
 * @returns {Array<string>}
 */
const getAllIdOnStoreInElement = () => {
  const idOnStores = [];
  const elements = document
    .querySelector("#monthly-best")
    .querySelector(".prd_basic");

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

const createOrFixRankElement = () => {
  const elements = document
    .querySelector(`#monthly-best`)
    .querySelectorAll(".img");
  elements.forEach((element, index) => {
    if (element.querySelector(".rankBadge") == null) {
      const rankBadge = document.createElement("span");
      rankBadge.classList.add("rankBadge");
      element.appendChild(rankBadge);
    }
    element.querySelector(".rankBadge").textContent = index + 1;
  });
};

const run = async () => {
  await adcio.waitForElement("#monthly-best");
  document.querySelector(`#monthly-best`).style.visibility = "hidden";
  const allIdOnStore = await getAllIdOnStoreInElement();

  const { placements, customer } = await getPlacementsAndCustomer();
  if (!placements.length) {
    return;
  }

  adcioInstanceGrid
    .createSuggestionProducts({
      categoryIdOnStore: CATEGORY_IDS.total,
      excludingProductIds: allIdOnStore?.map((id) => `${CLIENT_ID}:${id}`),
      placementId: MO_GRID_PLACEMENT_ID,
      ...customer,
    })
    .then(async (suggested) => {
      await injectGridSuggestions(suggested, CATEGORY_IDS.total);
      await createOrFixRankElement();
    })
    .finally(
      async () =>
        (document.querySelector("#monthly-best").style.visibility = "visible"),
    );

  // Observe Grid List Changes and inject product suggestions
  const targetElement = document.querySelector("#monthly-best");
  const observeOptions = {
    childList: true,
  };
  const mutationCallback = async (mutationsList, observer) => {
    observer.disconnect();

    if (mutationsList.find((m) => m.type === "childList")) {
      document.querySelector("#monthly-best").style.visibility = "hidden";

      const categoryId =
        getCategoryIdFromHTML(
          document.querySelector("#monthly-best")?.innerHTML,
        ) || CATEGORY_IDS.total;
      const allIdOnStore = await getAllIdOnStoreInElement();

      adcioInstanceGrid
        .createSuggestionProducts({
          categoryIdOnStore: categoryId,
          excludingProductIds: allIdOnStore?.map((id) => `${CLIENT_ID}:${id}`),
          placementId: MO_GRID_PLACEMENT_ID,
          ...customer,
        })
        .then(async (suggested) => {
          await injectGridSuggestions(suggested, categoryId);
          await createOrFixRankElement();
        })
        .finally(
          async () =>
            (document.querySelector("#monthly-best").style.visibility =
              "visible"),
        );
    }

    observer.observe(targetElement, observeOptions);
  };

  const observer = new MutationObserver(mutationCallback);
  observer.observe(targetElement, observeOptions);
  window.addEventListener("beforeunload", () => observer.disconnect());
};

run()
  .then(() => console.log("MO ADCIO sdk end!"))
  .finally(() => {
    document.querySelector("#monthly-best").style.visibility = "visible";

    //Collect Logs
    adcioInstanceGrid.collectLogs(adcio.clientApi.cafe24);
  });
