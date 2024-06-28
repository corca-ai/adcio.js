import { CustomerChatGroupDto } from "@adcio.js/api/controller/v1";
import { InfiniteData } from "react-query";

export interface ChatHistoryProps {
  chatList: {
    data: InfiniteData<CustomerChatGroupDto>;
    hasNextPage: boolean;
    fetchNextPage: () => void;
    isLoading: boolean;
    onChatItemClick: (chatId: string) => void;
  };
}
