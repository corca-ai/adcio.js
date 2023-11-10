import { SessionStorageParams, Storage } from "./storage.interface";

export class SessionStorage implements Storage {
  private key: string = "";

  constructor(config: SessionStorageParams) {
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
      id = crypto.randomUUID();
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
