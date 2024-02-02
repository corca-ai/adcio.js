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
 * @param {Array<HTMLElement>} bannerElements
 */
const appendBannerChild = async (bannerElements) => {
  await adcio.waitForElement(
    ".df-bannermanager-main-2023-pc > .swiper-wrapper > .swiper-slide > img",
  );
  const wrapper = document.querySelector(
    ".df-bannermanager-main-2023-pc > .swiper-wrapper",
  );

  bannerElements.forEach((e) => wrapper.appendChild(e));
};

/**
 * @param {Array<HTMLElement>} productElements
 */
const appendProductChild = async (productElements) => {
  await adcio.waitForElement(`.prd_basic`);
  const wrapper = document.querySelector(`.prd_basic`); // TODO: fix
  console.log("wrapper - ", wrapper.querySelectorAll(".common_prd_list"));

  wrapper.querySelectorAll(".common_prd_list").forEach((element, index) => {
    if (index >= productElements.length) {
      return;
    }

    productElements[index].forEach((productElement) => {
      element.outerHTML = productElement.outerHTML;
    });
  });
};

/**
 * @param {SuggestionDto['product']} product
 * @returns {HTMLElement}
 */
const productToElement = (product) => {
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
                          src: product.creative.mediaUrl, //TODO: fix
                          // id: "", //TODO
                          // TODO: add animation???
                          alt: product.title,
                        },
                      },
                      {
                        tag: "img",
                        attributes: {
                          src: product.creative.mediaUrl, //TODO: fix
                          // id: "", //TODO
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
                textContent: "1",
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
                textContent: product.name, //TODO: fix
              },
              {
                tag: "p",
                classList: ["name"],
                // attributes: {},
              },
              {
                tag: "div",
                classList: ["price", "hassale"],
                // attributes: {},
              },
              {
                tag: "div",
                classList: ["color_review"],
                // attributes: {},
              },
              {
                tag: "div",
                classList: ["icon"],
                // attributes: {},
              },
              {
                tag: "ul",
                classList: [
                  "xans-element-",
                  "xans-product",
                  "xans-product-listitem",
                  "item_box",
                ],
                // attributes: {},
              },
              {
                tag: "div",
                classList: ["displaynone"],
                // attributes: {},
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
 * @param {Promise<SuggestionResponseDto[]>} suggestionsPromises
 */
const injectAllSuggestions = async (suggestionsPromises) => {
  const productElements = [];
  suggestionsPromises.forEach(({ status, value }) => {
    if (status === "rejected") {
      return;
    }

    const { suggestions, placement } = value;
    const elements = suggestions.map((suggestion, index) => {
      const element =
        placement.type === "BANNER"
          ? bannerToElement(suggestion.banner)
          : productToElement(suggestion.product);
      element.addEventListener("click", () =>
        adcioInstance.onClick(suggestion.logOptions),
      );
      element.addEventListener("impression", () =>
        adcioInstance.onImpression(suggestion.logOptions),
      );

      // TODO: product 타입이면
      if (placement.type === "BANNER") {
        adcioInstance.observeImpression({
          element,
          filter: (e) => e.classList.contains("swiper-slide-active"),
        });
      }

      return element;
    });

    switch (placement.type) {
      case "BANNER":
        appendBannerChild(elements);
        return;
      case "PRODUCT":
        productElements.push([...elements]);
      default:
        return;
    }
  });

  if (!productElements.length) {
    return;
  }
  appendProductChild(productElements);
};

/**
 * @param {Promise<SuggestionResponseDto[]>} suggestionsPromises
 */
const addEventListenerToBestCategory = (suggestionsPromises) => {
  const BEST_CATEGORY_DATA = {
    prdlist01: "전체", // TODO: fix value to category name for server
    prdlist02: "우먼즈",
    prdlist03: "맨즈",
    prdlist04: "주니어",
    prdlist05: "홈트용품&ACC",
  };
  Object.keys(BEST_CATEGORY_DATA).forEach((moduleName) => {
    const element = document.querySelector(`[module-name="${moduleName}"]`);
    element.addEventListener("click", () => {
      console.log("TODO: append child or do sth with suggested");
      alert(
        `${BEST_CATEGORY_DATA[moduleName]} 클릭되었어어요! TODO: suggest product again using the value which is clicked`,
      );
    });
  });
};

adcio.waitForDOM().then(async () => {
  const { placements, customer } = await getPlacementsAndCustomer();
  if (!placements.length) {
    return;
  }

  const suggestionsPromises = await createAllSuggestions(placements, customer);

  if (!suggestionsPromises.find((p) => p.status === "fulfilled")) {
    return;
  }

  const MOCK_SUGGEST_PROMISES = [
    ...suggestionsPromises,
    { value: { ...MOCK_PRODUCT_SUGGESTED }, status: "fulfilled" },
  ];
  console.log("MOCK_PRODUCT_SUGGESTED: ", MOCK_SUGGEST_PROMISES);
  injectAllSuggestions(MOCK_SUGGEST_PROMISES);
  addEventListenerToBestCategory(MOCK_SUGGEST_PROMISES); // TODO:

  //adcioInstance.collectLogs(adcio.clientApi.cafe24);
});
