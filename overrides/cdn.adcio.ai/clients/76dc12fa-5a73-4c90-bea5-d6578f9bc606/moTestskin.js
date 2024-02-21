// BANNER wihout GRID

// const adcioInstance = new adcio.Adcio({
//   clientId: "76dc12fa-5a73-4c90-bea5-d6578f9bc606",
// });

// const bannerToElement = (banner) => {
//   return adcio.createNestedElement({
//     tag: "li",
//     classList: ["swiper-slide", "lazyload"],
//     attributes: { "df-banner-clone": "" },
//     children: [
//       {
//         tag: "div",
//         classList: ["banner_item_area"],
//         attributes:
//           banner.type === "video"
//             ? {
//                 "data-type": "df-bannermanager-type_iframe",
//                 style: "transform: scale(1.099315);",
//               }
//             : {
//                 "data-type": "df-bannermanager-type_image",
//               },
//         children: [
//           {
//             tag: "div",
//             classList: ["banner_item_wrap"],
//             children: [
//               banner.type === "image"
//                 ? {
//                     tag: "img",
//                     attributes: {
//                       src: banner.creative.mediaUrl,
//                       alt: banner.data.title,
//                     },
//                   }
//                 : {
//                     tag: "iframe",
//                     attributes: {
//                       src: banner.creative.mediaUrl,
//                       width: "100%",
//                       height: "100%",
//                       frameborder: "0",
//                       allow: "autoplay",
//                     },
//                   },
//             ],
//           },
//         ],
//       },
//       {
//         tag: "a",
//         classList: ["link_box"],
//         attributes: { href: banner.url },
//         children: [
//           {
//             tag: "div",
//             classList: ["text_box"],
//             attributes: { style: "opacity: 1; white-space: pre;" },
//             children: [
//               ...(banner.data.title
//                 ? [
//                     {
//                       tag: "p",
//                       classList: ["main_title", "fc_wht"],
//                       attributes: { style: `color: ${banner.data.titleColor}` },
//                       children: [
//                         {
//                           tag: "span",
//                           classList: ["fontB"],
//                           textContent: banner.data.title,
//                         },
//                       ],
//                     },
//                   ]
//                 : []),
//               ...(banner.data.subtitle
//                 ? [
//                     {
//                       tag: "p",
//                       classList: ["sub_title", "fc_wht"],
//                       attributes: {
//                         style: `color: ${banner.data.subtitleColor}`,
//                       },
//                       textContent: banner.data.subtitle,
//                     },
//                   ]
//                 : []),
//               ...(banner.data.description
//                 ? [
//                     {
//                       tag: "p",
//                       classList: ["sub_title2", "fc_wht"],
//                       attributes: {
//                         style: `color: ${banner.data.descriptionColor}`,
//                       },
//                       textContent: banner.data.description,
//                     },
//                   ]
//                 : []),
//             ],
//           },
//         ],
//       },
//     ],
//   });
// };

// const injectSuggestions = async () => {
//   const pageName = `mobile147_${adcio.getMeta({
//     name: "path_role",
//   })}`;
//   const [placement] = await adcioInstance.fetchPlacements({ pageName });
//   if (!placement) {
//     return;
//   }

//   let customer = {};
//   try {
//     const { id, ...rest } = await adcio.clientApi.cafe24.getCustomer();
//     customer = { ...rest, customerId: id };
//   } catch (e) {
//     customer = {};
//   }

//   const { suggestions } = await adcioInstance.createSuggestion({
//     ...customer,
//     placementId: placement.id,
//   });

//   const elements = suggestions.map((suggestion) => {
//     const element = bannerToElement(suggestion.banner);
//     element.addEventListener("click", () =>
//       adcioInstance.onClick(suggestion.logOptions),
//     );
//     element.addEventListener("impression", () =>
//       adcioInstance.onImpression(suggestion.logOptions),
//     );
//     adcioInstance.observeImpression({
//       element,
//       filter: (e) => e.classList.contains("swiper-slide-active"),
//     });
//     return element;
//   });

//   await adcio.waitForElement(".df-bannermanager-main-visual-mo > ul > li > a");

//   const wrapper = document.querySelector(
//     ".df-bannermanager-main-visual-mo > ul",
//   );
//   elements.forEach((e) => wrapper.appendChild(e));
// };

// adcio.waitForDOM().then(() => {
//   injectSuggestions();
//   adcioInstance.collectLogs(adcio.clientApi.cafe24);
// });
