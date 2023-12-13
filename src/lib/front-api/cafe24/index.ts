import { getMeta } from "adcio";
import { ICAFE24, ICAFE24API } from "./cafe24.interface";
import { Cart, Customer, FrontAPI, Order } from "../front-api.interface";

const CORCA_CAFE24_CLIENT_ID = "8HE5BizGD9agkHIObMfXRF";
const CORCA_CAFE24_API_VERSION = "2023-06-01";

export class Cafe24API implements FrontAPI {
  private authorized: boolean;
  private api: ICAFE24API;
  private data: ICAFE24;

  constructor() {
    this.api = (window as any).CAFE24API;
    this.data = (window as any).CAFE24;
    this.authorized = false;
  }

  init() {
    this.api = (window as any).CAFE24API;
    try {
      this.api.init({
        client_id: CORCA_CAFE24_CLIENT_ID,
        version: CORCA_CAFE24_API_VERSION,
      });
      this.authorized = true;
    } catch (e) {
      console.warn("Failed to initialize cafe24 api", e);
      this.authorized = false;
    }
  }

  getCustomer() {
    return new Promise<Customer | null>((resolve, reject) => {
      if (this.authorized) {
        this.api.getCustomerInfo((err, res) => {
          if (err) {
            reject(err);
          } else {
            resolve({ id: res.customer.member_id });
          }
        });
      } else {
        this.api.getCustomerIDInfo((err, res) => {
          if (err) {
            reject(err);
          } else if (!res.id.member_id) {
            resolve(null);
          } else {
            resolve({
              id: res.id.member_id,
            });
          }
        });
      }
    });
  }

  getProduct() {
    const idOnStore = getMeta({ property: "product:productId" });
    if (!idOnStore) {
      return null;
    }
    return { idOnStore };
  }

  getCarts() {
    return new Promise<Cart[] | null>((resolve, reject) => {
      this.api.getCartList((err, res) => {
        if (err) {
          reject(err);
        } else if (!res.carts) {
          resolve(null);
        } else {
          resolve(
            res.carts.map((cart) => ({
              id: `${cart.basket_product_no}`,
              productIdOnStore: `${cart.product_no}`,
              productPrice: cart.product_price,
              quantity: Number(cart.quantity),
            })),
          );
        }
      });
    });
  }

  getOrder() {
    return new Promise<Order | null>((resolve) => {
      const { order_id, order_product, payed_amount, total_basic_ship_fee } =
        this.data.FRONT_EXTERNAL_SCRIPT_VARIABLE_DATA;
      if (order_id && order_product && payed_amount !== undefined) {
        resolve({
          id: order_id,
          products: order_product.map((product) => ({
            idOnStore: `${product.product_no}`,
            quantity: product.quantity,
            price: product.product_price,
            subTotalPrice: product.sub_total_price,
            sumTotalOptPrice: product.sum_total_opt_price,
          })),
          amount: total_basic_ship_fee
            ? payed_amount - total_basic_ship_fee
            : payed_amount,
        });
      } else {
        resolve(null);
      }
    });
  }
}
