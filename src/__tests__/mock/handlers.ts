import { SuggestionRequestDto } from "api/controller/v1";
import { APIError } from "lib/error";
import { HttpResponse, http } from "msw";
import {
  ReceiverAPIField,
  addToCartField,
  clickField,
  impressionField,
  purchaseField,
  viewField,
} from "./constants";
import { registeredPlacementIds, suggestionResponse } from "./suggestion.demo";

const RECEIVER_API_BASE_URL = "https://receiver.adcio.ai";
const ADCIO_API_BASE_URL = "https://api.adcio.ai";

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

// TODO: DeactivatedPlacementException 에러 케이스 추가
const createSuggestion: Handler = async ({ request }) => {
  const { placementId } = (await request.json()) as SuggestionRequestDto;
  const isPlacementIdRegistered = registeredPlacementIds.find(
    (id) => placementId === id,
  );

  if (!isPlacementIdRegistered) {
    return HttpResponse.json(
      {
        message: `Failed to suggestions: The placement id(${placementId}) does not exist.`,
      },
      {
        status: 404,
      },
    );
  }

  return HttpResponse.json(
    {
      ...suggestionResponse,
    },
    {
      status: 201,
    },
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
