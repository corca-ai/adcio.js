import { Configuration, SearchApi } from "@adcio.js/api/messenger/v1";
import type {
  AdcioSearchEngineParams,
  AdcioSearchEngineSearchParams,
  AdcioSearchEngineSearchResponse,
} from "./search.interface";
import { AdcioCore } from "../core";

export class AdcioSearchEngine {
  private adcioCore: AdcioCore;
  private apiConfig: Configuration;

  constructor({ adcioCore, messengerEndpoint }: AdcioSearchEngineParams) {
    this.adcioCore = adcioCore;
    this.apiConfig = new Configuration({ basePath: messengerEndpoint });
  }

  public async search(
    params: AdcioSearchEngineSearchParams,
  ): Promise<AdcioSearchEngineSearchResponse> {
    const { data } = await new SearchApi(
      this.apiConfig,
    ).searchApiV1SearchClientIdPost(
      this.adcioCore.getClientId(),
      params,
      this.adcioCore.getDeviceId(),
      this.adcioCore.getCustomerId(),
    );
    return data;
  }
}
