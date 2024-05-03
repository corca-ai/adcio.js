import { getCssSelector } from "@adcio/lib/selectors";
import { waitForDOM } from "@adcio/lib/utils";
import { renderers } from "@adcio/widget";

waitForDOM().then(() => {
  const selector = getCssSelector(document.querySelector("#mainBest")!);
  const element = new renderers.SimpleGridRenderer().render({
    suggestions: [
      {
        product: {
          name: "[고른] 춘천식 메밀막국수 밀키트 2인분, 2종",
          summary: "물막 vs 비막 취향에 맞게",
          image:
            "https://thumbnail.wingeat.com/item/main/e68dd7a6ddbf4368b09254c74708cf8e-w600-v2.jpg",
          url: "/item/goreunmakguksu",
          price: 12900,
          discountPrice: 9900,
        },
        logOptions: {
          requestId: "123",
          adsetId: "123",
        },
      },
      {
        product: {
          name: "[고른] 얼큰 우삼겹 한우대창전골 2인분",
          summary: "근사한 홈이자카야 전골 요리",
          image:
            "https://thumbnail.wingeat.com/item/main/97582c27930348819a5f66c6444fce85-w600-v2.jpg",
          url: "/item/beefdaechanghotpot",
          price: 18900,
          discountPrice: 15980,
        },
        logOptions: {
          requestId: "123",
          adsetId: "123",
        },
      },
      {
        product: {
          name: "[고른] 프리미엄 양념 LA갈비 750g, 1.5kg",
          summary: "손수 지방을 제거해 깔끔한",
          image:
            "https://thumbnail.wingeat.com/item/main/358105cbbaa9428b91c57c06031f5614-w600-v2.jpg",
          url: "/item/goreunlagalbi",
          price: 32900,
          discountPrice: 25800,
        },
        logOptions: {
          requestId: "123",
          adsetId: "123",
        },
      },
      {
        product: {
          name: "[랠리] 곤약김밥 10종",
          summary: "한 줄로 끝내는 식단관리",
          image:
            "https://thumbnail.wingeat.com/item/main/b4c786338bfe4069aa3cea47b780ae62-w600-v2.jpg",
          url: "/item/rallykimbap",
          price: 5500,
          discountPrice: 4980,
        },
        logOptions: {
          requestId: "123",
          adsetId: "123",
        },
      },
    ],
  });
  const shadowParent = document.createElement("div");
  const shadowRoot = shadowParent.attachShadow({ mode: "open" });
  shadowRoot.appendChild(element);
  const below = document.querySelector(selector)!;
  const parent = below.parentElement!;
  parent.insertBefore(shadowParent, below);
});
