import { useTranslation } from "react-i18next";

import { color, typography } from "@corca-ai/design-system";
import styled from "@emotion/styled";
import { ChatProfile } from "@adcio.js/api/controller/v1";

interface Props {
  agentProfile: ChatProfile;
}

export function IntroductionText({ agentProfile }: Props) {
  const { t } = useTranslation();
  return (
    <Text>
      {agentProfile.description ||
        t("start.title", { botName: agentProfile.name })}
    </Text>
  );
}

const Text = styled.h1`
  font-size: 26px;
  font-weight: ${typography.weight.bold};
  color: ${color["main-black"]};
  line-height: normal;
  white-space: pre-line;
`;
