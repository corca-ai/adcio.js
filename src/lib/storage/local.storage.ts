import { LocalStorageParams, Storage } from "./storage.interface";

export class LocalStorage implements Storage<string> {
  private key: string = "";

  constructor(config: LocalStorageParams) {
    const { key } = config;
    this.key = key;
  }

  set(id: string): void {
    if (!localStorage) return;
    localStorage.setItem(this.key, id);
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
    if (!localStorage) return "";
    const value = localStorage.getItem(this.key);
    if (!value) return "";

    return value;
  }
}
