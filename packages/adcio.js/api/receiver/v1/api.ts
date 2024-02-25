/* tslint:disable */
/* eslint-disable */
/**
 * ADCIO API:receiver
 * The ADCIO API:receiver specification
 *
 * The version of the OpenAPI document: v1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface NestJSErrorSchema
 */
export interface NestJSErrorSchema {
    /**
     * 
     * @type {number}
     * @memberof NestJSErrorSchema
     */
    'statusCode': number;
    /**
     * 
     * @type {object}
     * @memberof NestJSErrorSchema
     */
    'message': object;
    /**
     * 
     * @type {string}
     * @memberof NestJSErrorSchema
     */
    'error': string;
}
/**
 * 
 * @export
 * @interface TrackAddToCartRequestDto
 */
export interface TrackAddToCartRequestDto {
    /**
     * The session starts when the customer visits the store. It persists until the customer closes the tab, browser or app.
     * @type {string}
     * @memberof TrackAddToCartRequestDto
     */
    'sessionId': string;
    /**
     * The device identifier should be unique for each device. A customer can have multiple devices.
     * @type {string}
     * @memberof TrackAddToCartRequestDto
     */
    'deviceId': string;
    /**
     * The customer identifier which is generated and managed by the store. The store should configure `frontApi` parameter of ADCIO SDK so that the `customerId` can be sent to ADCIO API.
     * @type {string}
     * @memberof TrackAddToCartRequestDto
     */
    'customerId'?: string;
    /**
     * Unique identifier of the cart to prevent duplicate cart tracking.
     * @type {string}
     * @memberof TrackAddToCartRequestDto
     */
    'cartId'?: string;
    /**
     * Store ID. Note that a pair of store ID and product code is unique.
     * @type {string}
     * @memberof TrackAddToCartRequestDto
     */
    'storeId': string;
    /**
     * Product ID (on store).
     * @type {string}
     * @memberof TrackAddToCartRequestDto
     */
    'productIdOnStore': string;
}
/**
 * 
 * @export
 * @interface TrackClickRequestDto
 */
export interface TrackClickRequestDto {
    /**
     * The session starts when the customer visits the store. It persists until the customer closes the tab, browser or app.
     * @type {string}
     * @memberof TrackClickRequestDto
     */
    'sessionId': string;
    /**
     * The device identifier should be unique for each device. A customer can have multiple devices.
     * @type {string}
     * @memberof TrackClickRequestDto
     */
    'deviceId': string;
    /**
     * The customer identifier which is generated and managed by the store. The store should configure `frontApi` parameter of ADCIO SDK so that the `customerId` can be sent to ADCIO API.
     * @type {string}
     * @memberof TrackClickRequestDto
     */
    'customerId'?: string;
    /**
     * ADCIO Client ID
     * @type {string}
     * @memberof TrackClickRequestDto
     */
    'storeId': string;
    /**
     * Identifier for the suggestion request
     * @type {string}
     * @memberof TrackClickRequestDto
     */
    'requestId': string;
    /**
     * Product ID / Banner ID
     * @type {string}
     * @memberof TrackClickRequestDto
     */
    'adsetId': string;
}
/**
 * 
 * @export
 * @interface TrackImpressionRequestDto
 */
export interface TrackImpressionRequestDto {
    /**
     * The session starts when the customer visits the store. It persists until the customer closes the tab, browser or app.
     * @type {string}
     * @memberof TrackImpressionRequestDto
     */
    'sessionId': string;
    /**
     * The device identifier should be unique for each device. A customer can have multiple devices.
     * @type {string}
     * @memberof TrackImpressionRequestDto
     */
    'deviceId': string;
    /**
     * The customer identifier which is generated and managed by the store. The store should configure `frontApi` parameter of ADCIO SDK so that the `customerId` can be sent to ADCIO API.
     * @type {string}
     * @memberof TrackImpressionRequestDto
     */
    'customerId'?: string;
    /**
     * ADCIO Client ID
     * @type {string}
     * @memberof TrackImpressionRequestDto
     */
    'storeId': string;
    /**
     * Identifier for the suggestion request
     * @type {string}
     * @memberof TrackImpressionRequestDto
     */
    'requestId': string;
    /**
     * Product ID / Banner ID
     * @type {string}
     * @memberof TrackImpressionRequestDto
     */
    'adsetId': string;
}
/**
 * 
 * @export
 * @interface TrackPageViewRequestDto
 */
