import { Icon, IconButton } from "@corca-ai/design-system";
import styled from "@emotion/styled";
import { useState } from "react";
import { FlexBox, FlexProps } from "../../../styles/layout";
import { BottomSheet } from "./BottomSheet";

interface Props extends FlexProps {
  onBack: () => void;
  onClose: () => void;
  onMenu: { toStart: () => void; newChat: () => void };
  showClose: boolean;
}

const ICON_SIZE = 18;

export function ChatTop({ onBack, onClose, onMenu, showClose }: Props) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  return (
    <Container>
      <IconButton onClick={onBack}>
        <Icon.ChevronLeftSmall size={ICON_SIZE} />
      </IconButton>
      <FlexBox justify="flex-end">
        <DropboxContainer>
          <IconButton onClick={() => setIsBottomSheetOpen(true)}>
            <Icon.DotsVert size={ICON_SIZE} />
          </IconButton>
        </DropboxContainer>
        {showClose && (
          <IconButton onClick={onClose}>
            <Icon.CancelSmall size={ICON_SIZE} />
          </IconButton>
        )}
      </FlexBox>
      {isBottomSheetOpen && (
        <BottomSheet
          onMenu={onMenu}
          onCloseBottomSheet={() => setIsBottomSheetOpen(false)}
        />
      )}
    </Container>
  );
}

const Container = styled(FlexBox)`
  width: 100%;
  display: flex;
  height: 50px;
  padding: 0px 10px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
`;

const DropboxContainer = styled.div`
  position: relative;
`;
