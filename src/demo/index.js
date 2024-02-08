import { SuggestionTestId } from "../__tests__/mock/constants";
import { worker } from "../__tests__/mock/browser";
import { Adcio } from "adcio/adcio";
import { createNestedElement, waitForDOM, waitForElement } from "lib/utils/dom";

// Start the msw browser service worker
worker.start();

const adcioInstance = new Adcio({
  clientId: "test",
  customerId: "test",
});

const bannerToElement = (banner) => {
  return createNestedElement({
    tag: "div",
    classList: ["swiper-slide"],
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
  const suggestionsResponse = await adcioInstance.createSuggestion({
    placementId: SuggestionTestId.SUCCESS_PLACEMENT,
  });

  if (!suggestionsResponse) {
    return;
  }

  const elements = suggestionsResponse.suggestions.map((suggestion) => {
    const element = bannerToElement(suggestion.banner);
    element.addEventListener("click", () =>
      adcioInstance.onClick(suggestion.logOptions),
    );
    element.addEventListener("impression", () =>
      adcioInstance.onImpression(suggestion.logOptions),
    );
    adcioInstance.observeImpression({
      element,
      filter: (event) => event.classList.contains("swiper-slide-active"),
    });
    return element;
  });

  await waitForElement(".swiper");

  const wrapper = document.querySelector(".swiper > .swiper-wrapper");

  elements.forEach((e) => wrapper.appendChild(e));
};

waitForDOM().then(async () => {
  await injectSuggestions();
  await swiper.update(); // update swiper after injecting new elements
  // adcioInstance.collectLogs(adcio.frontApi.cafe24); // TODO: mock cafe24 api
});
