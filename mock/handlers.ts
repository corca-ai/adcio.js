import { SuggestionRequestDto } from "../src/api/controller/v1";
import {
  ERROR_CODE,
  PLACEMENT_ERROR_MESSAGE,
} from "../src/lib/constants/error";
import { APIError } from "../src/lib/error";
import { HttpResponse, http } from "msw";
import {
  ReceiverAPIField,
  SuggestionTestId,
  addToCartField,
  clickField,
  impressionField,
  purchaseField,
  viewField,
} from "./constants";
import { suggestionResponse } from "./suggestion.demo";

const RECEIVER_API_BASE_URL = "https://receiver-dev.adcio.ai"; //TODO: Change to prod url
const ADCIO_API_BASE_URL = "https://api-dev.adcio.ai"; //TODO: Change to prod url

export function handlers() {
  return [
    http.post(`${ADCIO_API_BASE_URL}/suggestions`, createSuggestion),
    http.post(
      `${RECEIVER_API_BASE_URL}/performance/impression`,
      createAnalyticsHandler(impressionField),
    ),
    http.post(
      `${RECEIVER_API_BASE_URL}/performance/click`,
      createAnalyticsHandler(clickField),
    ),
    http.post(
      `${RECEIVER_API_BASE_URL}/events/view`,
      createAnalyticsHandler(viewField),
    ),
    http.post(
      `${RECEIVER_API_BASE_URL}/events/add-to-cart`,
      createAnalyticsHandler(addToCartField),
    ),
    http.post(
      `${RECEIVER_API_BASE_URL}/events/purchase`,
      createAnalyticsHandler(purchaseField),
    ),
  ];
}

type Handler = Parameters<typeof http.post>[1];

const createSuggestion: Handler = async ({ request }) => {
  const { placementId } = (await request.json()) as SuggestionRequestDto;

  const isPlacementIdNotUUID =
    placementId === SuggestionTestId.NOT_UUID_PLACEMENT;
  const isPlacementIdSuccess =
    placementId === SuggestionTestId.SUCCESS_PLACEMENT;
  const isPlacementIdNotFound =
    placementId === SuggestionTestId.NOT_FOUND_PLACEMENT;
  const isPlacementIdDisabled =
    placementId === SuggestionTestId.NO_ACTIVATED_PLACEMENT;

  if (isPlacementIdSuccess) {
    return HttpResponse.json({ ...suggestionResponse }, { status: 201 });
  }

  if (isPlacementIdNotUUID) {
    return HttpResponse.json(
      { message: PLACEMENT_ERROR_MESSAGE.NOT_UUID },
      { status: 400 },
    );
  }

  if (isPlacementIdNotFound) {
    return HttpResponse.json(
      { message: ERROR_CODE.SUGGESTION.PLACEMENT_NOT_FOUND },
      { status: 404 },
    );
  }

  if (isPlacementIdDisabled) {
    return HttpResponse.json(
      { message: ERROR_CODE.SUGGESTION.NO_ACTIVATED_PLACEMENT },
      { status: 404 },
    );
  }

  return HttpResponse.json(
    { message: PLACEMENT_ERROR_MESSAGE.UNKNOWN_ERROR },
    { status: 500 },
  );
};

function checkResponseDtoVaild<T>(
  obj: unknown,
  fieldList: ReceiverAPIField<T>,
) {
  if (obj == null || typeof obj !== "object") {
    throw new APIError(400, "Request format is incorrect.");
  }

  fieldList.forEach((field) => {
    if (!(field.name in obj) && field.isRequired) {
      throw new APIError(
        400,
        `Required field value is missing: ${String(field.name)}`,
      );
    }
  });

  for (const key in obj) {
    if (!fieldList.some((field) => field.name === key)) {
      throw new APIError(400, `A non-existent field value was passed: ${key}`);
    }
  }
}

function createAnalyticsHandler<T>(fieldList: ReceiverAPIField<T>): Handler {
  return async ({ request }) => {
    try {
      checkResponseDtoVaild(await request.json(), fieldList);
      return HttpResponse.json(
        {
          success: true,
        },
        {
          status: 201,
        },
      );
    } catch (error) {
      if (error instanceof APIError) {
        return HttpResponse.json(
          {
            message: error.message,
          },
          {
            status: error.statusCode,
          },
        );
      }
    }
  };
}
