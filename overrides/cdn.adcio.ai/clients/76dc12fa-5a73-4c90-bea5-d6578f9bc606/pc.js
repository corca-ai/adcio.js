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

const GRID_PLACEMENT_ID = "d1e900b9-37ee-4fc2-ab03-443b78059fbe"; // andar test grid placement id - "5ae9907f-3cc2-4ed4-aaa4-4b20ac97f9f4"
const CLIENT_ID = "76dc12fa-5a73-4c90-bea5-d6578f9bc606"; // andar-"76dc12fa-5a73-4c90-bea5-d6578f9bc606"

const MOCK_SELECTED_GRID_INDEXES = [0, 3, 4]; // TODO: delete and replace before add script

console.log("sdk 브라우저 테스트!");
const adcioInstance = new adcio.Adcio({
  clientId: CLIENT_ID,
});

/**
 * @param {Array<FetchActivePlacementsResponseDto>} placements
 * @param {CustomerWithId} customer
 * @param {Array<string>} allIdOnStore
 * @returns {Promise<Array<SuggestionResponseDto>>}
 */
const createAllSuggestions = (placements, customer, allIdOnStore) => {
  return Promise.allSettled(
    placements.map(async (placement) => {
      const params = {
        ...customer,
        placementId: placement.id,
      };

      if (placement.id === GRID_PLACEMENT_ID) {
        Object.assign(params, {
          categoryIdOnStore: CATEGORY_IDS.total,
          excludingProductIds: allIdOnStore?.map((id) => `${CLIENT_ID}:${id}`),
        });
      }

      return adcioInstance.createSuggestion({
        ...params,
      });
    }),
  );
};

/**
 * @param {SuggestionDto['product']} product
 * @param {string} categoryId
 * @returns {HTMLElement}
 */
