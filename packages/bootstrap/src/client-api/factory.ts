import { Cafe24API } from "./cafe24";
import { ClientAPI } from "./client-api.interface";

export const createClientAPI = (clientApi?: string): ClientAPI | null => {
  if (clientApi) {
    switch (clientApi) {
      case "cafe24":
        return new Cafe24API();
      case "cdp-cafe24":
        return new Cafe24API();
      default:
        return null;
    }
  }
  const globals = window as any;
  if (globals.CAFE24API) {
    return new Cafe24API();
  }
  if (globals.ADCIO_CLIENT_API) {
    return globals.ADCIO_CLIENT_API as ClientAPI;
  }
  return null;
};
