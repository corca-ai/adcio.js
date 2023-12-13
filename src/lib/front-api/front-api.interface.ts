import { SuggestionRequestDto } from "api/controller/v1";

export interface Customer
  extends Pick<SuggestionRequestDto, "birthYear" | "area" | "gender"> {
  id: string;
}

export interface Order {
  id: string;
  products: {
    idOnStore: string;
    quantity: number;
    price: number;
    subTotalPrice?: number;
    sumTotalOptPrice?: number;
  }[];
  amount: number;
}

export interface Cart {
  id: string;
  productIdOnStore: string;
  productPrice: number;
  quantity: number;
}

export interface Product {
  idOnStore: string;
}

type Nullable<T> = T | null;
type Awaitable<T> = Promise<T> | T;
type NullableAwaitable<T> = Awaitable<Nullable<T>>;

export interface FrontAPI {
  init(): Awaitable<void>;
  getCustomer(): NullableAwaitable<Customer>;
  getProduct(): NullableAwaitable<Product>;
  getOrder(): NullableAwaitable<Order>;
  getCarts(): NullableAwaitable<Cart[]>;
}
