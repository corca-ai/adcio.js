import { Fragment } from "react";

import { Product } from "@adcio/api/controller/v1";
import {
  ChatRole,
  ChatType,
  TalkResponseMessage,
} from "@adcio/api/messenger/v1";

import { RecommendChat } from "./RecommendChat";
import { SearchItemInfoChat } from "./SearchItemInfoChat";
import { AgentChatBubble } from "./agentChatBubble";
import { UserChatBubble } from "./userChatBubble";

interface Props {
  id: string;
  message: TalkResponseMessage;
  onExplainProduct: (product: Product) => void;
  onClickQuestion: (value: string) => void;
  showQuestions: boolean;
}

export function ChatBubble({
  id,
  message,
  onExplainProduct,
  onClickQuestion,
  showQuestions,
}: Props) {
  if (!message.done && !message.chat_dialogue_products) {
    return <Fragment key={id}>{message.content}</Fragment>;
  }

  if (message.role === ChatRole.User) {
    return <UserChatBubble key={id}>{message.content}</UserChatBubble>;
  }

  switch (message.type) {
    case ChatType.Recommend:
      return (
        <RecommendChat message={message} onExplainProduct={onExplainProduct} />
      );
    case ChatType.SearchItemInfo:
      return <SearchItemInfoChat message={message} />;
    case ChatType.Error:
      return (
        <AgentChatBubble key={id} loading={!message.content}>
          {`error.${message.content}`}
        </AgentChatBubble>
      );
    default:
      return (
        <AgentChatBubble
          key={id}
          loading={!message.content}
          chip={
            message.questions && {
              questions: message.questions,
              sendChat: onClickQuestion,
              showQuestions,
            }
          }
        >
          {message.content}
        </AgentChatBubble>
      );
  }
}
