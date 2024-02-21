const MOCK_SELECTED_GRID_INDEXES = [0, 3, 4];

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

const GRID_PLACEMENT_ID = "83126115-6ceb-41a1-b65e-e46ca5afac4c";

console.log("ADCIO sdk start!");
const adcioInstance = new adcio.Adcio({
  clientId: "76dc12fa-5a73-4c90-bea5-d6578f9bc606",
});

/**
 * @param {Array<FetchActivePlacementsResponseDto>} placements
 * @param {CustomerWithId} customer
 * @returns {Promise<Array<SuggestionResponseDto>>}
 */
const createAllSuggestions = (placements, customer) => {
  return Promise.allSettled(
    placements?.map(async (placement) => {
      const params = {
        ...customer,
        placementId: placement.id,
      };

      if (placement.id === GRID_PLACEMENT_ID) {
        return await adcioInstance.createProductSuggestion({
          categoryIdOnStore: CATEGORY_IDS.total,
          ...params,
        });
      }

      return await adcioInstance.createSuggestion({
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
  const retailPrice = product.data?.retail_price || product.price;
  const salePercent =
    ((retailPrice - product.discountPrice) / retailPrice) * 100;

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
                textContent: "product.data.model_name",
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
                          product.discountPrice || product.price,
                        ).toLocaleString()}��`,
                      },
                    ],
                  },
                  {
                    tag: "span",
                    classList: [
                      "sell",
                      `product_price${Number(
                        product.discountPrice || product.price,
                      ).toLocaleString()}��`,
                      "displaynone12displaynone",
                    ],
                    children:
                      salePercent < 1
                        ? []
                        : [
                            {
                              tag: "strong",
                              textContent: `${
                                Number(retailPrice).toLocaleString() + "��"
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
                      "display_�띿뒪�몃컯��",
                      "xans-record-",
                      "textBox",
                    ],
                    children:
                      (categoryId === CATEGORY_IDS.total && // 移댄뀒怨좊━ �꾩껜�� 寃쎌슦�먮쭔 text box媛� 議댁옱��
                        product.additional_information?.map((data) => {
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
  })}_dev`; //TODO: fix pageName and delete _dev

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
 * @param {Array<number>} adcioGridIndexes
 * @param {Array<Element>} newElements
 */
const swapElements = (originalElements, adcioGridIndexes, newElements) => {
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
 * @param {Array<number>} indexes
 * @param {NodeList<Element>} newElements
 */
const insertElements = (originalElements, indexes, newElements) => {
  const originElementsArr = [...originalElements];
  const newElementsArr = [...newElements];

  originalElements.forEach((element, index) => {
    if (indexes.includes(index) && newElementsArr.length) {
      const newElement = newElementsArr.shift();
      element.outerHTML = newElement.outerHTML;
      return;
    }

    const elementToBeInserted = originElementsArr.shift();
    element.outerHTML = elementToBeInserted.outerHTML;
  });
};

/**
 * @param {Array<SuggestionResponseDto>} suggestedData
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
 * @param {SuggestionResponseDto[]} suggestedData
 * @param {string} categoryId
 */
const injectProductSuggestions = (suggestedData, categoryId) => {
  const { suggestions } = suggestedData;

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
    swapElements(
      document
        .querySelector(`#monthly-best`)
        .querySelector(`.prd_basic`)
        .querySelectorAll(".swiper-slide"),
      MOCK_SELECTED_GRID_INDEXES,
      elements,
    );
    return;
  }

  insertElements(
    document
      .querySelector(`#monthly-best`)
      .querySelector(`.prd_basic`)
      .querySelectorAll(".swiper-slide"),
    MOCK_SELECTED_GRID_INDEXES,
    elements,
  );
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
  window.addEventListener("beforeunload", () => {
    observer.disconnect();
  });
};

/**
 * @param {string} code
 * @returns {string | null}
 */
const getCategoryNoFromCode = (code) => {
  if (!code) {
    return null;
  }
  const regex = /\$cate_no\s*=\s*(\d+)/;
  const match = code.match(regex);
  return match.length >= 2 ? match[1] : null;
};

// /**
//  * @param {string} selector
//  * @returns {Array<string>}
//  */
// const getAllIdOnStoreInElement = (selector) => {
//   const idOnStores = [];
//   const elements = document.querySelector(selector);
//   elements.childNodes.forEach((element) => {
//     if (!element.id) {
//       return;
//     }
//     const regex = /anchorBoxId_(\d+)/;
//     const match = element.id.match(regex);
//     if (match.length >= 2) {
//       idOnStores.push(match[1]);
//     }
//   });
//   return idOnStores;
// };

/**
 * @param {string} selectors
 */
const createOrFixRankElement = (selectors) => {
  const elements = document.querySelectorAll(selectors);
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

  const { placements, customer } = await getPlacementsAndCustomer();
  if (!placements.length) {
    document.querySelector(`#monthly-best`).style.visibility = "visible";
    return;
  }

  const allSuggestions = {
    BANNER: null,
    GRID: null,
  };
  const allPromises = await createAllSuggestions(placements, customer);
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
    await injectProductSuggestions(allSuggestions.GRID, CATEGORY_IDS.total);
    await createOrFixRankElement(".img");
  }
  document.querySelector(`#monthly-best`).style.visibility = "visible";

  // Observe Grid List Changes and inject product suggestions and fix rank badges
  const targetElement = document.querySelector("#monthly-best");
  const observeOptions = {
    childList: true,
  };
  const mutationCallback = async (mutationsList, observer) => {
    observer.disconnect();

    if (mutationsList.find((m) => m.type === "childList")) {
      document.querySelector("#monthly-best").style.visibility = "hidden";
      const categoryId =
        getCategoryNoFromCode(
          document.querySelector("#monthly-best")?.innerHTML,
        ) || CATEGORY_IDS.total;
      adcioInstance
        .createSuggestion({
          ...customer,
          categoryIdOnStore: categoryId,
          placementId: GRID_PLACEMENT_ID,
        })
        .then(async (suggested) => {
          await injectProductSuggestions(suggested, categoryId);
          await createOrFixRankElement(".img");
        })
        .finally(async () => {
          document.querySelector("#monthly-best").style.visibility = "visible";
        });
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

run()
  .then(() => console.log("ADCIO sdk end!"))
  .finally(() => {
    document.querySelector("#monthly-best").style.visibility = "visible";
  });
