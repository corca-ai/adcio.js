import { useTranslation } from "react-i18next";

import { B3, Text, color } from "@corca-ai/design-system";
import styled from "@emotion/styled";
import dayjs from "dayjs";

import { CustomerChatGroupDto } from "@adcio.js/api/controller/v1";
import { ChatType } from "@adcio.js/api/messenger/v1.0";

import { Box, FlexBox } from "../../../../styles/layout";
import { Profile } from "../../../icon/Profile";

interface Props {
  chatInfo: CustomerChatGroupDto;
  onChatItemClick: (chatId: string) => void;
}

export function Chat({ chatInfo, onChatItemClick }: Props) {
  const { t } = useTranslation();
  const createdAt = dayjs(chatInfo.createdAt)
    .locale("ko")
    .format("YY.MM.DD HH:mm");

  const refineContent = (message: CustomerChatGroupDto) => {
    switch (message.type) {
      case ChatType.Recommend:
        return message.content;
      // TODO return message.chatDialogueProducts && message.chatDialogueProducts.length > 0
      //   ? message.content
      //   : t(`error.NO_PRODUCT_RECOMMENDED`);
      case ChatType.Error:
        return t(`error.${message.content}`);
      default:
        return message.content;
    }
  };

  return (
    <ChatItem
      key={chatInfo.id}
      onClick={() => {
        onChatItemClick(chatInfo.id);
      }}
    >
      <ChatDataBox align="flex-start">
        <Box width="auto">
          <Profile size={42} />
        </Box>
        <ChatInfoBox align="flex-start" direction="column">
          <B3 c="grey-60">{createdAt}</B3>
          {/* @description: style is cds B2, but it is a separately defined style for applying ellipsis */}
          <Text
            size="s"
            fw="regular"
            c="main-black"
            style={{
              lineHeight: "19px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {refineContent(chatInfo)}
          </Text>
        </ChatInfoBox>
      </ChatDataBox>
    </ChatItem>
  );
}

const ChatItem = styled.li`
  display: flex;
  padding: 8px 6px;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  cursor: pointer;
  border-radius: 8px;

  &:hover {
    background-color: ${color["grey-20"]};
  }
`;

const ChatDataBox = styled(FlexBox)`
  gap: 10px;
  align-self: stretch;
`;

const ChatInfoBox = styled(FlexBox)`
  gap: 3px;
  flex: 1 0 0;
`;