const productToElement = (product, categoryId) => {
  const productHref = `${product.url}&cate_no=${categoryId}&display_group=1`; // TODO: double check if there is edge case
  const salePercent =
    ((product.data.retail_price -
      product.data.discountprice.pc_discount_price) /
      product.data.retail_price) *
    100;

  return adcio.createNestedElement({
    tag: "div",
    classList: ["common_prd_list", "swiper-slide", "xans-record-"],
    attributes: { "vreview-dom-embeded": true, "data-adcio-id": true }, //Adcio attribute to disctinct ADCIO elements from others.
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
                      {
                        tag: "img",
                        classList: ["overimg"],
                        attributes: {
                          src: product?.data?.small_image,
                          alt: product.name,
                          id: `eListPrdImage${product.idOnStore}_1`,
                        },
                      },
                      {
                        tag: "img",
                        attributes: {
                          src: product?.data?.tiny_image,
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
                textContent: product.data.model_name,
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
                    children:
                      salePercent < 1
                        ? []
                        : [
                            {
                              tag: "strong",
                              textContent: salePercent.toFixed() + "%",
                            },
                          ],
                  },
                  {
                    tag: "span",
                    classList: ["sale"],
                    children: [
                      {
                        tag: "strong",
                        textContent: `${Number(
                          product.data.discountprice.pc_discount_price ||
                            product.price,
                        ).toLocaleString()}원`,
                      },
                    ],
                  },
                  {
                    tag: "span",
                    classList: [
                      "sell",
                      `product_price${Number(
                        product.data.discountprice.pc_discount_price ||
                          product.price,
                      ).toLocaleString()}원`,
                      "displaynone12displaynone",
                    ],
                    children: [
                      {
                        tag: "strong",
                        textContent: `${
                          Number(product.data.retail_price).toLocaleString() +
                          "원"
                        }`,
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
              {
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
                    children:
                      (categoryId === CATEGORY_IDS.total && // 카테고리 전체인 경우에만 text box가 존재함
                        product.data.additional_information
                          ?.filter(
                            (data) => data.name === "텍스트박스" && data.value,
                          )
                          ?.map((data) => {
                            return {
                              tag: "div",
                              classList: ["add_text"],
                              textContent: data.value,
                            };
                          })) ||
                      [],
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
    tag: "div",
    classList: ["swiper-slide"],
    attributes: { "df-banner-clone": "" },
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
      {
        tag: "a",
        classList: ["link_box"],
        attributes: {
          href: banner.url,
          style: "white-space: pre;",
        },
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
  const pageName = `skin135_${adcio.getMeta({
    //andar test skin(without banner): 159, andar production(with banner): 135
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
 * @param {NodeList<Element>} originalElements
 * @param {Array<Element>} newElements
 * @param {Array<number>} adcioGridIndexes
 */
const swapElements = (originalElements, newElements, adcioGridIndexes) => {
  originalElements.forEach((element, index) => {
    if (adcioGridIndexes.includes(index) && newElements.length) {
      const newElement = newElements.shift();
      element.outerHTML = newElement.outerHTML;
      return;
    }
  });
};

/**
 * @param {NodeList<Element>} originalElements
 * @param {Array<Element>} newElements
 * @param {Array<number>} adcioGridIndexes
 */
const insertElements = (originalElements, newElements, adcioGridIndexes) => {
  const originElementsArr = [...originalElements];

  originalElements.forEach((element, index) => {
    if (adcioGridIndexes.includes(index) && newElements.length) {
      const newElement = newElements.shift();
      element.outerHTML = newElement.outerHTML;
      return;
    }

    const elementToBeInserted = originElementsArr.shift();
    element.outerHTML = elementToBeInserted.outerHTML;
  });
};

/**
 * @param {SuggestionResponseDto} suggestedData
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
    .waitForElement(
      ".df-bannermanager-main-2023-pc > .swiper-wrapper > .swiper-slide > img",
    )
    .then(() =>
      appendChildForSelected(
        elements,
        ".df-bannermanager-main-2023-pc > .swiper-wrapper",
      ),
    );
};

/**
 * @param {SuggestionResponseDto} suggestedData
 * @param {string} categoryId
 * @param {Array<number>} adcioGridIndexes
 */
const injectGridSuggestions = (suggestedData, categoryId, adcioGridIndexes) => {
  const { suggestions } = suggestedData;

  const elements = suggestions.map((suggestion) => {
    const element = productToElement(suggestion.product, categoryId);

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
    document.querySelector(`.prd_basic`).querySelectorAll("[data-adcio-id]")
      .length
  ) {
    swapElements(
      document.querySelector(`.prd_basic`).querySelectorAll(".common_prd_list"),
      elements,
      adcioGridIndexes,
    );
    return;
  }

  insertElements(
    document.querySelector(`.prd_basic`).querySelectorAll(".common_prd_list"),
    elements,
    adcioGridIndexes,
  );
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
 * @param {string} selector
 * @returns {Array<string>}
 */
const getAllIdOnStoreInElement = (selector) => {
  const idOnStores = [];
  const elements = document.querySelector(selector);
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
 * @param {string} parentElementSelector
 */
const createOrFixRankElement = (parentElementSelector) => {
  const elements = document.querySelectorAll(parentElementSelector);
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
  await adcio.waitForElement("#mainBest");
  document.querySelector(`#mainBest`).style.visibility = "hidden";
  const allIdOnStore = await getAllIdOnStoreInElement(".prd_basic");

  const { placements, customer } = await getPlacementsAndCustomer();
  if (!placements.length) {
    document.querySelector(`#mainBest`).style.visibility = "visible";
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
    await injectGridSuggestions(
      allSuggestions.GRID,
      CATEGORY_IDS.total,
      MOCK_SELECTED_GRID_INDEXES,
    );
    await createOrFixRankElement(".img");
  }
  document.querySelector(`#mainBest`).style.visibility = "visible";

  // Observe Grid List elements changes and inject product suggestions(+fix rank badges).
  const targetElement = document.querySelector("#monthly-best");
  const observeOptions = {
    childList: true,
  };
  const mutationCallback = async (mutationsList, observer) => {
    observer.disconnect();

    if (mutationsList.find((m) => m.type === "childList")) {
      document.querySelector(`.prd_basic`).style.visibility = "hidden";

      const categoryId =
        getCategoryIdFromHTML(
          document.querySelector("#monthly-best")?.innerHTML,
        ) || CATEGORY_IDS.total;
      const allIdOnStore = await getAllIdOnStoreInElement(".prd_basic");

      adcioInstance
        .createSuggestion({
          ...customer,
          categoryIdOnStore: categoryId,
          placementId: GRID_PLACEMENT_ID,
          excludingProductIds: allIdOnStore?.map((id) => `${CLIENT_ID}:${id}`),
        })
        .then(async (suggested) => {
          await injectGridSuggestions(
            suggested,
            categoryId,
            MOCK_SELECTED_GRID_INDEXES,
          );
          await createOrFixRankElement(".img");
        })
        .finally(
          () =>
            (document.querySelector(".prd_basic").style.visibility = "visible"),
        );
    }

    observer.observe(targetElement, observeOptions);
  };

  const observer = new MutationObserver(mutationCallback);
  observer.observe(targetElement, observeOptions);
  window.addEventListener("beforeunload", () => {
    observer.disconnect();
  });

  //Collect Logs
  //adcioInstance.collectLogs(adcio.clientApi.cafe24);
};

run();
