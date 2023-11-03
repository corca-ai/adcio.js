import { LocalStorageConfig } from './local.storage';
import { SessionStorageConfig } from './session.storage';

export interface StorageConfig {
  local?: LocalStorageConfig;
  session?: SessionStorageConfig;
}
export interface Storage {
  set(Id: string): void;
  getOrSet(): string;
  get(): string;
}
