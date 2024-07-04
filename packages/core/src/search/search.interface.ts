import { SearchParams, SearchResponse } from "@adcio.js/api/messenger/v1";
import { AdcioCore } from "../core";

export interface AdcioSearchEngineParams {
  adcioCore: AdcioCore;
  messengerEndpoint: string;
}

export type AdcioSearchEngineSearchParams = SearchParams;
export type AdcioSearchEngineSearchResponse = SearchResponse;
