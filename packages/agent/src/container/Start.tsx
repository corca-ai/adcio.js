import { B1, Icon, color } from "@corca-ai/design-system";
import styled from "@emotion/styled";
import { IntroductionText } from "../components/startPage/IntroductionText";
import { StartTop } from "../components/startPage/StartTop";
import { ChatHistory } from "../components/startPage/chatHistory";
import { useAgentSettingState } from "../context/AgentSettingContext";
import { useFetchChatGroups } from "../hook/query/chat";
import { FlexBox, PageSection } from "../styles/layout";
import { AgentPath } from "../types/route.types";
import { AppType } from "../types/setting.types";
import { getNewChatGroupPath } from "../utils/route";

interface Props {
  routeTo: (url: string) => void | Promise<boolean>;
  appType: AppType;
  setDisplay?: (show: boolean) => void;
}

export default function Index({ appType, routeTo, setDisplay }: Props) {
  // const { setting, saveSetting, onKeyChange } = useUserSetting({
  //   onChange: { language: i18n.changeLanguage },
  // });
  const { agentProfile, deviceId, customerId, apiConfig } =
    useAgentSettingState();

  const {
    data: chatGroups,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useFetchChatGroups(
    {
      userId: customerId || deviceId,
      clientId: agentProfile.clientId,
      locale: "ko",
      // locale: setting.language as ChatLanguage,
    },
    apiConfig,
  );

  const onCreateNewChat = () => {
    routeTo(getNewChatGroupPath());
  };

  return (
    <PageSection align="center" direction="column">
      <FlexBox direction="column" justify="center">
        <section>
          <StartTop
            showClose={appType === "WebPackage"}
            onClose={() => {
              routeTo(AgentPath.Start);
              setDisplay(false);
            }}
            p="xs"
          />
        </section>

        <ContentsWrapper direction="column" justify="center" align="flex-start">
          <IntroductionText agentProfile={agentProfile} />
          <NewChatButton type="button" onClick={onCreateNewChat}>
            <Icon.ChatPlus size={20} color={color.white} />
            <B1 c="white">새 대화 시작하기</B1>
          </NewChatButton>
          <ChatHistory
            chatList={{
              isLoading,
              data: chatGroups,
              hasNextPage,
              fetchNextPage,
              onChatItemClick: (chatId: string) => {
                routeTo(`${AgentPath.Chat}/${chatId}`);
              },
            }}
          />
        </ContentsWrapper>
      </FlexBox>
    </PageSection>
  );
}

const ContentsWrapper = styled(FlexBox)`
  display: flex;
  padding: 100px 47px;
  gap: 40px;
  flex-shrink: 0;
`;

const NewChatButton = styled.button`
  display: flex;
  width: 100%;
  height: 43px;
  padding: 11px 16px 11px 14px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: ${color["main-black"]};
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
`;
