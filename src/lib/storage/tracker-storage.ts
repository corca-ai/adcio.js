import { Cart } from "../front-api/front-api.interface";
import { CartsStorageParams, Storage } from "../storage/storage.interface";

export class CartsStorage implements Storage<Cart[]> {
  private key: string = "";
  private carts: Cart[];

  constructor(config: CartsStorageParams) {
    const { key } = config;
    this.key = key;
    this.carts = [];
  }

  getOrSet(): Cart[] {
    try {
      const data = JSON.parse(localStorage.getItem(this.key) || "{}");
      if (!data) {
        throw new Error("Invalid data");
      }
      this.carts = data.carts || [];
    } catch (e) {
      console.warn("Failed to load adcio tracker storage: ", e);
      this.carts = [];
    }
    return this.carts;
  }

  get(): Cart[] {
    return this.carts;
  }

  set(carts: Cart[]): void {
    this.carts = carts;
    localStorage.setItem(this.key, JSON.stringify({ carts: this.carts }));
  }
}
