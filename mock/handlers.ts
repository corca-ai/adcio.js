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
import {
  recommendationBannersResponse,
  recommendationProductsResponse,
  widgetRecommendationProductsResponse,
} from "./recommendations.demo";
import {
  BannerSuggestionRequestDto,
  ProductSuggestionRequestDto,
} from "../packages/api/controller/v1";
import {
  APIError,
  ERROR_CODE,
  PLACEMENT_ERROR_MESSAGE,
} from "../packages/core/src/placement/api-error";

const RECEIVER_API_BASE_URL = "https://receiver.adcio.ai";
const ADCIO_API_BASE_URL = "https://api.adcio.ai";

export function handlers() {
  return [
    http.post(
      `${ADCIO_API_BASE_URL}/recommendations/banners`,
      createRecommendationBanners,
    ),
    http.post(
      `${ADCIO_API_BASE_URL}/recommendations/products`,
      createRecommendationProducts,
    ),
    http.post(
      `${RECEIVER_API_BASE_URL}/events/impression`,
      createAnalyticsHandler(impressionField),
    ),
    http.post(
      `${RECEIVER_API_BASE_URL}/events/click`,
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

const createRecommendationBanners: Handler = async ({ request }) => {
  const { placementId } = (await request.json()) as BannerSuggestionRequestDto;

  const isPlacementIdNotUUID =
    placementId === SuggestionTestId.NOT_UUID_PLACEMENT;
  const isPlacementIdSuccess =
    placementId === SuggestionTestId.BANNER_PLACEMENT;
  const isPlacementIdNotFound =
    placementId === SuggestionTestId.NOT_FOUND_PLACEMENT;
  const isPlacementIdDisabled =
    placementId === SuggestionTestId.NO_ACTIVATED_PLACEMENT;

  if (isPlacementIdSuccess) {
    return HttpResponse.json(
      { ...recommendationBannersResponse },
      { status: 201 },
    );
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

const createRecommendationProducts: Handler = async ({ request }) => {
  const { placementId } = (await request.json()) as ProductSuggestionRequestDto;

  const isPlacementIdNotUUID =
    placementId === SuggestionTestId.NOT_UUID_PLACEMENT;
  const isPlacementIdSuccess = placementId === SuggestionTestId.GRID_PLACEMENT;
  const isPlacementIdNotFound =
    placementId === SuggestionTestId.NOT_FOUND_PLACEMENT;
  const isPlacementIdDisabled =
    placementId === SuggestionTestId.NO_ACTIVATED_PLACEMENT;
  const isPlacementIdWidget = placementId === SuggestionTestId.WIDGET_PLACEMENT;

  if (isPlacementIdSuccess) {
    return HttpResponse.json(
      { ...recommendationProductsResponse },
      { status: 201 },
    );
  }

  if (isPlacementIdWidget) {
    return HttpResponse.json(
      { ...widgetRecommendationProductsResponse },
      { status: 201 },
    );
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
