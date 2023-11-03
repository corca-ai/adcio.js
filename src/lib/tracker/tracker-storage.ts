import { CartInfo } from "../client-api/api.interface";
import { createStorage } from "../storage/storage.factory";
import { Storage } from "../storage/storage.interface";

export class TrackerStorage {
  private storage: Storage;
  private carts: CartInfo[];

  constructor(key: string) {
    this.storage = createStorage({
      local: { key },
    });
    this.carts = [];
    this.load();
  }

  serialize(): string {
    return JSON.stringify({ carts: this.carts });
  }

  save() {
    this.storage.set(this.serialize());
  }

  prune() {}

  load() {
    try {
      const parsed = JSON.parse(this.storage.get() || '{"suggested":{}}');
      if (!parsed || !parsed.carts) {
        throw new Error("Invalid data");
      }
      this.carts = parsed.carts;
      this.prune();
    } catch (e) {
      console.warn("Failed to load adcio tracker storage: ", e);
      this.carts = [];
    }
  }

  getCarts(): CartInfo[] {
    return this.carts;
  }

  setCarts(carts: CartInfo[]): CartInfo[] {
    const added = carts.filter(
      (cart) => !this.carts.find((c) => c.id === cart.id),
    );
    this.carts = carts;
    this.save();
    return added;
  }
}
