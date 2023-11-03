import { LocalStorage } from "./local.storage";
import { SessionStorage } from "./session.storage";
import { Storage, StorageConfig } from "./storage.interface";

export function createStorage(config: StorageConfig): Storage {
  if (config.local) {
    return new LocalStorage(config.local);
  } else if (config.session) {
    return new SessionStorage(config.session);
  } else {
    throw new Error("Invalid StorageConfig");
  }
}