export interface TrackPageViewRequestDto {
    /**
     * The session starts when the customer visits the store. It persists until the customer closes the tab, browser or app.
     * @type {string}
     * @memberof TrackPageViewRequestDto
     */
    'sessionId': string;
    /**
     * The device identifier should be unique for each device. A customer can have multiple devices.
     * @type {string}
     * @memberof TrackPageViewRequestDto
     */
    'deviceId': string;
    /**
     * The customer identifier which is generated and managed by the store. The store should configure `frontApi` parameter of ADCIO SDK so that the `customerId` can be sent to ADCIO API.
     * @type {string}
     * @memberof TrackPageViewRequestDto
     */
    'customerId'?: string;
    /**
     * Store ID. Note that a pair of store ID and product id on store is unique.
     * @type {string}
     * @memberof TrackPageViewRequestDto
     */
    'storeId': string;
    /**
     * Product id on store. Only specified if the customer is viewing a product page
     * @type {string}
     * @memberof TrackPageViewRequestDto
     */
    'productIdOnStore'?: string;
    /**
     * Category id on store. Only specified if the customer is viewing a category page or a product page
     * @type {string}
     * @memberof TrackPageViewRequestDto
     */
    'categoryIdOnStore'?: string;
}
/**
 * 
 * @export
 * @interface TrackPurchaseRequestDto
 */
export interface TrackPurchaseRequestDto {
    /**
     * The session starts when the customer visits the store. It persists until the customer closes the tab, browser or app.
     * @type {string}
     * @memberof TrackPurchaseRequestDto
     */
    'sessionId': string;
    /**
     * The device identifier should be unique for each device. A customer can have multiple devices.
     * @type {string}
     * @memberof TrackPurchaseRequestDto
     */
    'deviceId': string;
    /**
     * The customer identifier which is generated and managed by the store. The store should configure `frontApi` parameter of ADCIO SDK so that the `customerId` can be sent to ADCIO API.
     * @type {string}
     * @memberof TrackPurchaseRequestDto
     */
    'customerId'?: string;
    /**
     * Unique identifier of the order to prevent duplicate purchase tracking.
     * @type {string}
     * @memberof TrackPurchaseRequestDto
     */
    'orderId': string;
    /**
     * Store ID. Note that a pair of store ID and product code is unique.
     * @type {string}
     * @memberof TrackPurchaseRequestDto
     */
    'storeId': string;
    /**
     * Product ID (on store).
     * @type {string}
     * @memberof TrackPurchaseRequestDto
     */
    'productIdOnStore': string;
    /**
     * Quantity of the product.
     * @type {number}
     * @memberof TrackPurchaseRequestDto
     */
    'quantity'?: number;
    /**
     * The paid amount. It is used for calculating the ROAS.
     * @type {number}
     * @memberof TrackPurchaseRequestDto
     */
    'amount': number;
}
/**
 * 
 * @export
 * @interface TrackResponseDto
 */
