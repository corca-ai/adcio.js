import { TrackImpressionRequestDto } from "api/receiver/v1";

type ImpressionField = {
  name: keyof TrackImpressionRequestDto;
  isRequired: boolean;
}[];

export const impressionField: ImpressionField = [
  { name: "sessionId", isRequired: true },
  { name: "deviceId", isRequired: true },
  { name: "customerId", isRequired: false },
  { name: "storeId", isRequired: true },
  { name: "requestId", isRequired: true },
  { name: "adsetId", isRequired: true },
];
