import { v4 as uuidv4 } from "uuid";
import { PathState } from "../router/route";

export const getNewChatGroupPath = () => "chat/" + uuidv4();

const ACTIVE_GROUP_ID_KEY = "active_group_id";

export const setActiveGroupId = (id: string): void =>
  localStorage.setItem(ACTIVE_GROUP_ID_KEY, id);

export const removeActiveGroupId = (): void =>
  localStorage.removeItem(ACTIVE_GROUP_ID_KEY);

export const getInitPath = (): PathState => {
  const prevChatGroupId =
    localStorage.getItem(ACTIVE_GROUP_ID_KEY) || undefined;
  return {
    path: prevChatGroupId ? "chat" : "entry",
    id: prevChatGroupId,
  };
};
