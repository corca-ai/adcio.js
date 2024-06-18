import { IconX } from "@tabler/icons-react";
import { useCallback, useState } from "react";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { getKoreanWordSegment } from "../utils/entry";

import {
  ActionIcon,
  Flex,
  createStyles,
  keyframes,
  useMantineTheme,
} from "@mantine/core";

import { B1, B2 } from "@corca-ai/design-system";
import { Page } from "../router/route";
import { useAgentSettingState } from "../context/AgentSettingContext";
import { EntryContainer } from "../layout/container/EntryContainer";
import { ChatIcon } from "../components/icon/ChatIcon";
import { AgentPath } from "../types/route.types";

const show = keyframes({
  // TODO: need to animation
});

const hide = keyframes({
  from: { width: "320px" },
  to: { width: "0px" },
});

const useStyles = createStyles((theme) => ({
  wrapper: {
    padding: theme.spacing.sm,
    [theme.fn.smallerThan("sm")]: {
      padding: theme.spacing.xs,
    },
    cursor: "pointer",
  },
  show: {
    animation: `${show} 0.5s ease forwards`,
  },
  hide: {
    animation: `${hide} 0.3s ease forwards`,
  },
}));

export default function Index({ routeTo }: Page) {
  const { t, i18n } = useTranslation();
  const { classes } = useStyles();
  const { colors, breakpoints } = useMantineTheme();
  const [activate, setActivate] = useState(false);
  const [sizingAnimation, setSizingAnimation] = useState(false);
  const { agentProfile } = useAgentSettingState();
  const [display, setDisplay] = useState(true);

  const routeToStart = useCallback(() => {
    setDisplay(false);
    routeTo({ path: AgentPath.Start });
  }, []);

  return (
    <>
      {display && (
        <EntryContainer>
          <Flex gap="xs" className={classes.wrapper}>
            <ChatIcon
              size={window.innerWidth < breakpoints.sm ? 14 : 50}
              onClick={() => {
                if (window.innerWidth < breakpoints.sm || activate) {
                  routeToStart();
                }
                setSizingAnimation(true);
                setActivate(true);
              }}
            />
            {!isMobile && activate && (
              <Flex className={sizingAnimation ? classes.show : classes.hide}>
                <Flex
                  direction="column"
                  justify="space-evenly"
                  onClick={routeToStart}
                >
                  {/* TODO: need to translate by API data  */}
                  <B1>
                    {t("entry.title", {
                      name:
                        i18n.language === "ko"
                          ? getKoreanWordSegment(agentProfile.name)
                          : agentProfile.name,
                    })}
                  </B1>
                  <B2 c="grey-60">{t("entry.subtitle")}</B2>
                </Flex>
                <ActionIcon
                  onClick={() => {
                    setSizingAnimation(false);
                    setTimeout(() => setActivate(false), 300);
                  }}
                >
                  <IconX color={colors.gray[2]} stroke="3" size="15" />
                </ActionIcon>
              </Flex>
            )}
          </Flex>
        </EntryContainer>
      )}
    </>
  );
}
