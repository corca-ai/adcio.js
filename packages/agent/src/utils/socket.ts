import { ChatResponse } from "../types/chat.types";

export const generateSocket = ({
  socketEndpoint,
  customerId,
  deviceId,
  clientId,
  groupId,
  callback,
}: {
  socketEndpoint: string;
  customerId: string;
  deviceId: string;
  clientId: string;
  groupId: string;
  callback: {
    onConnect?: () => void;
    onDisconnect?: () => void;
    onMessage: (message: ChatResponse) => void;
  };
}) => {
  const url = new URL(socketEndpoint);
  url.pathname = `/ws/chat/prompts/${deviceId}`;
  // url.searchParams.set('locale', setting.language);
  // url.searchParams.set('mode', setting.mode);
  url.searchParams.set("client_id", clientId);
  url.searchParams.set("group_id", groupId);
  customerId && url.searchParams.set("customer_id", customerId);

  const webSocket = new WebSocket(url);
  webSocket.onopen = () => {
    callback.onConnect && callback.onConnect();
  };
  webSocket.onclose = () => {
    callback.onDisconnect && callback.onDisconnect();
  };
  webSocket.onmessage = (evt) => {
    const message: ChatResponse = JSON.parse(evt.data); // TODO: need typing
    callback.onMessage(message);
  };
  return webSocket;
};
