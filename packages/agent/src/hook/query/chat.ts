import { Configuration } from "@adcio.js/api/controller/v1";
import { ChatApi } from "@adcio.js/api/controller/v1";
import { useInfiniteQuery } from "react-query";
import { ChatLanguage } from "../../types/select.types";

export const useFetchChatGroups = (
  params: { userId: string; clientId: string; locale: ChatLanguage },
  config: Configuration,
) => {
  const CHAT_GROUP_PAGE_LIMIT = 10;

  return useInfiniteQuery(
    ["chatGroups", params.userId],
    async ({ pageParam = 0 }) => {
      const { data } = await new ChatApi(config).chatControllerFetchCustomer(
        params.userId,
        params.clientId,
        CHAT_GROUP_PAGE_LIMIT,
        pageParam * CHAT_GROUP_PAGE_LIMIT,
      );

      const { items } = data;
      const isLastPage = items.length < CHAT_GROUP_PAGE_LIMIT;
      const nextPage = isLastPage ? undefined : pageParam + 1;

      return { items, nextPage };
    },
    {
      enabled: !!params.userId,
      select: (data) => {
        return {
          pages: [].concat(...data.pages.map((page) => page.items)),
          pageParams: data.pageParams,
        };
      },
      getNextPageParam: (lastPage) => lastPage.nextPage,
    },
  );
};
