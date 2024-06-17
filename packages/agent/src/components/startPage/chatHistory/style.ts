import { color } from "@corca-ai/design-system";
import styled from "@emotion/styled";
import { FlexBox } from "../../../styles/layout";

export const ChatContentsContainer = styled(FlexBox)`
  padding: 30px 20px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 12px;
  background: ${color.white};
  box-shadow: 0px 0px 20px 0px ${color["grey-20"]};
`;
