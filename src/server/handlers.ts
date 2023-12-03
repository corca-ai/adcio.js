import { SuggestionRequestDto } from "api/controller/v1";
import { HttpResponse, http } from "msw";
import { registeredPlacementIds, suggestionResponse } from "./demo";

const ADCIO_API_BASE_URL = "https://api.adcio.ai";

export function handlers() {
  return [http.post(`${ADCIO_API_BASE_URL}/suggestions`, createSuggestion)];
}

type Handler = Parameters<typeof http.post>[1];

const createSuggestion: Handler = async ({ request }) => {
  const { placementId } = (await request.json()) as SuggestionRequestDto;
  const isPlacementIdRegistered = registeredPlacementIds.find(
    (id) => placementId === id,
  );

  if (!isPlacementIdRegistered) {
    return HttpResponse.json({
      errors: [
        {
          message: `Failed to suggestions: The placement id(${placementId}) does not exist.`,
          status: 400,
        },
      ],
    });
  }

  return HttpResponse.json({
    status: 201,
    body: suggestionResponse,
  });
};
