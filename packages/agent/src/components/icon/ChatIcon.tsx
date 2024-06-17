import { TablerIconsProps } from '@tabler/icons-react';

import { ActionIcon, createStyles, useMantineTheme } from '@mantine/core';

import { IconRobot } from './IconRobot';

const useStyles = createStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.colors.main[0],
    borderRadius: '100%',
    '&:hover': {
      backgroundColor: theme.colors.main[1],
      path: {
        fill: theme.colors.main[0],
      },
    },
  },
  icon: {
    color: theme.colors.main[1],
    transform: 'scaleX(-1)',
  },
}));

export function ChatIcon({
  icon: Icon = IconRobot,
  onClick,
  size = 14,
}: {
  icon?: React.FC<TablerIconsProps>;
  size?: number;
  activate?: boolean;
  onClick?: () => void;
}) {
  const { classes } = useStyles();
  const { colors } = useMantineTheme();

  return (
    <ActionIcon
      className={classes.wrapper}
      w={size + 5}
      h={size + 5}
      onClick={onClick}
    >
      <Icon
        width={size}
        height={size}
        className={classes.icon}
        color={colors.main[1]}
      />
    </ActionIcon>
  );
}
