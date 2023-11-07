export type SessionId = string;
export type DeviceId = string;
export type CustomerId = string;
export type StoreId = string;

export interface SessionDto {
  sessionId: SessionId;
  deviceId: DeviceId;
  customerId?: CustomerId;
  storeId: StoreId;
}
