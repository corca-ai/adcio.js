// import {
//   Configuration,
//   EventsApi,
//   PerformanceApi,
//   TrackAddToCartRequestDto,
//   TrackClickRequestDto,
//   TrackImpressionRequestDto,
//   TrackPageViewRequestDto,
//   TrackPurchaseRequestDto,
// } from "@lib/api/receiver/v1.0";

// import { TrackerStorage } from "./tracker-storage";
// import { SessionDto } from "@lib/nest/dto/session.dto";

// import { CartInfo } from "../client-api/api.interface";

// type OmitSessionFields<T> = Omit<
//   T,
//   "storeId" | "sessionId" | "deviceId" | "customerId"
// >;

// export class Tracker {
//   private storeId: string;
//   private sessionId: string;
//   private deviceId: string;
//   private customerId?: string;
//   private apiConfig: Configuration;
//   private storage: TrackerStorage;

//   constructor({
//     storeId,
//     sessionId,
//     deviceId,
//     receiverEndpoint,
//   }: {
//     storeId: string;
//     sessionId: string;
//     deviceId: string;
//     receiverEndpoint: string;
//   }) {
//     this.storeId = storeId;
//     this.sessionId = sessionId;
//     this.deviceId = deviceId;
//     this.apiConfig = new Configuration({
//       basePath: receiverEndpoint,
//       baseOptions: {
//         headers: {
//           Authorization: "",
//         },
//       },
//     });
//     this.storage = new TrackerStorage(`adcio-tracker-${storeId}`);
//   }

//   setCustomerId(customerId: string) {
//     this.customerId = customerId;
//   }

//   addedToCart(carts: CartInfo[]): CartInfo[] {
//     return this.storage.setCarts(carts);
//   }

//   getSessionDto(): SessionDto & { storeId: string } {
//     return {
//       storeId: this.storeId,
//       sessionId: this.sessionId,
//       deviceId: this.deviceId,
//       customerId: this.customerId,
//     };
//   }

//   async onPageView(params: OmitSessionFields<TrackPageViewRequestDto>) {
//     await new EventsApi(this.apiConfig).eventsControllerOnPageView({
//       ...params,
//       ...this.getSessionDto(),
//     });
//   }

//   async onImpression(params: TrackImpressionRequestDto) {
//     await new PerformanceApi(this.apiConfig).performanceControllerOnImpression({
//       ...params,
//     });
//   }

//   async onClick(params: TrackClickRequestDto) {
//     await new PerformanceApi(this.apiConfig).performanceControllerOnClick({
//       ...params,
//     });
//   }

//   async onAddToCart(
//     params: Omit<
//       OmitSessionFields<TrackAddToCartRequestDto>,
//       "requestId" | "adsetId"
//     >,
//   ) {
//     await new EventsApi(this.apiConfig).eventsControllerOnAddToCart({
//       ...params,
//       ...this.getSessionDto(),
//     });
//   }

//   async onPurchase(
//     params: Omit<
//       OmitSessionFields<TrackPurchaseRequestDto>,
//       "requestId" | "adsetId"
//     >,
//   ) {
//     await new EventsApi(this.apiConfig).eventsControllerOnPurchase({
//       ...params,
//       ...this.getSessionDto(),
//     });
//   }
// }
