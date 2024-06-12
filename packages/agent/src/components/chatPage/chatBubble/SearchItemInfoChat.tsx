import styled from "@emotion/styled";

import { TalkResponseMessage } from "@adcio.js/api/messenger/v1.0";

import { AgentChatBubble } from "./agentChatBubble";

interface Props {
  message: TalkResponseMessage;
}

export const SearchItemInfoChat = ({ message }: Props) => {
  return (
    <SearchItemInfoChatContainer>
      {message.content && (
        <AgentChatBubble loading={false}>{message.content}</AgentChatBubble>
      )}
    </SearchItemInfoChatContainer>
  );
};

const SearchItemInfoChatContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 7px;
`;
