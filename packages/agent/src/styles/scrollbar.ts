import { color } from "@corca-ai/design-system";
import styled from "@emotion/styled";
import { FlexBox } from "./layout";

export const BaseScrollContentsWrapper: React.FC = styled(FlexBox)`
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.2) transparent;

  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    overflow: visible;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
  }
`;

export const Scrollbar: React.FC = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  -webkit-transition: all 0.2s;
  opacity: 1;
  background-color: ${color["white"]};
`;
