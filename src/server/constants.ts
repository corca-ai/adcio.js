import { TrackImpressionRequestDto } from "api/receiver/v1";

type ImpressionField = {
  name: keyof TrackImpressionRequestDto;
  isRequired: boolean;
}[];

export const impressionField: ImpressionField = [
  { name: "requestId", isRequired: true },
  { name: "adsetId", isRequired: true },
];

export const StatusCode = {
  SUCCESS: 201,
  CLIENT_ERROR: 400,
};
