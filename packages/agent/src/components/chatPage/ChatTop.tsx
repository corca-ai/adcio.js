import { B1, Icon, IconButton, color } from "@corca-ai/design-system";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import { Box, FlexBox, FlexProps } from "../../styles/layout";

interface Props extends FlexProps {
  onBack: () => void;
  onClose: () => void;
  onMenu: { toStart: () => void; newChat: () => void };
  showClose: boolean;
}

const ICON_SIZE = 18;

export function ChatTop({ onBack, onClose, onMenu, showClose }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuList = [
    { label: "처음으로", onClick: onMenu.toStart },
    { label: "새로운 대화 시작하기", onClick: onMenu.newChat },
  ];

  return (
    <Container>
      <IconButton onClick={onBack}>
        <Icon.ChevronLeftSmall size={ICON_SIZE} />
      </IconButton>
      <FlexBox justify="flex-end">
        <DropboxContainer>
          <IconButton onClick={() => setIsMenuOpen(true)}>
            <Icon.DotsVert size={ICON_SIZE} />
          </IconButton>
        </DropboxContainer>
        {showClose && (
          <IconButton onClick={onClose}>
            <Icon.CancelSmall size={ICON_SIZE} />
          </IconButton>
        )}
      </FlexBox>
      {isMenuOpen && (
        <Overlay ref={dropdownRef}>
          <BottomSheet>
            <FlexBox justify="flex-end">
              <IconButton onClick={() => setIsMenuOpen(false)}>
                <Icon.CancelLarge size={24} color={color["grey-60"]} />
              </IconButton>
            </FlexBox>
            {menuList.map((menu) => (
              <BottomSheetOption
                key={menu.label}
                onClick={() => {
                  setIsMenuOpen(false);
                  menu.onClick();
                }}
                onMouseDown={(event) => event.stopPropagation()}
              >
                <B1>{menu.label}</B1>
              </BottomSheetOption>
            ))}
          </BottomSheet>
        </Overlay>
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

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const BottomSheet = styled(Box)`
  background: ${color.white};
  height: auto;
  padding: 10px 0px;
  border-radius: 20px;
  padding: 20px;
  animation: ${slideUp} 0.1s ease-out;
  box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.1);
  gap: 4px;
`;

const BottomSheetOption = styled.div`
  padding: 10px 0;
  cursor: pointer;
`;
