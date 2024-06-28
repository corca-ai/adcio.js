import { ChatApi } from "@adcio.js/api/controller/v1";
import { Configuration } from "@adcio.js/api/messenger/v1";
import { Adcio } from "@adcio.js/core";
import { createRoot } from "react-dom/client";
import { AdcioAgent } from "./app";
import { AgentPath } from "./types/route.types";
import { AppType } from "./types/setting.types";

interface App {
  adcioInstance: Adcio;
  platform?: AppType;
}

export function renderAgent({ adcioInstance, platform }: App) {
  if (typeof document === "undefined") {
    // TODO : 서버사이드 렌더링 지원
    return;
  }
  const element = document.createElement("div");
  element.style.setProperty("position", "fixed", "important");
  element.style.setProperty("hidden", "hidden", "important");
  element.style.setProperty("bottom", "0", "important");
  element.style.setProperty("right", "0", "important");

  const shadowRoot = element.attachShadow({ mode: "open" });
  const mountPoint = document.createElement("div");
  const emotionRoot = document.createElement("div");

  // TODO: shadow dom에 style inject하지 않고, style file을 적용하는 방법 찾기
  const sheet = new CSSStyleSheet();
  sheet.replaceSync(`
    @import url('https://cdn.jsdelivr.net/npm/@fontsource/noto-sans-display@5.0.19/index.min.css');
    @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
    @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css');
    @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css');

    body,
    input,
    pre,
    textarea,
    button {
      margin: 0;
      font-family: 'Pretendard Variable', Pretendard, -apple-system,
        BlinkMacSystemFont, system-ui, Roboto, 'Noto Sans KR', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      color: #525252;
    }
    * {
      margin: 0;
      padding: 0;
      border: 0;
      outline: none;
      box-sizing: border-box;
      text-decoration: none;
      scrollbar-width: none; /* Firefox 스크롤 제거 */
      -ms-overflow-style: none; /* IE, Edge 스크롤 제거 */
    }

    /* 웹킷 기반 브라우저 스크롤 제거 */
    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
  `);
  shadowRoot.adoptedStyleSheets = [sheet];

  shadowRoot.appendChild(mountPoint);
  shadowRoot.appendChild(emotionRoot);

  document.body.appendChild(element);

  const clientId = adcioInstance.getClientId();
  new ChatApi(
    new Configuration({
      basePath: adcioInstance.getConfig().apiEndpoint,
    }),
  )
    .chatControllerFetchChatProfile(clientId)
    .then((res) => {
      const agentProfile = res.data;
      const root = createRoot(mountPoint);
      root.render(
        <AdcioAgent
          emotionRoot={emotionRoot}
          onRoute={(route) => {
            if (route.path === AgentPath.Entry) {
              element.style.setProperty("z-index", `${1_000_000}`, "important");
            } else {
              element.style.setProperty(
                "z-index",
                `${100_000_000}`,
                "important",
              );
            }
          }}
          clientId={clientId}
          deviceId={adcioInstance.getDeviceId()}
          customerId={adcioInstance.getCustomerId()}
          agentProfile={agentProfile}
          messengerEndpoint={adcioInstance.getConfig().messengerEndpoint}
          apiEndpoint={adcioInstance.getConfig().apiEndpoint}
          platform={platform}
        />,
      );
    })
    .catch((err) => {
      console.error(err);
    });
}

export type { App };
