import createCache from "@emotion/cache";
import {
  EmotionCache,
  CacheProvider as EmotionCacheProvider,
} from "@emotion/react";
import { useState } from "react";
import { QueryClientProvider } from "react-query";
import { AgentSettingProvider } from "./context/AgentSettingContext";
import { queryClient } from "./hook/query/config";
import MantineCustomProvider from "./mantine/MantineCustomProvider";
import Route from "./router/Router";
import { PathState } from "./router/route";
import { App } from "./types/setting.types";
import "./i18n";

interface AdcioAgentProps extends App {
  emotionRoot: HTMLDivElement;
  onRoute?: (route: PathState) => void;
}

export function AdcioAgent({
  emotionRoot,
  onRoute,
  ...config
}: AdcioAgentProps) {
  const [emotionCache, setEmotionCache] = useState<null | EmotionCache>(null);
  function setEmotionStyles(ref: HTMLDivElement | null) {
    if (ref && !emotionCache) {
      const createdEmotionWithRef = createCache({
        key: "emotion-shadow-dom",
        container: ref,
      });
      setEmotionCache(createdEmotionWithRef);
    }
  }

  return (
    <AgentSettingProvider {...config}>
      <div ref={setEmotionStyles} />
      <link
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        rel="stylesheet"
      />
      <QueryClientProvider client={queryClient}>
        {emotionCache && (
          <MantineCustomProvider emotionRoot={emotionRoot}>
            {/* 
              @description: apply emotion cache for styling shadow dom
              link: https://github.com/emotion-js/emotion/issues/1366
             */}
            <EmotionCacheProvider value={emotionCache}>
              <Route onRoute={onRoute} />
            </EmotionCacheProvider>
          </MantineCustomProvider>
        )}
      </QueryClientProvider>
    </AgentSettingProvider>
  );
}

export type { AdcioAgentProps };
