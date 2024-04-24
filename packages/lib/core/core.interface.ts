import { CustomerId, StoreId } from "@adcio/api/dto/session.dto";

export type AdcioCoreParams = {
  clientId: StoreId;
  customerId?: CustomerId;
};
