export interface StorageParams {
  local?: LocalStorageParams;
  session?: SessionStorageParams;
}
export interface Storage<T> {
  set(data: T): void;
  getOrSet(): T;
  get(): T;
}

export interface LocalStorageParams {
  key: string;
}

export interface SessionStorageParams {
  key: string;
  expiration?: number;
}

export interface CartsStorageParams {
  key: string;
}
