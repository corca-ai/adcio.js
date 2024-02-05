const MOCK_PRODUCT_SUGGESTED = {
  placement: {
    type: "PRODUCT",
    activated: true,
    bannerPlacementType: "SLIDE",
    clientId: "76dc12fa-5a73-4c90-bea5-d6578f9bc606",
    createdAt: "2023-09-12T05:00:05.641Z",
    deletedAt: null,
    developEnvironment: "CODE_INJECTOR",
    displayCount: 15,
    displayFormatHeight: 1120,
    displayFormatWidth: 1300,
    id: "e945a115-c3c5-4575-8d01-b9d8565063fe",
    updatedAt: "2023-11-13T01:37:32.719Z",
  },
  suggestions: [
    {
      product: {
        activated: true,
        appRoute: null,
        categoryId: "ce557633-b020-4a98-84c2-263fcd538b26",
        clientId: "76dc12fa-5a73-4c90-bea5-d6578f9bc606",
        createdAt: "2024-01-22T12:27:10.669Z",
        creative: {
          id: "6b57b16c-6179-405c-9b72-fded52ff35ad",
          mediaUrl:
            "https://adcio-bucket-controller-public-dev-123456.s3.ap-northeast-2.amazonaws.com/banners/image/76dc12fa-5a73-4c90-bea5-d6578f9bc606/871f03f8-2c7765b4-5af9-4e32-95b5-af40d609d260",
          width: 1300,
          height: 1120,
          placementFormatRatio: "7X6",
        },
        data: {},
        deepLink: null,
        deletedAt: null,
        endsAt: null,
        id: "a7de3e3a-adcf-4698-9f9a-d7ed5dc6518d",
        name: "프로덕트 테스트",
        productId: null,
        startsAt: "2024-01-23T01:10:00.000Z",
        type: "image",
        url: "https://adcio-bucket-controller-public-dev-123456.s3.ap-northeast-2.amazonaws.com/banners/image/76dc12fa-5a73-4c90-bea5-d6578f9bc606/871f03f8-2c7765b4-5af9-4e32-95b5-af40d609d260",
        title: "프로덕트 테스트",
        suggestionType: "RECOMMEND",
      },
    },
  ],
};
const MOCK_SELECTED_GRID_INDEXES = [1];

console.log("sdk 브라우저 테스트!🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸");
const adcioInstance = new adcio.Adcio({
  clientId: "76dc12fa-5a73-4c90-bea5-d6578f9bc606",
});

/**
 * @param {Array<FetchActivePlacementsResponseDto>} placements
 * @param {Customer} customer
 * @returns {Promise<SuggestionResponseDto[]>}
 */
const createAllSuggestions = (placements, customer) => {
  return Promise.allSettled(
    placements.map(
      async (placement) =>
        await adcioInstance.createSuggestion({
          ...customer,
          placementId: placement.id,
        }),
    ),
  );
};

/**
 * @param {SuggestionDto['product']} product
 * @param {number} index
 * @returns {HTMLElement}
 */
