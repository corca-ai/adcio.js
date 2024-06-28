import styled from "@emotion/styled";
import { ChatHistoryContents } from "./ChatHistoryContents";
import { ChatHistoryProps } from "./type";
import { FlexBox } from "../../../styles/layout";

// TODO: 추후 해당 UI를 container로 이동
export function ChatHistory({ chatList }: ChatHistoryProps) {
  return (
    <Container height="80%" direction="column">
      <Contents direction="column" align="center" justify="flex-start">
        <ChatHistoryContents chatList={chatList} />
      </Contents>
    </Container>
  );
}

const Container = styled(FlexBox)`
  height: 80%;
  max-height: 567px;
`;

const Contents = styled(FlexBox)`
  flex: 1 0 0;
  align-self: stretch;
  position: relative;

  &:hover {
    .scrollbar {
      opacity: 0;
      -webkit-transition: all 0.2s;
    }
  }
`;
