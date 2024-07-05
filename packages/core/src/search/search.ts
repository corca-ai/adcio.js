import { Configuration, SearchApi } from "@adcio.js/api/messenger/v1";
import type {
  AdcioSearchEngineParams,
  AdcioSearchEngineSearchParams,
  AdcioSearchEngineSearchResponse,
} from "./search.interface";
import { AdcioCore } from "../core";

function camelize(o: any) {
  let newO, origKey, newKey, value;
  if (o instanceof Array) {
    return o.map(function (value) {
      if (typeof value === "object") {
        value = camelize(value);
      }
      return value;
    });
  } else {
    newO = {};
    for (origKey in o) {
      if (o.hasOwnProperty(origKey)) {
        newKey = (
          origKey.charAt(0).toLowerCase() + origKey.slice(1) || origKey
        ).toString();
        value = o[origKey];
        if (
          value instanceof Array ||
          (value !== null && value.constructor === Object)
        ) {
          value = camelize(value);
        }
        Object.assign(newO, { [newKey]: value });
      }
    }
  }
  return newO;
}
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
    return camelize(data) as AdcioSearchEngineSearchResponse;
  }
}
