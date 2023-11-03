import { v4 as uuidv4 } from "uuid";
import { Storage } from "./storage.interface";

export interface LocalStorageConfig {
  key: string;
}

export class LocalStorage implements Storage {
  private key: string = "";

  constructor(config: LocalStorageConfig) {
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
      id = uuidv4();
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
