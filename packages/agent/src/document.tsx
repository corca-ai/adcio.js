import { createRoot } from "react-dom/client";
import { AdcioAgent } from "./app";
import { AgentPath } from "./types/route.types";
import { App } from "./types/setting.types";

export function renderAgent({ ...config }: App) {
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

  const root = createRoot(mountPoint);
  root.render(
    <AdcioAgent
      emotionRoot={emotionRoot}
      onRoute={(route) => {
        if (route.path === AgentPath.Entry) {
          element.style.setProperty("z-index", `${1_000_000}`, "important");
        } else {
          element.style.setProperty("z-index", `${100_000_000}`, "important");
        }
      }}
      {...config}
    />,
  );
}

export type { App };
