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

const MO_GRID_PLACEMENT_ID = "f77b43c0-6062-4801-950d-104747aa349d";
const CLIENT_ID = "76dc12fa-5a73-4c90-bea5-d6578f9bc606";

console.log("MO ADCIO sdk start!");
const adcioInstance = new adcio.Adcio({
  clientId: CLIENT_ID,
});

/**
 * @param {Array<FetchActivePlacementsResponseDto>} placements
 * @param {CustomerWithId} customer
 * @param {Array<string>} allIdOnStore
 * @returns {Promise<Array<SuggestionResponseDto | SuggestionProductsResponseDto>>}
 */
const createAllSuggestions = (placements, customer, allIdOnStore) => {
  return Promise.allSettled(
    placements?.map(async (placement) => {
      const params = {
        ...customer,
        placementId: placement.id,
      };
      //PRODUCT(GRID)
      if (placement.id === MO_GRID_PLACEMENT_ID) {
        return adcioInstance.createSuggestionProducts({
          categoryIdOnStore: CATEGORY_IDS.total,
          excludingProductIds: allIdOnStore?.map((id) => `${CLIENT_ID}:${id}`),
          ...params,
        });
      }
      //BANNER
      return adcioInstance.createSuggestion({
        ...params,
      });
    }),
  );
};

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
 * @param {SuggestionDto['banner']} banner
 * @returns {HTMLElement}
 */
const bannerToElement = (banner) => {
  return adcio.createNestedElement({
    tag: "li",
    classList: ["swiper-slide", "lazyload"],
    attributes: { "df-banner-clone": "" },
    children: [
      {
        tag: "div",
        classList: ["banner_item_area"],
        attributes:
          banner.type === "video"
            ? {
                "data-type": "df-bannermanager-type_iframe",
                style: "transform: scale(1.099315);",
              }
            : {
                "data-type": "df-bannermanager-type_image",
              },
        children: [
          {
            tag: "div",
            classList: ["banner_item_wrap"],
            children: [
              banner.type === "image"
                ? {
                    tag: "img",
                    attributes: {
                      src: banner.creative.mediaUrl,
                      alt: banner.data.title,
                    },
                  }
                : {
                    tag: "iframe",
                    attributes: {
                      src: banner.creative.mediaUrl,
                      width: "100%",
                      height: "100%",
                      frameborder: "0",
                      allow: "autoplay",
                    },
                  },
            ],
          },
        ],
      },
      {
        tag: "a",
        classList: ["link_box"],
        attributes: { href: banner.url },
        children: [
          {
            tag: "div",
            classList: ["text_box"],
            attributes: { style: "opacity: 1; white-space: pre;" },
            children: [
              ...(banner.data.title
                ? [
                    {
                      tag: "p",
                      classList: ["main_title", "fc_wht"],
                      attributes: { style: `color: ${banner.data.titleColor}` },
                      children: [
                        {
                          tag: "span",
                          classList: ["fontB"],
                          textContent: banner.data.title,
                        },
                      ],
                    },
                  ]
                : []),
              ...(banner.data.subtitle
                ? [
                    {
                      tag: "p",
                      classList: ["sub_title", "fc_wht"],
                      attributes: {
                        style: `color: ${banner.data.subtitleColor}`,
                      },
                      textContent: banner.data.subtitle,
                    },
                  ]
                : []),
              ...(banner.data.description
                ? [
                    {
                      tag: "p",
                      classList: ["sub_title2", "fc_wht"],
                      attributes: {
                        style: `color: ${banner.data.descriptionColor}`,
                      },
                      textContent: banner.data.description,
                    },
                  ]
                : []),
            ],
          },
        ],
      },
    ],
  });
};

/**
 * @param {Array<HTMLElement>} elements
 * @param {string} selectors
 */
const appendChildForSelected = (elements, selectors) => {
  const wrapper = document.querySelector(selectors);
  elements.forEach((e) => wrapper.appendChild(e));
};

/**
 * @returns {placements : Array<FetchActivePlacementsResponseDto>, customer: CustomerWithId}
 */
