import { v4 as uuidv4 } from "uuid";
import { Storage } from "./storage.interface";

export interface SessionStorageConfig {
  key: string;
  expiration?: number;
}

export class SessionStorage implements Storage {
  private key: string = "";

  constructor(config: SessionStorageConfig) {
    const { key } = config;
    this.key = key;
  }

  set(id: string): void {
    if (!sessionStorage) return;
    sessionStorage.setItem(this.key, id);
  }

  getOrSet(): string {
    let id = this.get();
    if (!id) {
      id = uuidv4();
      this.set(id);
    }
    return id;
  }

  get(): string {
    if (!sessionStorage) return "";
    const value = sessionStorage.getItem(this.key);
    if (!value) return "";

    return value;
  }
}
