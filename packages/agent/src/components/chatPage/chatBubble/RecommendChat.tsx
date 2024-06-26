import { Product } from "@adcio.js/api/controller/v1";
import { TalkResponseMessage } from "@adcio.js/api/messenger/v1";
import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import { AgentChatBubble } from "./agentChatBubble";
import { ProductListSwiper } from "../productListSwiper";

interface Props {
  message: TalkResponseMessage;
  onExplainProduct: (productId: Product) => void;
}

export const RecommendChat = ({ message, onExplainProduct }: Props) => {
  const { t } = useTranslation();
  if (
    !message.chat_dialogue_products ||
    message.chat_dialogue_products.length === 0
  ) {
    return message.done ? (
      <AgentChatBubble loading={false}>
        {t("error.NO_PRODUCT_RECOMMENDED")}
      </AgentChatBubble>
    ) : (
      <AgentChatBubble loading={false} />
    );
  }

  return (
    <RecommendChatContainer>
      {message.content && (
        <AgentChatBubble loading={false}>{message.content}</AgentChatBubble>
      )}
      <ProductListSwiper
        dialogueProducts={message.chat_dialogue_products}
        onExplain={onExplainProduct}
      />
    </RecommendChatContainer>
  );
};

const RecommendChatContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 7px;
`;
