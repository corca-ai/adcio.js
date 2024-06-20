import { B1, Icon, IconButton, color } from "@corca-ai/design-system";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { Box, FlexBox } from "../../../styles/layout";

interface Props {
  onMenu: { toStart: () => void; newChat: () => void };
  onCloseBottomSheet: () => void;
}

export function BottomSheet({ onMenu, onCloseBottomSheet }: Props) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onCloseBottomSheet();
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
    <Overlay ref={dropdownRef}>
      <BottomSheetContainer>
        <FlexBox justify="flex-end">
          <IconButton onClick={onCloseBottomSheet}>
            <Icon.CancelLarge size={24} color={color["grey-60"]} />
          </IconButton>
        </FlexBox>
        {menuList.map((menu) => (
          <BottomSheetOption
            key={menu.label}
            onMouseDown={(event) => event.stopPropagation()}
            onClick={() => {
              onCloseBottomSheet();
              menu.onClick();
            }}
          >
            <B1>{menu.label}</B1>
          </BottomSheetOption>
        ))}
      </BottomSheetContainer>
    </Overlay>
  );
}

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

const BottomSheetContainer = styled(Box)`
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
