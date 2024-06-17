import { useEffect, useRef } from 'react';
import { isIOS } from 'react-device-detect';
import TextareaAutosize from 'react-textarea-autosize';

import { Button, color, typography } from '@corca-ai/design-system';
import styled from '@emotion/styled';

import { FlexBox } from '../../styles/layout';

interface Props {
  onSend: (value: string) => void;
  disabled?: boolean;
  keyboardFocus?: boolean;
}

// TODO: Modify to block the input window when the input value is more than 200 characters.
export function ChatInput({ onSend, disabled = false, keyboardFocus }: Props) {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const send = (value: string) => {
    if (!isIOS) {
      inputRef.current.focus();
    }
    onSend(value);
    inputRef.current.value = '';
  };

  // mobile hide keyboard
  useEffect(() => {
    if (inputRef.current && keyboardFocus === false) {
      inputRef.current.blur();
    }
  }, [keyboardFocus]);

  return (
    <Container align="flex-end">
      <Textarea
        placeholder="메세지를 입력해주세요"
        ref={inputRef}
        onKeyDown={(event) => {
          const canSendMessage =
            event.key === 'Enter' &&
            !event.shiftKey &&
            event.nativeEvent.isComposing === false;

          if (canSendMessage) {
            event.preventDefault();
            if (!event.metaKey && !disabled) {
              send(inputRef.current.value);
            }
          }
        }}
      />
      <Button
        type="button"
        size="small"
        variant="filled"
        disabled={disabled}
        onClick={(event) => {
          event.preventDefault();
          send(inputRef.current.value);
        }}
      >
        전송
      </Button>
    </Container>
  );
}

const Container = styled(FlexBox)`
  gap: 20px;
  background-color: ${color.white};
  border-radius: 14px;
  padding: 8px 8px 8px 14px;
  box-shadow: 0px 0px 10px 0px ${color['grey-30']};
`;

const Textarea = styled(TextareaAutosize)`
  display: flex;
  vertical-align: middle;
  flex: 1;
  flex-shrink: 0;
  resize: none;
  font-size: ${typography.size.s}px;
  border: none;
  font-weight: ${typography.weight.regular};
  line-height: 19px;
  padding: 7.5px 0;
  max-height: 114px;
  scrollbar-width: none;

  &::placeholder {
    padding: none;
    font-style: normal;
    font-weight: ${typography.weight.regular};
    font-size: ${typography.size.xs}px;
    color: ${color['grey-50']};
    line-height: 19px;
  }
  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;
