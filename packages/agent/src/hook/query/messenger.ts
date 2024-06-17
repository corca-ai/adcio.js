import { useMutation, useQuery } from "react-query";

import {
  ChatsApi,
  ChatsApiAxiosParamCreator,
  Configuration,
  TalkResponseMessage,
} from "@adcio.js/api/messenger/v1";

export const useFetchChatDialogue = (
  params: {
    clientId: string;
    groupId: string;
    deviceId: string;
    customerId?: string;
  },
  config: Configuration,
  options: {
    onError?: (err: unknown) => void;
    onSuccess?: (data: TalkResponseMessage[]) => void;
  } = {},
) =>
  useQuery(
    ["prevChatList", params],
    async () => {
      const { data } = await new ChatsApi(
        config,
      ).fetchChatDialogueApiV1ChatsClientIdGroupIdGet(
        params.clientId,
        params.groupId,
        params.deviceId,
        params.customerId,
      );
      return data;
    },
    {
      enabled: !!params.groupId,
      refetchInterval: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      ...options,
    },
  );

export const useChat = (config: Configuration) =>
  useMutation(
    async (params: {
      clientId: string;
      groupId: string;
      deviceId: string;
      customerId?: string;
      content: string;
    }) => {
      /**
       * Axios does not support responseType: 'stream' with POST method
       * https://github.com/axios/axios/issues/5806
       */

      const axiosConfig = await ChatsApiAxiosParamCreator(
        config,
      ).chatApiV1ChatsClientIdGroupIdPost(
        params.clientId,
        params.groupId,
        { content: params.content },
        params.deviceId,
        params.customerId,
      );

      const { body } = await fetch(config.basePath + axiosConfig.url, {
        method: axiosConfig.options.method,
        headers: {
          "Content-Type": axiosConfig.options.headers["Content-Type"],
        },
        body: axiosConfig.options.data,
      });

      return body;
    },
  );

export const useExplainProduct = (config: Configuration) =>
  useMutation(
    async (params: {
      clientId: string;
      groupId: string;
      deviceId: string;
      customerId?: string;
      productId: string;
      content?: string;
    }) => {
      /**
       * Axios does not support responseType: 'stream' with POST method
       * https://github.com/axios/axios/issues/5806
       */

      const axiosConfig = await ChatsApiAxiosParamCreator(
        config,
      ).explainApiV1ChatsClientIdGroupIdExplainProductPost(
        params.clientId,
        params.groupId,
        { product_id: params.productId, content: params.content },
        params.deviceId,
        params.customerId,
      );

      const { body } = await fetch(config.basePath + axiosConfig.url, {
        method: axiosConfig.options.method,
        headers: {
          "Content-Type": axiosConfig.options.headers["Content-Type"],
        },
        body: axiosConfig.options.data,
      });

      return body;
    },
  );
