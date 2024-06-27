import { MemoryStorageParams, Storage } from "./storage.interface";

export class MemoryStorage implements Storage<string> {
  private value: string;

  constructor(config: MemoryStorageParams) {
    this.value = config.initialValue || "";
  }

  reset(): string {
    this.set("");
    return this.getOrSet();
  }

  set(id: string): void {
    this.value = id;
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
    return this.value;
  }
}
