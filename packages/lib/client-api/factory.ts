import { Cafe24API } from "./cafe24";
import { ClientAPI } from "./client-api.interface";

export const createClientAPI = (): ClientAPI | null => {
  const globals = window as any;
  if (globals.CAFE24API) {
    return new Cafe24API();
  }
  if (globals.ADCIO_CLIENT_API) {
    return globals.ADCIO_CLIENT_API as ClientAPI;
  }
  return null;
};
