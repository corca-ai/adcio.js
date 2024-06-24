import {
  SessionDto,
  CustomerId,
  DeviceId,
  SessionId,
  StoreId,
} from "@adcio.js/api/dto/session.dto";
import { AdcioCoreParams } from "./core.interface";
import { createStorage } from "../storage/storage.factory";
import { Storage } from "../storage/storage.interface";

export class AdcioCore {
  private sessionStorage: Storage<string>;

  private clientId: StoreId;
  private serverMode: boolean;

  private deviceId: DeviceId;
  private customerId?: CustomerId;

  constructor({
    clientId,
    customerId,
    serverMode,
    deviceId,
    sessionId,
  }: AdcioCoreParams) {
    this.clientId = clientId;

    this.serverMode = serverMode || false;
    if (this.serverMode) {
      if (!deviceId || !sessionId) {
        throw new Error("Server mode requires deviceId and sessionId");
      }
      this.deviceId = deviceId;
      this.sessionStorage = createStorage({
        memory: { initialValue: sessionId },
      });
    } else {
      this.deviceId = createStorage({
        local: { key: `adcio-device-${clientId}` },
      }).getOrSet();
      this.sessionStorage = createStorage({
        session: {
          key: `adcio-session-${clientId}`,
          expiration: 30 * 60 * 1000, // GA default: 30 mins
        },
      });
      this.sessionStorage.getOrSet(); // initialize sessionId if it's expired
    }

    this.customerId = customerId;
  }

  public setCustomerId(customerId: CustomerId) {
    this.customerId = customerId;
  }

  public getSessionDto(): SessionDto {
    return {
      storeId: this.getStoreId(),
      sessionId: this.getSessionId(),
      deviceId: this.getDeviceId(),
      customerId: this.getCustomerId(),
    };
  }

  public getClientId(): StoreId {
    return this.clientId;
  }

  public getSessionId(): SessionId {
    return this.sessionStorage.get();
  }

  public getStoreId(): StoreId {
    return this.clientId;
  }

  public getDeviceId(): DeviceId {
    return this.deviceId;
  }

  public getCustomerId(): CustomerId | undefined {
    return this.customerId;
  }
}
