import {
  TrackAddToCartRequestDto,
  TrackClickRequestDto,
  TrackImpressionRequestDto,
  TrackPageViewRequestDto,
  TrackPurchaseRequestDto,
} from "api/receiver/v1";

export type ReceiverAPIField<T> = {
  name: keyof T;
  isRequired: boolean;
}[];

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
  { name: "path", isRequired: true },
  { name: "title", isRequired: false },
  { name: "referrer", isRequired: false },
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
