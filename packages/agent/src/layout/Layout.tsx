import { Box, createStyles } from "@mantine/core";
import { Transition } from "@mantine/core";

import { AgentPath } from "../types/route.types";
import { useAgentSettingState } from "../context/AgentSettingContext";

interface Props {
  path: AgentPath;
  children: React.ReactNode;
  animation: {
    duration: number;
    mounted: boolean;
  };
}

const useStyles = ({
  isEntryPage,
  mounted,
  marginBottom,
}: {
  isEntryPage: boolean;
  mounted: boolean;
  marginBottom: string;
}) =>
  createStyles((theme) => ({
    wrapper: {
      position: "relative",
      zIndex: !isEntryPage ? 100_000_000 : 1_000_000,
      fontFamily: "Pretendard",
      padding: "24px",
      marginBottom: isEntryPage ? marginBottom : 0,
      [theme.fn.smallerThan("sm")]: {
        padding: isEntryPage && mounted ? "10px" : 0,
        paddingTop: "10px",
      },
    },
  }));

const fade = {
  in: { opacity: 1 },
  out: { opacity: 0.3 },
  transitionProperty: "opacity",
};

export function Layout({ children, animation, path }: Props) {
  const { agentProfile } = useAgentSettingState();
  const { classes } = useStyles({
    isEntryPage: path === AgentPath.Entry,
    mounted: animation.mounted,
    marginBottom: (agentProfile.bottomMargin || 0) + "px",
  })();

  return (
    <Box className={classes.wrapper}>
      <Transition
        mounted={animation.mounted}
        transition={fade}
        duration={animation.duration}
        timingFunction="ease"
      >
        {(styles) => <div style={styles}>{children}</div>}
      </Transition>
    </Box>
  );
}
