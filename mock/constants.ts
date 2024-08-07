import {
  TrackAddToCartRequestDto,
  TrackClickRequestDto,
  TrackImpressionRequestDto,
  TrackPageViewRequestDto,
  TrackPurchaseRequestDto,
} from "../packages/api/receiver/v1";

export type ReceiverAPIField<T> = {
  name: keyof T;
  isRequired: boolean;
}[];

export enum SuggestionTestId {
  BANNER_PLACEMENT = "a3e0efcc-bbed-4c73-b001-cd3d0c54e7a6",
  GRID_PLACEMENT = "6c619268-533f-4f34-95e9-f582879b9255",
  NO_ACTIVATED_PLACEMENT = "15a4b107-8c71-447b-9794-fe7d7582e43c",
  NOT_FOUND_PLACEMENT = "34afc940-3801-45f6-b558-2365b26c8196",
  WIDGET_PLACEMENT = "1ac3b560-8c2a-4ab9-bb77-ce8c6edc771c",
  NOT_UUID_PLACEMENT = "not-uuid-placement",
}

export const impressionField: ReceiverAPIField<TrackImpressionRequestDto> = [
  { name: "sessionId", isRequired: true },
  { name: "deviceId", isRequired: true },
  { name: "customerId", isRequired: false },
  { name: "storeId", isRequired: true },
  { name: "requestId", isRequired: true },
  { name: "adsetId", isRequired: true },
  { name: "sdkVersion", isRequired: true },
  { name: "userAgent", isRequired: false },
];

export const clickField: ReceiverAPIField<TrackClickRequestDto> = [
  { name: "sessionId", isRequired: true },
  { name: "deviceId", isRequired: true },
  { name: "customerId", isRequired: false },
  { name: "storeId", isRequired: true },
  { name: "requestId", isRequired: true },
  { name: "adsetId", isRequired: true },
  { name: "sdkVersion", isRequired: true },
  { name: "userAgent", isRequired: false },
];

export const viewField: ReceiverAPIField<TrackPageViewRequestDto> = [
  { name: "sessionId", isRequired: true },
  { name: "deviceId", isRequired: true },
  { name: "customerId", isRequired: false },
  { name: "storeId", isRequired: true },
  { name: "productIdOnStore", isRequired: false },
  { name: "categoryIdOnStore", isRequired: false },
  { name: "sdkVersion", isRequired: true },
  { name: "userAgent", isRequired: false },
];

export const addToCartField: ReceiverAPIField<TrackAddToCartRequestDto> = [
  { name: "sessionId", isRequired: true },
  { name: "deviceId", isRequired: true },
  { name: "customerId", isRequired: false },
  { name: "cartId", isRequired: false },
  { name: "storeId", isRequired: true },
  { name: "productIdOnStore", isRequired: true },
  { name: "sdkVersion", isRequired: true },
  { name: "userAgent", isRequired: false },
];

export const purchaseField: ReceiverAPIField<TrackPurchaseRequestDto> = [
  { name: "sessionId", isRequired: true },
  { name: "deviceId", isRequired: true },
  { name: "customerId", isRequired: false },
  { name: "orderId", isRequired: true },
  { name: "storeId", isRequired: true },
  { name: "productIdOnStore", isRequired: true },
  { name: "quantity", isRequired: false },
  { name: "amount", isRequired: true },
  { name: "sdkVersion", isRequired: true },
  { name: "userAgent", isRequired: false },
];
