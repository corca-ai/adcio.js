import { Dispatch, LazyExoticComponent, lazy } from "react";

const LazyChat = lazy(() => import("../pages/Chat"));
const LazyEntry = lazy(() => import("../pages/Entry"));
const LazyStart = lazy(() => import("../pages/Start"));

export interface Page {
  routeTo: Dispatch<PathAction>;
}

export type PathState = { path: AgentPath; id?: string };
export type PathAction = { path: AgentPath; id?: string };

export type AgentPath = "entry" | "start" | "chat";
type AgentPathElement = LazyExoticComponent<
  ({
    routeTo,
    id,
  }: {
    routeTo: Dispatch<PathAction>;
    id: string;
  }) => JSX.Element
>;

export const AGENT_PATH: {
  [T in AgentPath]: {
    path: T;
    element: AgentPathElement;
  };
} = {
  entry: { path: "entry", element: LazyEntry },
  start: { path: "start", element: LazyStart },
  chat: { path: "chat", element: LazyChat },
};
