import { forwardRef, useEffect } from "react";

import styled from "@emotion/styled";

import { Product } from "@adcio.js/api/controller/v1";
import { TalkResponseMessage } from "@adcio.js/api/messenger/v1";

import { FlexBox } from "../../styles/layout";
import { BaseScrollContentsWrapper, Scrollbar } from "../../styles/scrollbar";
import { ChatBubble } from "./chatBubble";

interface Props {
  chatDialogue: TalkResponseMessage[];
  onClickQuestion: (value: string) => void;
  onExplainProduct: (product: Product) => void;
}

export const ChatList = forwardRef<HTMLDivElement, Props>(
  ({ chatDialogue, onClickQuestion, onExplainProduct }, ref) => {
    const lastOutputId = chatDialogue[chatDialogue.length - 1]?.key ?? "";

    useEffect(() => {
      if (ref && typeof ref !== "function") {
        ref.current!.scrollIntoView({
          behavior: "auto",
        });
      }
    }, [lastOutputId]);

    return (
      <Container>
        <ContentsWrapper direction="column">
          {chatDialogue.map((message, index) => {
            const id = `${message.key}-${index}`;
            return (
              <ChatBubble
                key={id}
                id={id}
                message={message}
                onExplainProduct={onExplainProduct}
                onClickQuestion={onClickQuestion}
                showQuestions={
                  chatDialogue.length === 1 && chatDialogue.length - 1 === index
                }
              />
            );
          })}
          <div ref={ref} />
          <Scrollbar />
        </ContentsWrapper>
      </Container>
    );
  },
);

const Container = styled(BaseScrollContentsWrapper)`
  padding: 20px 0 0;
`;

const ContentsWrapper = styled(FlexBox)`
  gap: 18px;
  padding: 0 30px;
  overflow-y: auto;
`;
