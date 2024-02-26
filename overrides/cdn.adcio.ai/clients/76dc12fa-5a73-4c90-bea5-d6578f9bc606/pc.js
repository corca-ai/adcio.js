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

const PC_GRID_PLACEMENT_ID = "5ae9907f-3cc2-4ed4-aaa4-4b20ac97f9f4";
// PC grid placement Id
// andar PC test grid placement id - 5ae9907f-3cc2-4ed4-aaa4-4b20ac97f9f4
// andar PC production - ???? 아직 생성 안함
// test@test.com - bfe21c26-6ccd-4aa5-b8ab-69e3d361c6c1
const CLIENT_ID = "76dc12fa-5a73-4c90-bea5-d6578f9bc606";
// andar 76dc12fa-5a73-4c90-bea5-d6578f9bc606
// test@test.com 76dc12fa-5a73-4c90-bea5-d6578f9bc606

// PC PRODUCT GRID test skin 정보
// 페이지 이름 skin159_MAIN
// 지면 ID 5ae9907f-3cc2-4ed4-aaa4-4b20ac97f9f4

console.log("PC sdk !");
const adcioInstance = new adcio.Adcio({
  clientId: CLIENT_ID,
});

/**
 * @param {Array<FetchActivePlacementsResponseDto>} placements
 * @param {CustomerWithId} customer
 * @param {Array<string>} allIdOnStore
 * @returns {Promise<Array<SuggestionResponseDto | SuggestionProductsRequestDto>>}
 */
const createAllSuggestions = (placements, customer, allIdOnStore) => {
  return Promise.allSettled(
    placements.map(async (placement) => {
      const params = {
        ...customer,
        placementId: placement.id,
      };

      if (placement.id === PC_GRID_PLACEMENT_ID) {
        return adcioInstance.createSuggestionProducts({
          categoryIdOnStore: CATEGORY_IDS.total,
          excludingProductIds: allIdOnStore?.map((id) => `${CLIENT_ID}:${id}`),
          ...params,
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

  const discountPercent =
    product.price == null || !product.discountPrice == null
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
  const pageName = `skin159_${adcio.getMeta({
    // andar test skin(without banner): skin159
    // andar production(banner only): 135
    // test@test.com skin159_MAIN_dev
    name: "path_role",
  })}`; // TODO: delete the _dev in production or test skin

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
    if (adcioGridIndexes.includes(index + 1) && newElements.length) {
      const newElement = newElements.shift();
      element.replaceWith(newElement);
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
    if (adcioGridIndexes.includes(index + 1) && newElements.length) {
      const newElement = newElements.shift();
      element.replaceWith(newElement);
      return;
    }

    const elementToBeInserted = originElementsArr.shift();
    element.replaceWith(elementToBeInserted);
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
 */
const injectGridSuggestions = (suggestedData, categoryId) => {
  const { placement, suggestions } = suggestedData;

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
    document
      .querySelector("#monthly-best")
      .querySelector(`.prd_basic`)
      .querySelectorAll("[data-adcio-id]").length
  ) {
    swapElements(
      document
        .querySelector("#monthly-best")
        .querySelector(`.prd_basic`)
        .querySelectorAll(".common_prd_list"),
      elements,
      placement.displayPositions,
    );
    return;
  }

  insertElements(
    document
      .querySelector("#monthly-best")
      .querySelector(`.prd_basic`)
      .querySelectorAll(".common_prd_list"),
    elements,
    placement.displayPositions,
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

const createOrFixRankElement = () => {
  const elements = document
    .querySelector("#monthly-best")
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
  await adcio.waitForElement("#mainBest");
  document.querySelector(`#mainBest`).style.visibility = "hidden";
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
      Object.assign(allSuggestions, {
        [p.value.placement.type]: { ...p.value },
      }),
  );

  if (allSuggestions.BANNER) {
    await adcio.waitForDOM();
    injectBannerSuggestions(allSuggestions.BANNER);
  }
  if (allSuggestions.GRID) {
    await injectGridSuggestions(allSuggestions.GRID, CATEGORY_IDS.total);
    await createOrFixRankElement();
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
      document
        .querySelector("#monthly-best")
        .querySelector(`.prd_basic`).style.visibility = "hidden";

      const categoryId =
        getCategoryIdFromHTML(
          document.querySelector("#monthly-best")?.innerHTML,
        ) || CATEGORY_IDS.total;
      const allIdOnStore = await getAllIdOnStoreInElement();

      adcioInstance
        .createSuggestionProducts({
          ...customer,
          categoryIdOnStore: categoryId,
          placementId: PC_GRID_PLACEMENT_ID,
          excludingProductIds: allIdOnStore?.map((id) => `${CLIENT_ID}:${id}`),
        })
        .then(async (suggested) => {
          await injectGridSuggestions(suggested, categoryId);
          await createOrFixRankElement();
        })
        .finally(
          () =>
            (document
              .querySelector("#monthly-best")
              .querySelector(".prd_basic").style.visibility = "visible"),
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
  .then(() => console.log("ADCIO done"))
  .catch((e) => console.log(e))
  .finally(() => {
    document.querySelector(`#mainBest`).style.visibility = "visible";

    //Collect Logs
    adcioInstance.collectLogs(adcio.clientApi.cafe24);
  });
