import { useCallback, useRef, useState } from "react";

import { Spinner } from "@corca-ai/design-system";
import styled from "@emotion/styled";

import { Product } from "@lib/api/controller/v1.0";
import {
  ChatRole,
  ChatType,
  TalkResponseMessage,
} from "@adcio.js/api/messenger/v1.0";

import { ChatInput } from "../components/chatPage/ChatInput";
import { ChatList } from "../components/chatPage/ChatList";
import { ChatTop } from "../components/chatPage/ChatTop";
import { CHAT } from "../constant/styles";
import { useAgentSettingState } from "../context/AgentSettingContext";
import {
  useChat,
  useExplainProduct,
  useFetchChatDialogue,
} from "../hook/query/messenger";
import { useChatDialogue } from "../hook/useChatDialogue";
import { FlexBox, PageSection } from "../styles/layout";
import { BaseScrollContentsWrapper } from "../styles/scrollbar";
import { ChatState } from "../types/chat.types";
import { AppType } from "../types/setting.types";
import { getNewChatGroupPath } from "../utils/route";

interface Props {
  appType: AppType;
  routeTo: (url: string) => void | Promise<boolean>;
  id: string;
  clientId: string;
  keyboardFocus?: boolean;
  setDisplay?: (show: boolean) => void;
  appbar?: boolean;
}

const stringToTalkMessage = (
  content: string,
  groupId: string,
  role: ChatRole,
): TalkResponseMessage => ({
  type: ChatType.Chat,
  role,
  key: Math.round(Math.random() * 1000000).toString(),
  group_id: groupId,
  done: true,
  content,
});

export default function Index({
  appType,
  routeTo,
  id,
  clientId,
  keyboardFocus,
  setDisplay,
  appbar = true,
}: Props) {
  const { messengerConfig, deviceId, customerId } = useAgentSettingState();
  const { chatDialogue, init, append } = useChatDialogue({
    groupId: id,
    appType,
  });
  const [chatState, setChatState] = useState<ChatState>(
    id ? "history" : "chatting",
  );

  const [disabled, setDisabled] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const handleScrollToBottom = () => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const { isLoading } = useFetchChatDialogue(
    { clientId, groupId: id, deviceId, customerId },
    messengerConfig,
    {
      onSuccess: (data) => {
        setChatState("chatting");
        init(data);
      },
    },
  );

  const { mutateAsync: chat } = useChat(messengerConfig);
  const { mutateAsync: explainProduct } = useExplainProduct(messengerConfig);

  const handleStreamResponse = useCallback(
    async (response: ReadableStream<Uint8Array>) => {
      const reader = response.getReader();

      let done: boolean;
      let value: Uint8Array;
      while (!done) {
        ({ value, done } = await reader.read());
        if (!value) {
          break;
        }
        const decoded = new TextDecoder().decode(value).trim().split(/\n/);
        decoded
          .map((v) => JSON.parse(v))
          .flat()
          .forEach((chunk) => append(chunk));
      }
    },
    [append],
  );

  const onSend = useCallback(
    async (content: string) => {
      setDisabled(true);

      try {
        append(stringToTalkMessage(content, id, ChatRole.User));
        const response = await chat({
          clientId,
          groupId: id,
          deviceId,
          customerId,
          content,
        });
        await handleStreamResponse(response);
      } finally {
        setDisabled(false);
        handleScrollToBottom();
      }
    },
    [append, chat],
  );

  const onExplainProduct = useCallback(async (product: Product) => {
    setDisabled(true);
    try {
      const content = `"${product.name}"에 대해 더 자세히 설명해주세요.`;
      append(stringToTalkMessage(content, id, ChatRole.User));
      const response = await explainProduct({
        clientId,
        groupId: id,
        deviceId,
        customerId,
        productId: product.id,
        content,
      });
      await handleStreamResponse(response);
    } finally {
      setDisabled(false);
    }
  }, []);

  const onMenu = {
    toStart: () => {
      routeTo("start");
    },
    newChat: () => {
      routeTo(getNewChatGroupPath()); // new group_id chat
    },
  };

  return (
    <Container direction="column">
      {appbar && (
        <ChatTop
          showClose={appType === "WebPackage"}
          onBack={() => {
            routeTo("start");
          }}
          onClose={() => {
            setDisplay(false);
            routeTo("entry");
          }}
          onMenu={onMenu}
          {...{ pos: appType === "WebPackage" ? "sticky" : "fixed" }}
        />
      )}
      <ChatContentsWrapper>
        {isLoading ? (
          <FlexBox align="center" justify="center">
            <Spinner size="l" />
          </FlexBox>
        ) : (
          <ChatList
            chatDialogue={chatDialogue ? chatDialogue : []}
            onClickQuestion={onSend}
            onExplainProduct={onExplainProduct}
            ref={scrollRef}
            {...{
              mt: appType === "WebPackage" || !appbar ? 0 : CHAT.TOP_HEIGHT,
            }}
          />
        )}
      </ChatContentsWrapper>
      <ChatInputWrapper>
        <ChatInput
          onSend={onSend}
          disabled={disabled}
          keyboardFocus={keyboardFocus}
        />
      </ChatInputWrapper>
    </Container>
  );
}

const Container = styled(PageSection)``;

const ChatContentsWrapper = styled(BaseScrollContentsWrapper)``;

const ChatInputWrapper = styled.div`
  width: 100%;
  padding: 0 14px 14px;
`;
