import { SuggestionRequestDto } from "@adcio.js/api/controller/v1";

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

export interface Category {
  idOnStore: string;
}

type Nullable<T> = T | null;
type Awaitable<T> = Promise<T> | T;
type NullableAwaitable<T> = Awaitable<Nullable<T>>;

export interface ClientAPI {
  init(): Awaitable<void>;
  getCustomer(): NullableAwaitable<Customer>;
  getProduct(): NullableAwaitable<Product>;
  getCategory(): NullableAwaitable<Category>;
  getOrder(): NullableAwaitable<Order>;
  getCarts(): NullableAwaitable<Cart[]>;
}
