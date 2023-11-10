export interface StorageParams {
  local?: LocalStorageParams;
  session?: SessionStorageParams;
}
export interface Storage {
  set(Id: string): void;
  getOrSet(): string;
  get(): string;
}

export interface LocalStorageParams {
  key: string;
}

export interface SessionStorageParams {
  key: string;
  expiration?: number;
}