export interface TrackResponseDto {
    /**
     * 
     * @type {boolean}
     * @memberof TrackResponseDto
     */
    'success': boolean;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetData: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async appControllerGetData(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.appControllerGetData(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        appControllerGetData(options?: any): AxiosPromise<void> {
            return localVarFp.appControllerGetData(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public appControllerGetData(options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).appControllerGetData(options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * EventsApi - axios parameter creator
 * @export
 */
export const EventsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Log when the customer adds a product to the cart.
         * @summary 
         * @param {TrackAddToCartRequestDto} trackAddToCartRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsControllerOnAddToCart: async (trackAddToCartRequestDto: TrackAddToCartRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'trackAddToCartRequestDto' is not null or undefined
            assertParamExists('eventsControllerOnAddToCart', 'trackAddToCartRequestDto', trackAddToCartRequestDto)
            const localVarPath = `/events/add-to-cart`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(trackAddToCartRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Log when the customer views a page.
         * @summary 
         * @param {TrackPageViewRequestDto} trackPageViewRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsControllerOnPageView: async (trackPageViewRequestDto: TrackPageViewRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'trackPageViewRequestDto' is not null or undefined
            assertParamExists('eventsControllerOnPageView', 'trackPageViewRequestDto', trackPageViewRequestDto)
            const localVarPath = `/events/view`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(trackPageViewRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Log when the customer purchases a product.
         * @summary 
         * @param {TrackPurchaseRequestDto} trackPurchaseRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsControllerOnPurchase: async (trackPurchaseRequestDto: TrackPurchaseRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'trackPurchaseRequestDto' is not null or undefined
            assertParamExists('eventsControllerOnPurchase', 'trackPurchaseRequestDto', trackPurchaseRequestDto)
            const localVarPath = `/events/purchase`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(trackPurchaseRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EventsApi - functional programming interface
 * @export
 */
export const EventsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EventsApiAxiosParamCreator(configuration)
    return {
        /**
         * Log when the customer adds a product to the cart.
         * @summary 
         * @param {TrackAddToCartRequestDto} trackAddToCartRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventsControllerOnAddToCart(trackAddToCartRequestDto: TrackAddToCartRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TrackResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eventsControllerOnAddToCart(trackAddToCartRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Log when the customer views a page.
         * @summary 
         * @param {TrackPageViewRequestDto} trackPageViewRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventsControllerOnPageView(trackPageViewRequestDto: TrackPageViewRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TrackResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eventsControllerOnPageView(trackPageViewRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Log when the customer purchases a product.
         * @summary 
         * @param {TrackPurchaseRequestDto} trackPurchaseRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async eventsControllerOnPurchase(trackPurchaseRequestDto: TrackPurchaseRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TrackResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.eventsControllerOnPurchase(trackPurchaseRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EventsApi - factory interface
 * @export
 */
export const EventsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EventsApiFp(configuration)
    return {
        /**
         * Log when the customer adds a product to the cart.
         * @summary 
         * @param {TrackAddToCartRequestDto} trackAddToCartRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsControllerOnAddToCart(trackAddToCartRequestDto: TrackAddToCartRequestDto, options?: any): AxiosPromise<TrackResponseDto> {
            return localVarFp.eventsControllerOnAddToCart(trackAddToCartRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Log when the customer views a page.
         * @summary 
         * @param {TrackPageViewRequestDto} trackPageViewRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsControllerOnPageView(trackPageViewRequestDto: TrackPageViewRequestDto, options?: any): AxiosPromise<TrackResponseDto> {
            return localVarFp.eventsControllerOnPageView(trackPageViewRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Log when the customer purchases a product.
         * @summary 
         * @param {TrackPurchaseRequestDto} trackPurchaseRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        eventsControllerOnPurchase(trackPurchaseRequestDto: TrackPurchaseRequestDto, options?: any): AxiosPromise<TrackResponseDto> {
            return localVarFp.eventsControllerOnPurchase(trackPurchaseRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EventsApi - object-oriented interface
 * @export
 * @class EventsApi
 * @extends {BaseAPI}
 */
export class EventsApi extends BaseAPI {
    /**
     * Log when the customer adds a product to the cart.
     * @summary 
     * @param {TrackAddToCartRequestDto} trackAddToCartRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public eventsControllerOnAddToCart(trackAddToCartRequestDto: TrackAddToCartRequestDto, options?: AxiosRequestConfig) {
        return EventsApiFp(this.configuration).eventsControllerOnAddToCart(trackAddToCartRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Log when the customer views a page.
     * @summary 
     * @param {TrackPageViewRequestDto} trackPageViewRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public eventsControllerOnPageView(trackPageViewRequestDto: TrackPageViewRequestDto, options?: AxiosRequestConfig) {
        return EventsApiFp(this.configuration).eventsControllerOnPageView(trackPageViewRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Log when the customer purchases a product.
     * @summary 
     * @param {TrackPurchaseRequestDto} trackPurchaseRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EventsApi
     */
    public eventsControllerOnPurchase(trackPurchaseRequestDto: TrackPurchaseRequestDto, options?: AxiosRequestConfig) {
        return EventsApiFp(this.configuration).eventsControllerOnPurchase(trackPurchaseRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * PerformanceApi - axios parameter creator
 * @export
 */
export const PerformanceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Log a click when the customer clicks on the suggestion.
         * @summary 
         * @param {TrackClickRequestDto} trackClickRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        performanceControllerOnClick: async (trackClickRequestDto: TrackClickRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'trackClickRequestDto' is not null or undefined
            assertParamExists('performanceControllerOnClick', 'trackClickRequestDto', trackClickRequestDto)
            const localVarPath = `/performance/click`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(trackClickRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Log an impression when the suggestion is exposed to the customer.
         * @summary 
         * @param {TrackImpressionRequestDto} trackImpressionRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        performanceControllerOnImpression: async (trackImpressionRequestDto: TrackImpressionRequestDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'trackImpressionRequestDto' is not null or undefined
            assertParamExists('performanceControllerOnImpression', 'trackImpressionRequestDto', trackImpressionRequestDto)
            const localVarPath = `/performance/impression`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(trackImpressionRequestDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PerformanceApi - functional programming interface
 * @export
 */
export const PerformanceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PerformanceApiAxiosParamCreator(configuration)
    return {
        /**
         * Log a click when the customer clicks on the suggestion.
         * @summary 
         * @param {TrackClickRequestDto} trackClickRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async performanceControllerOnClick(trackClickRequestDto: TrackClickRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TrackResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.performanceControllerOnClick(trackClickRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Log an impression when the suggestion is exposed to the customer.
         * @summary 
         * @param {TrackImpressionRequestDto} trackImpressionRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async performanceControllerOnImpression(trackImpressionRequestDto: TrackImpressionRequestDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TrackResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.performanceControllerOnImpression(trackImpressionRequestDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PerformanceApi - factory interface
 * @export
 */
export const PerformanceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PerformanceApiFp(configuration)
    return {
        /**
         * Log a click when the customer clicks on the suggestion.
         * @summary 
         * @param {TrackClickRequestDto} trackClickRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        performanceControllerOnClick(trackClickRequestDto: TrackClickRequestDto, options?: any): AxiosPromise<TrackResponseDto> {
            return localVarFp.performanceControllerOnClick(trackClickRequestDto, options).then((request) => request(axios, basePath));
        },
        /**
         * Log an impression when the suggestion is exposed to the customer.
         * @summary 
         * @param {TrackImpressionRequestDto} trackImpressionRequestDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        performanceControllerOnImpression(trackImpressionRequestDto: TrackImpressionRequestDto, options?: any): AxiosPromise<TrackResponseDto> {
            return localVarFp.performanceControllerOnImpression(trackImpressionRequestDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PerformanceApi - object-oriented interface
 * @export
 * @class PerformanceApi
 * @extends {BaseAPI}
 */
export class PerformanceApi extends BaseAPI {
    /**
     * Log a click when the customer clicks on the suggestion.
     * @summary 
     * @param {TrackClickRequestDto} trackClickRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PerformanceApi
     */
    public performanceControllerOnClick(trackClickRequestDto: TrackClickRequestDto, options?: AxiosRequestConfig) {
        return PerformanceApiFp(this.configuration).performanceControllerOnClick(trackClickRequestDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Log an impression when the suggestion is exposed to the customer.
     * @summary 
     * @param {TrackImpressionRequestDto} trackImpressionRequestDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PerformanceApi
     */
    public performanceControllerOnImpression(trackImpressionRequestDto: TrackImpressionRequestDto, options?: AxiosRequestConfig) {
        return PerformanceApiFp(this.configuration).performanceControllerOnImpression(trackImpressionRequestDto, options).then((request) => request(this.axios, this.basePath));
    }
}

