import { Configuration, SearchApi } from "@adcio.js/api/messenger/v1";
import type {
  AdcioSearchEngineParams,
  AdcioSearchEngineSearchParams,
  AdcioSearchEngineSearchResponse,
} from "./search.interface";
import { AdcioCore } from "../core";

const camelizeString = (str: string) =>
  str
    .toLowerCase()
    .replace(/([-_][a-z])/g, (group) =>
      group.toUpperCase().replace("-", "").replace("_", ""),
    );

const camelizeObject = (obj: Record<string, any>) =>
  Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];
    if (typeof value === "object" && value !== null) {
      Object.assign(acc, {
        [camelizeString(key)]: camelizeObject(value),
      });
    } else {
      Object.assign(acc, { [camelizeString(key)]: value });
    }
    return acc;
  }, {});

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
    return camelizeObject(data) as AdcioSearchEngineSearchResponse;
  }
}
