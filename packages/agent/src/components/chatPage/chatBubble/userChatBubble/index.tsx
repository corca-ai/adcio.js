import { B3, color } from "@corca-ai/design-system";
import styled from "@emotion/styled";
import { PropsWithChildren } from "react";
import { BaseChatBubbleContents } from "../../style";

export function UserChatBubble({ children }: PropsWithChildren) {
  return (
    <Container>
      <Contents>
        <B3 c="white">{children}</B3>
      </Contents>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: right;
  align-items: flex-end;
  gap: 10px;
`;

const Contents = styled(BaseChatBubbleContents)`
  background: ${color["main-black"]};
  color: ${color.white};
`;