const productToElement = (product, index) => {
  return adcio.createNestedElement({
    tag: "div",
    classList: ["common_prd_list", "swiper-slide", "xans-record-"], //TODO: fix
    attributes: { "vreview-dom-embeded": true },
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
                      href: product.url,
                      // name: "anchorBoxName_5752", TODO: 생략가능???
                    },
                    children: [
                      {
                        tag: "img",
                        classList: ["overimg"],
                        attributes: {
                          src: "https://adcio-bucket-controller-public-dev-123456.s3.ap-northeast-2.amazonaws.com/banners/image/76dc12fa-5a73-4c90-bea5-d6578f9bc606/d55902ba-8d85355a-97d8-4c76-8523-32f3c8b49e8b", // product.creative.mediaUrl, //TODO: fix
                          // id: "", //TODO
                          // TODO: add animation???
                          alt: product.title,
                        },
                      },
                      {
                        tag: "img",
                        attributes: {
                          src: product.creative.mediaUrl, //TODO: fix
                          alt: product.title,
                        },
                      },
                    ],
                  },
                ],
              },
              {
                tag: "span",
                classList: ["rankBadge"],
                textContent: index + 1,
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
                  "vreview-product-id": "TODO",
                  "vreview-dom-id": "TODO",
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
                        children: [
                          {
                            tag: "span",
                            textContent: "리뷰 00000",
                          },
                        ],
                      },
                    ],
                  },
                ], //TODO: fix
              },
              {
                tag: "p",
                classList: ["model"],
                textContent: "AMF8L-06_AMF9L-07", //TODO: fix
              },
              {
                tag: "p",
                classList: ["name"],
                children: [
                  {
                    tag: "a",
                    attributes: { href: product.url },
                    children: [
                      {
                        tag: "span",
                        classList: ["title", "displaynone"],
                        textContent: " :",
                        children: [
                          {
                            tag: "span",
                            attributes: {
                              style: "font-size:14px;color:#000000;",
                            },
                            textContent: "상품명",
                          },
                        ],
                      },
                      {
                        tag: "span",
                        classList: ["product_name"],
                        children: [
                          {
                            tag: "span",
                            attributes: {
                              style: "font-size:14px;color:#000000;",
                            },
                            textContent: product.title,
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
                      style: "display: inline;",
                    },
                    children: [{ tag: "strong", textContent: "00%" }],
                  },
                  {
                    tag: "span",
                    classList: ["sale"],
                    children: [{ tag: "strong", textContent: "0,000원" }],
                  },
                  {
                    tag: "span",
                    classList: [
                      "sell",
                      "product_price75,000원", //TODO: fix to follow prices after api updated
                      "displaynone12displaynone",
                    ],
                    children: [{ tag: "strong", textContent: "1,111원" }],
                  },
                  {
                    tag: "span",
                    classList: ["customer", "displaynone"],
                    children: [{ tag: "strong", textContent: "0원" }],
                  },
                ],
              },
              {
                tag: "div",
                classList: ["color_review"],
                children: [
                  { tag: "div", classList: ["colorchip", "displaynone"] },
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
                      "displaynone",
                      "display_소비자가",
                      "xans-record-",
                    ],
                    // children: [],//displaynone 되어서 생략함
                  },
                  {
                    tag: "li",
                    classList: [
                      "displaynone",
                      "display_판매가",
                      "xans-record-",
                    ],
                    // children: [],//displaynone 되어서 생략함
                  },
                  {
                    tag: "li",
                    classList: [
                      "displaynone",
                      "display_모델명",
                      "xans-record-",
                    ],
                    // children: [],//displaynone 되어서 생략함
                  },
                  {
                    tag: "li",
                    classList: ["displaynone", "display_소재", "xans-record-"],
                    // children: [],//displaynone 되어서 생략함
                  },
                  {
                    tag: "li",
                    classList: ["displaynone", "display_색상", "xans-record-"],
                    // children: [],//displaynone 되어서 생략함
                  },
                  {
                    tag: "li",
                    classList: [
                      "displaynone",
                      "display_A/S",
                      "책임자",
                      "xans-record-",
                    ], // children: [],//displaynone 되어서 생략함
                  },
                  {
                    tag: "li",
                    classList: [
                      "displaynone",
                      "display_품질보증기간",
                      "xans-record-",
                    ],
                    // children: [],//displaynone 되어서 생략함
                  },
                  {
                    tag: "li",
                    classList: [
                      "display_텍스트박스",
                      "xans-record-",
                      "textBox",
                    ],
                    children: [
                      {
                        tag: "strong",
                        classList: ["title", "displaynone"],
                      },
                      {
                        tag: "div",
                        classList: ["add_text"],
                        textContent: "TODO with api dev",
                      },
                      {
                        tag: "div",
                        classList: ["add_text"],
                        textContent: "TODO with api dev",
                      },
                    ],
                  },
                  {
                    tag: "li",
                    classList: [
                      "displaynone",
                      "display_할인노출여부",
                      "xans-record-",
                    ],
                    // children: [],//displaynone 되어서 생략함
                  },
                ],
              },
              {
                tag: "div",
                classList: ["displaynone"],
                // children: [],//displaynone 되어서 생략함
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
 * @param {Array<HTMLElement>} wrapperElements
 * @param {Array<HTMLElement>} suggestedElement
 * @param {Array<number>} selectedGrids
 */
const replaceElementForSelectedGrid = (
  wrapperElements,
  suggestedElements,
  selectedGrids,
) => {
  wrapperElements.forEach((element, index) => {
    if (!selectedGrids.includes(index)) {
      //TODO: fix this is tmp solution. Need to be fixed only selected product category placement
      return;
    }

    suggestedElements.forEach(
      (suggestedElement) => (element.outerHTML = suggestedElement.outerHTML),
    );
  });
};

/**
 * @returns {placements : Array<FetchActivePlacementsResponseDto>, customer: Customer}
 */
const getPlacementsAndCustomer = async () => {
  const pageName = `skin135_${adcio.getMeta({
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
 * @param {SuggestionResponseDto[]} suggestedData
 */
//REVIEW: 해당 함수 내부에서 배너 상품 분기하지 말고 함수 자체를 분리 필요. 또한 배너는 wait for dom이 필요하지만 상품은 필요없고 이에 대해 유의하여 작업.
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
 * @param {SuggestionResponseDto[]} suggestedData
 * @param {string} categoryId // TODO: fix
 */
//REVIEW: 해당 함수 내부에서 배너 상품 분기하지 말고 함수 자체를 분리 필요. 또한 배너는 wait for dom이 필요하지만 상품은 필요없고 이에 대해 유의하여 작업.
const injectProductSuggestions = async (suggestedData, categoryId) => {
  const { suggestions } = suggestedData;

  const elements = suggestions.map((suggestion, index) => {
    const element = productToElement(suggestion.product, index); // TODO: fix index
    element.addEventListener("click", () =>
      adcioInstance.onClick(suggestion.logOptions),
    );
    element.addEventListener("impression", () =>
      adcioInstance.onImpression(suggestion.logOptions),
    );

    // // TODO: observe impression for product 질문! adcio 추천 상품인 경우만 observe 하는 것일까?
    // if (placement.type === "BANNER") {
    //   adcioInstance.observeImpression({
    //     element,
    //     filter: (e) => e.classList.contains("swiper-slide-active"),
    //   });
    // }
    return element;
  });

  replaceElementForSelectedGrid(
    document.querySelector(`.prd_basic`).querySelectorAll(".common_prd_list"),
    elements,
    MOCK_SELECTED_GRID_INDEXES,
  );
};

/**
 * @param {NodeListOf<Element>} parentElements
 * @param {string} imgSrc
 */
const setCustomPlaceholder = (parentElements, imgSrc) => {
  parentElements.forEach((element, index) => {
    if (!MOCK_SELECTED_GRID_INDEXES.includes(index)) {
      return;
    }
    element.querySelectorAll("img").forEach(
      (imgElement) => (imgElement.src = imgSrc),
      //"https://adcio-bucket-controller-public-dev-123456.s3.ap-northeast-2.amazonaws.com/banners/image/76dc12fa-5a73-4c90-bea5-d6578f9bc606/c0ec7310-d2fbc70e-7fab-4271-8f9e-e7e536bd3052"), // TODO: fix with 성지 님
    );
  });
};

//REVEIW: stage가 더 잘보였으면 좋겠다. (wait이 어디서 일어나는지 또한 알 수 없음) 기존 코드에서 배너는 waitfordom이 필요하고, 상품은 load 된 이후에 추가적인 fetch가 안 일어남으로 이에 대해 유의하여 작업.
const run = async () => {
  await adcio.waitForElement(".prd_basic");
  setCustomPlaceholder(
    document.querySelector(`.prd_basic`).querySelectorAll(".common_prd_list"),
    "https://adcio-bucket-controller-public-dev-123456.s3.ap-northeast-2.amazonaws.com/banners/image/76dc12fa-5a73-4c90-bea5-d6578f9bc606/c0ec7310-d2fbc70e-7fab-4271-8f9e-e7e536bd3052",
  );

  const { placements, customer } = await getPlacementsAndCustomer();
  if (!placements.length) {
    return;
  }

  const suggestionsPromises = await createAllSuggestions(placements, customer);

  const MOCK_SUGGEST_PROMISES = [
    ...suggestionsPromises,
    { value: { ...MOCK_PRODUCT_SUGGESTED }, status: "fulfilled" },
  ];

  const suggested = { banner: null, product: null };
  MOCK_SUGGEST_PROMISES.forEach(
    //Fix: fix MOCK_SUGGEST_PROMISES to suggestionsPromises
    (p) =>
      p.status === "fulfilled" &&
      Object.assign(suggested, {
        [p.value.placement.type.toLowerCase()]: { ...p.value },
      }),
  );

  if (suggested.product) {
    injectProductSuggestions(suggested.product, "prdList01");

    const targetElement = document.querySelector("#monthly-best");

    const observerConfig = {
      childList: true,
      // subtree: true,
    };

    const observer = new MutationObserver(async (mutationsList) => {
      observer.disconnect();
      if (mutationsList.find((m) => m.type === "childList")) {
        await injectProductSuggestions(suggested.product, ""); // "TODO: 최적화 및 리팩토링 필요!"
      }

      observer.observe(targetElement, observerConfig);
    });
    observer.observe(targetElement, observerConfig);
  }
  if (suggested.banner) {
    adcio.waitForDOM().then(() => injectBannerSuggestions(suggested.banner));
  }

  //adcioInstance.collectLogs(adcio.clientApi.cafe24);
};

run();
