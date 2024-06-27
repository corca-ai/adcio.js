import { LocalStorage } from "./local.storage";
import { MemoryStorage } from "./memory.storage";
import { SessionStorage } from "./session.storage";
import { Storage, StorageParams } from "./storage.interface";

export function createStorage(config: StorageParams): Storage<string> {
  if (config.local) {
    return new LocalStorage(config.local);
  } else if (config.session) {
    return new SessionStorage(config.session);
  } else if (config.memory) {
    return new MemoryStorage(config.memory);
  } else {
    throw new Error("Invalid StorageParams");
  }
}
