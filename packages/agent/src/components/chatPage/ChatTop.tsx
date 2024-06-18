import { useEffect, useRef, useState } from 'react';

import { FlexProps } from '@mantine/core';

import { B3, Icon, IconButton, color } from '@corca-ai/design-system';
import styled from '@emotion/styled';

import { FlexBox } from '../../styles/layout';

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

  // TODO: Replace relevant code when implementing dropbox component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuList = [
    { label: '처음으로', onClick: onMenu.toStart },
    { label: '새로운 대화 시작하기', onClick: onMenu.newChat },
  ];

  return (
    <Container>
      <IconButton onClick={onBack}>
        <Icon.ChevronLeftSmall size={ICON_SIZE} />
      </IconButton>
      <FlexBox justify="flex-end">
        <DropboxContainer>
          <IconButton onClick={toggleMenu}>
            <Icon.DotsVert size={ICON_SIZE} />
          </IconButton>
          {isMenuOpen && (
            <Dropbox ref={dropdownRef}>
              {menuList.map((menu) => (
                <DropboxItem
                  type="button"
                  onClick={menu.onClick}
                  onMouseDown={(event) => event.stopPropagation()}
                >
                  <B3>{menu.label}</B3>
                </DropboxItem>
              ))}
            </Dropbox>
          )}
        </DropboxContainer>
        {showClose && (
          <IconButton onClick={onClose}>
            <Icon.CancelSmall size={ICON_SIZE} />
          </IconButton>
        )}
      </FlexBox>
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

const Dropbox = styled.div`
  position: absolute;
  z-index: 100;
  right: 10px;
  top: 50px;
  display: flex;
  width: 240px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-radius: 8px;
  background-color: ${color.white};
  box-shadow: 0px 2px 5px 0px rgba(70, 70, 70, 0.2),
    0px 0px 1px 0px rgba(132, 132, 132, 0.31);
`;

const DropboxItem = styled.button`
  display: flex;
  height: 32px;
  padding: 6px 8px;
  align-items: center;
  align-self: stretch;
  border-radius: 4px;
  background-color: ${color.white};
  border: none;
  cursor: pointer;
  vertical-align: middle;
  &:hover {
    background-color: ${color['grey-20']};
  }
`;
