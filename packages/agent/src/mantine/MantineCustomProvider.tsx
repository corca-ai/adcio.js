import {
  EmotionCache,
  MantineProvider,
  createEmotionCache,
} from "@mantine/core";

import { useAgentSettingState } from "../context/AgentSettingContext";
import { AGENT_THEME_COLOR } from "../constant/styles";

export default function MantineCustomProvider({
  children,
  emotionRoot,
  nextCache,
}: {
  children: React.ReactNode;
  emotionRoot?: HTMLDivElement;
  nextCache?: EmotionCache;
}) {
  const cache =
    nextCache ||
    createEmotionCache({
      key: "adcio-brand-chat",
      container: emotionRoot,
    });
  const { agentProfile } = useAgentSettingState();
  const { shadeColor, tintColor } = agentProfile.theme
    ? AGENT_THEME_COLOR[agentProfile.theme]
    : AGENT_THEME_COLOR["lovely"];

  return (
    <MantineProvider
      emotionCache={cache}
      theme={{
        components: {
          Portal: {
            defaultProps: { target: emotionRoot },
          },
        },
        colors: {
          main: [shadeColor, tintColor],
          gray: ["#EFEFEF", "#D9D9D9", "#525252"],
          green: ["#20E100"],
          red: ["#FF1F00"],
          textBlack: ["#323232"],
          textGray: ["#ACACAC"],
        },
        fontSizes: {
          xs: 12,
          sm: 14,
          md: 16,
          lg: 18,
          xl: 20,
        },
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      {children}
    </MantineProvider>
  );
}
