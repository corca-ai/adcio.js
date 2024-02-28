// 실제 안다르에 사용되고 있는 배너쪽 코드입니다. (테스트 스킨 auth 아님)
const MO_GRID_PLACEMENT_ID = "e945a115-c3c5-4575-8d01-b9d8565063fe";

const adcioInstanceBanner = new adcio.Adcio({
  clientId: "76dc12fa-5a73-4c90-bea5-d6578f9bc606",
});

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

const injectSuggestions = async () => {
  let customer = {};
  try {
    const { id, ...rest } = await adcio.clientApi.cafe24.getCustomer();
    customer = { ...rest, customerId: id };
  } catch (e) {
    customer = {};
  }

  const { suggestions } = await adcioInstanceBanner.createSuggestion({
    ...customer,
    placementId: MO_GRID_PLACEMENT_ID,
  });

  const elements = suggestions.map((suggestion) => {
    const element = bannerToElement(suggestion.banner);
    element.addEventListener("click", () =>
      adcioInstanceBanner.onClick(suggestion.logOptions),
    );
    element.addEventListener("impression", () =>
      adcioInstanceBanner.onImpression(suggestion.logOptions),
    );
    adcioInstanceBanner.observeImpression({
      element,
      filter: (e) => e.classList.contains("swiper-slide-active"),
    });
    return element;
  });

  await adcio.waitForElement(
    ".df-bannermanager-main-2023-pc > .swiper-wrapper > .swiper-slide > img",
  );

  const wrapper = document.querySelector(
    ".df-bannermanager-main-2023-pc > .swiper-wrapper",
  );
  elements.forEach((e) => wrapper.appendChild(e));
};

adcio.waitForDOM().then(() => {
  injectSuggestions();
  adcioInstanceBanner.collectLogs(adcio.clientApi.cafe24);
});