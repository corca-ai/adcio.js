import { color } from "@corca-ai/design-system";
import styled from "@emotion/styled";
import { CSSProperties } from "react";

type BoxStyle = {
  width?: string;
  height?: string;
};

type FlexStyle = {
  direction?: "column" | "row";
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
};

export type FlexProps = BoxStyle & FlexStyle;

const defaultBoxProps: Required<BoxStyle> = {
  width: "100%",
  height: "100%",
};

const defaultFlexProps: Required<FlexStyle> = {
  direction: "row",
  align: "center",
  justify: "flex-start",
};

export const Box = styled.div<BoxStyle>`
  width: ${({ width = defaultBoxProps.width }) => width};
  height: ${({ height = defaultBoxProps.height }) => height};
`;

export const FlexBox = styled(Box)<FlexProps>`
  display: flex;
  flex-direction: ${({ direction = defaultFlexProps.direction }) => direction};
  align-items: ${({ align = defaultFlexProps.align }) => align};
  justify-content: ${({ justify = defaultFlexProps.justify }) => justify};
`;

export const PageSection = styled(FlexBox)`
  background: ${color["grey-10"]};
  border-right: 1px solid ${color["grey-30"]};
  border-left: 1px solid ${color["grey-30"]};
`;
