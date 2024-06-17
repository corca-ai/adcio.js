import { Icon } from "@corca-ai/design-system";
import { ActionIcon, Flex, FlexProps } from "@mantine/core";

interface Props extends FlexProps {
  showClose: boolean;
  onClose: () => void;
}

export function StartTop({ showClose, onClose, ...props }: Props) {
  return (
    <Flex align="center" justify="flex-end" {...props}>
      {showClose && (
        <ActionIcon>
          <Icon.Dot size="15" onClick={onClose} />
        </ActionIcon>
      )}
    </Flex>
  );
}
