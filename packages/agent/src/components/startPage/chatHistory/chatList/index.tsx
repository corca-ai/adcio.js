import { B1, Spinner } from "@corca-ai/design-system";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Chat } from "./Chat";
import { FlexBox } from "../../../../styles/layout";
import {
  BaseScrollContentsWrapper,
  Scrollbar,
} from "../../../../styles/scrollbar";
import { ChatContentsContainer } from "../style";
import { ChatHistoryProps } from "../type";

export function ChatList({ chatList }: ChatHistoryProps) {
  const { ref, inView } = useInView();

  const { data, fetchNextPage, hasNextPage, onChatItemClick } = chatList;
  const totalPageCount = data.pages.length;

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <ContentsWrapper>
      <ChatContentsContainer>
        <Container direction="column" align="flex-start">
          <ChatCountContainer>
            <B1>지난 대화 ({totalPageCount})</B1>
          </ChatCountContainer>
          <ChatListWrapper direction="column" align="flex-start" width="100%">
            {data.pages.map((chatInfo) => (
              <Chat
                key={chatInfo.id}
                chatInfo={chatInfo}
                onChatItemClick={onChatItemClick}
              />
            ))}
            {hasNextPage && (
              <FlexBox ref={ref} height="auto" align="center" justify="center">
                <Spinner size="s" />
              </FlexBox>
            )}
          </ChatListWrapper>
          <Scrollbar />
        </Container>
      </ChatContentsContainer>
    </ContentsWrapper>
  );
}

const Container = styled(FlexBox)`
  gap: 10px;
`;

const ChatListWrapper = styled(BaseScrollContentsWrapper)`
  gap: 10px;
`;

const ChatCountContainer = styled.div`
  display: flex;
  padding: 0px 6px;
  width: 100%;
`;

const ContentsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 80%;
  flex: 1 0 0px;
  align-self: stretch;
  position: relative;
`;
