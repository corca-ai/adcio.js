import { Button } from "@corca-ai/design-system";
import styled from "@emotion/styled";

import { StartTop } from "../components/start/StartTop";
import { IntroductionText } from "../components/startPage/IntroductionText";
import { ChatHistory } from "../components/startPage/chatHistory";
import { useAgentSettingState } from "../context/AgentSettingContext";
import { useFetchChatGroups } from "../hook/query/chat";
import { FlexBox, PageSection } from "../styles/layout";
import { PageURL } from "../types/common/url";
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
              routeTo("entry");
              setDisplay(false);
            }}
            p="xs"
          />
        </section>

        <ContentsWrapper direction="column" justify="center" align="flex-start">
          <IntroductionText agentProfile={agentProfile} />
          <Button size="large" variant="filled" onClick={onCreateNewChat}>
            새 대화 시작하기
          </Button>

          <ChatHistory
            chatList={{
              isLoading,
              data: chatGroups,
              hasNextPage,
              fetchNextPage,
              onChatItemClick: (chatId: string) => {
                routeTo(`${PageURL.CHAT}/${chatId}`);
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
