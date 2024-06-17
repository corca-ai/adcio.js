import { InfiniteData } from "react-query";

import { CustomerChatGroupDto } from "@adcio/api/controller/v1";

export interface ChatHistoryProps {
  chatList: {
    data: InfiniteData<CustomerChatGroupDto>;
    hasNextPage: boolean;
    fetchNextPage: () => void;
    isLoading: boolean;
    onChatItemClick: (chatId: string) => void;
  };
}
