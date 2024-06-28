import { B1, Spinner, fontStyle } from "@corca-ai/design-system";
import styled from "@emotion/styled";
import { ChatList } from "./chatList";
import { ChatContentsContainer } from "./style";
import { ChatHistoryProps } from "./type";
import { FlexBox } from "../../../styles/layout";

export function ChatHistoryContents({ chatList }: ChatHistoryProps) {
  const { data, isLoading } = chatList;
  const isDataEmpty = !data?.pages.length;

  if (isLoading) {
    return (
      <ChatContentsContainer justify="center">
        <Spinner size="l" />
      </ChatContentsContainer>
    );
  }

  if (isDataEmpty) {
    return (
      <ChatContentsContainer>
        <ChatCountContainer>
          <B1>지난 대화 (0)</B1>
        </ChatCountContainer>
        <FlexBox justify="center">
          <EmptyChat>
            {`앗! 지난 대화가 없어요\n 새로운 대화를 시작해보세요 :)`}
          </EmptyChat>
        </FlexBox>
      </ChatContentsContainer>
    );
  }

  return <ChatList chatList={chatList} />;
}

const ChatCountContainer = styled.div`
  display: flex;
  padding: 0px 6px;
  width: 100%;
`;

/**
 * @description
 * The style is the same as cds H1, but it is a separately defined style for applying white-space style.
 */
const EmptyChat = styled.h1`
  font-size: ${fontStyle.h2.fontSize}px;
  font-weight: ${fontStyle.h2.fontWeight};
  text-align: center;
  line-height: normal;
  white-space: pre-line;
`;
