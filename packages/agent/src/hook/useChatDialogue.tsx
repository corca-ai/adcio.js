import { useCallback, useReducer } from "react";

import { TalkResponseMessage } from "@adcio.js/api/messenger/v1";

import { AppType } from "../types/setting.types";

enum ChatDialogueAction {
  INIT = "INIT",
  APPEND = "APPEND",
  STREAM = "STREAM",
  QUESTION_ANSWERED = "QUESTION_ANSWERED",
}

const reducer =
  (appType: AppType) =>
  (
    state: TalkResponseMessage[],
    action:
      | { type: ChatDialogueAction.INIT; value: TalkResponseMessage[] }
      | { type: ChatDialogueAction.QUESTION_ANSWERED }
      | { type: ChatDialogueAction.APPEND; value: TalkResponseMessage },
  ): TalkResponseMessage[] => {
    switch (action.type) {
      case ChatDialogueAction.INIT:
        return action.value;
      case ChatDialogueAction.QUESTION_ANSWERED:
        return state.map((chat) => ({
          ...chat,
          questions: undefined,
        }));
      case ChatDialogueAction.APPEND: {
        const existingIndex = state.findIndex(
          (chat) => chat.key === action.value.key,
        );

        // new chat
        if (existingIndex === -1) {
          return [
            ...state.filter((chat) => action.value.key !== chat.key),
            action.value,
          ];
        }

        // existing chat
        const existing = state[existingIndex];

        const chat =
          action.value.delta !== null && action.value.delta !== undefined
            ? // streaming
              {
                ...existing,
                content: (existing.content || "") + action.value.delta,
              }
            : // normal
              action.value;

        return [
          ...state.slice(0, existingIndex),
          chat,
          ...state.slice(existingIndex + 1),
        ];
      }
    }
  };

export const useChatDialogue = ({
  groupId,
  appType,
}: {
  groupId: string | null;
  appType: AppType;
}) => {
  const [chatDialogue, dispatch] = useReducer(reducer(appType), []);

  const append = useCallback(
    (message: TalkResponseMessage) => {
      dispatch({
        type: ChatDialogueAction.APPEND,
        value: message,
      });
    },
    [dispatch, groupId],
  );

  const init = useCallback(
    (initialChatDialogue: TalkResponseMessage[]) => {
      dispatch({ type: ChatDialogueAction.INIT, value: initialChatDialogue });
    },
    [dispatch],
  );

  return {
    chatDialogue,
    init,
    append,
  };
};
