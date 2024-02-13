import {
  SessionDto,
  CustomerId,
  DeviceId,
  SessionId,
  StoreId,
} from "api/dto/session.dto";
import { createStorage } from "lib/storage/storage.factory";
import { Storage } from "lib/storage/storage.interface";
import { AdcioCoreParams } from "./core.interface";

export class AdcioCore {
  private sessionStorage: Storage<string>;

  private clientId: StoreId;
  private deviceId: DeviceId;
  private customerId?: CustomerId;

  constructor({ clientId, customerId }: AdcioCoreParams) {
    this.sessionStorage = createStorage({
      session: {
        key: `adcio-session-${clientId}`,
        expiration: 30 * 60 * 1000, // GA default: 30 mins
      },
    });
    this.sessionStorage.getOrSet(); // initialize sessionId if it's expired

    this.deviceId = createStorage({
      local: { key: `adcio-device-${clientId}` },
    }).getOrSet();

    this.clientId = clientId;
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
      userAgent: navigator.userAgent,
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
