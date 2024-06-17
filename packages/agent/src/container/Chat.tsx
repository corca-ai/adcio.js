import { useCallback, useRef, useState } from "react";

import { Spinner } from "@corca-ai/design-system";
import styled from "@emotion/styled";

import { Product } from "@adcio/api/controller/v1";
import {
  ChatRole,
  ChatType,
  TalkResponseMessage,
} from "@adcio/api/messenger/v1";

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
import { AppType } from "../types/setting.types";
import { getNewChatGroupPath } from "../utils/route";
import { AgentPath } from "../types/route.types";

interface Props {
  appType: AppType;
  routeTo: (url: string) => void | Promise<boolean>;
  id: string;
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
  keyboardFocus,
  setDisplay,
  appbar = true,
}: Props) {
  const { messengerConfig, deviceId, customerId, agentProfile } =
    useAgentSettingState();
  const { chatDialogue, init, append } = useChatDialogue({
    groupId: id,
    appType,
  });

  const [disabled, setDisabled] = useState(false);

  const scrollRef = useRef<HTMLDivElement>(null);
  const handleScrollToBottom = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  const { isLoading } = useFetchChatDialogue(
    { clientId: agentProfile.clientId, groupId: id, deviceId, customerId },
    messengerConfig,
    {
      onSuccess: init,
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
          clientId: agentProfile.clientId,
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
        clientId: agentProfile.clientId,
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
      routeTo(AgentPath.Start);
    },
    newChat: () => {
      routeTo(getNewChatGroupPath()); // new group_id chat
    },
  };

  return (
    <PageSection direction="column">
      {appbar && (
        <ChatTop
          showClose={appType === "WebPackage"}
          onBack={() => {
            routeTo(AgentPath.Start);
          }}
          onClose={() => {
            setDisplay(false);
            routeTo(AgentPath.Entry);
          }}
          onMenu={onMenu}
          {...{ pos: appType === "WebPackage" ? "sticky" : "fixed" }}
        />
      )}
      <BaseScrollContentsWrapper>
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
      </BaseScrollContentsWrapper>
      <ChatInputWrapper>
        <ChatInput
          onSend={onSend}
          disabled={disabled}
          keyboardFocus={keyboardFocus}
        />
      </ChatInputWrapper>
    </PageSection>
  );
}

const ChatInputWrapper = styled.div`
  width: 100%;
  padding: 0 14px 14px;
`;
