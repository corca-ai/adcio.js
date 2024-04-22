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
  SUCCESS_PLACEMENT = "a3e0efcc-bbed-4c73-b001-cd3d0c54e7a6",
  NO_ACTIVATED_PLACEMENT = "15a4b107-8c71-447b-9794-fe7d7582e43c",
  NOT_FOUND_PLACEMENT = "34afc940-3801-45f6-b558-2365b26c8196",
  NOT_UUID_PLACEMENT = "not-uuid-placement",
}

export const impressionField: ReceiverAPIField<TrackImpressionRequestDto> = [
  { name: "sessionId", isRequired: true },
  { name: "deviceId", isRequired: true },
  { name: "customerId", isRequired: false },
  { name: "storeId", isRequired: true },
  { name: "requestId", isRequired: true },
  { name: "adsetId", isRequired: true },
];

export const clickField: ReceiverAPIField<TrackClickRequestDto> = [
  { name: "sessionId", isRequired: true },
  { name: "deviceId", isRequired: true },
  { name: "customerId", isRequired: false },
  { name: "storeId", isRequired: true },
  { name: "requestId", isRequired: true },
  { name: "adsetId", isRequired: true },
];

export const viewField: ReceiverAPIField<TrackPageViewRequestDto> = [
  { name: "sessionId", isRequired: true },
  { name: "deviceId", isRequired: true },
  { name: "customerId", isRequired: false },
  { name: "storeId", isRequired: true },
  { name: "productIdOnStore", isRequired: false },
  { name: "categoryIdOnStore", isRequired: false },
];

export const addToCartField: ReceiverAPIField<TrackAddToCartRequestDto> = [
  { name: "sessionId", isRequired: true },
  { name: "deviceId", isRequired: true },
  { name: "customerId", isRequired: false },
  { name: "cartId", isRequired: false },
  { name: "storeId", isRequired: true },
  { name: "productIdOnStore", isRequired: true },
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
];