const getPlacementsAndCustomer = async () => {
  const pageName = `mobile156_${adcio.getMeta({
    name: "path_role",
  })}`;

  const placements = await adcioInstance.fetchPlacements({ pageName });
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
 * @param {Array<number>} adcioGridIndexes
 * @param {Array<Element>} newElements
 */
const swapElements = (adcioGridIndexes, newElements) => {
  const originalElements = document
    .querySelector(`#monthly-best`)
    .querySelector(`.prd_basic`)
    .querySelectorAll(".swiper-slide");

  originalElements.forEach((element, index) => {
    if (adcioGridIndexes.includes(index + 1) && newElements.length) {
      const newElement = newElements.shift();
      element.replaceWith(newElement);
    }
  });
};

/**
 
 * @param {Array<Element>} newElements
 * @param {Array<number>} adcioGridIndexes
 */
const insertElementsForGrid = (newElements, adcioGridIndexes) => {
  const originalElements = document
    .querySelector(`#monthly-best`)
    .querySelector(`.prd_basic`)
    .querySelectorAll(".swiper-slide");

  const originElementsArr = [...originalElements];

  originalElements.forEach((element, index) => {
    if (adcioGridIndexes.includes(index + 1) && newElements.length) {
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
 * @param {Array<SuggestionResponseDto | SuggestionProductsResponseDto>} suggestedData
 */
const injectBannerSuggestions = (suggestedData) => {
  const { suggestions } = suggestedData;

  const elements = suggestions.map((suggestion) => {
    const element = bannerToElement(suggestion.banner);

    element.addEventListener("click", () =>
      adcioInstance.onClick(suggestion.logOptions),
    );
    element.addEventListener("impression", () =>
      adcioInstance.onImpression(suggestion.logOptions),
    );
    adcioInstance.observeImpression({
      element,
      filter: (e) => e.classList.contains("swiper-slide-active"),
    });

    return element;
  });

  adcio
    .waitForElement(".df-bannermanager-main-visual-mo > ul > li > a")
    .then(() =>
      appendChildForSelected(elements, ".df-bannermanager-main-visual-mo > ul"),
    );
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
      adcioInstance.onClick(suggestion.logOptions),
    );
    element.addEventListener("impression", () =>
      adcioInstance.onImpression(suggestion.logOptions),
    );
    adcioInstance.observeImpression({
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
    swapElements(placement.displayPositions, elements);
    return;
  }

  insertElementsForGrid(elements, placement.displayPositions);
};

/**
 * @param {MutationCallback} mutationCallback
 * @param {Node} targetElement
 * @param {MutationObserverInit | undefined} [observeOptions]
 */
const observeUntilUnload = (
  mutationCallback,
  targetElement,
  observeOptions,
) => {
  const observer = new MutationObserver(mutationCallback);
  observer.observe(targetElement, observeOptions);
  window.addEventListener("beforeunload", () => observer.disconnect());
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

  const allSuggestions = {
    BANNER: null,
    GRID: null,
  };
  const allPromises = await createAllSuggestions(
    placements,
    customer,
    allIdOnStore,
  );
  allPromises.forEach(
    (p) =>
      p.status === "fulfilled" &&
      Object.assign(allSuggestions, { [p.value.placement.type]: p.value }),
  );

  if (allSuggestions.BANNER) {
    await adcio.waitForDOM();
    injectBannerSuggestions(allSuggestions.BANNER);
  }
  if (allSuggestions.GRID) {
    await injectGridSuggestions(allSuggestions.GRID, CATEGORY_IDS.total);
    await createOrFixRankElement();
  }
  document.querySelector(`#monthly-best`).style.visibility = "visible";

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

      adcioInstance
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
  window.addEventListener("beforeunload", () => {
    observer.disconnect();
  });
};

run()
  .then(() => console.log("MO ADCIO sdk end!"))
  .finally(() => {
    document.querySelector("#monthly-best").style.visibility = "visible";

    //Collect Logs
    adcioInstance.collectLogs(adcio.clientApi.cafe24); //error occurs in getCatList
  });
