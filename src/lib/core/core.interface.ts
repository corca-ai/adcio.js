import { CustomerId, StoreId } from "@adcio.js/api/dto/session.dto";

export type AdcioCoreParams = {
  clientId: StoreId;
  customerId?: CustomerId;
};
