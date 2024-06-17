import { IconX } from '@tabler/icons-react';

import { ActionIcon, Flex, FlexProps, createStyles } from '@mantine/core';

interface Props extends FlexProps {
  showClose: boolean;
  onClose: () => void;
}

const useStyles = createStyles((theme) => ({
  button: {
    stroke: theme.colors.gray[1],
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

export function StartTop({ showClose, onClose, ...props }: Props) {
  const { classes } = useStyles();
  return (
    <Flex align="center" justify="flex-end" {...props}>
      {showClose && (
        <ActionIcon>
          <IconX size="15" className={classes.button} onClick={onClose} />
        </ActionIcon>
      )}
    </Flex>
  );
}
