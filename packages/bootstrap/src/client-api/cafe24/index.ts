import { getMeta, getQuery } from "@adcio.js/core";
import { ICAFE24, ICAFE24API } from "./cafe24.interface";
import { Cart, Customer, ClientAPI, Order } from "../client-api.interface";

const CORCA_CAFE24_CLIENT_ID = "8HE5BizGD9agkHIObMfXRF";
const CORCA_CAFE24_API_VERSION = "2023-06-01";

export class Cafe24API implements ClientAPI {
  private authorized: boolean;
  private api: ICAFE24API;

  constructor() {
    this.api = (window as any).CAFE24API;
    this.authorized = false;
  }

  get data(): ICAFE24 {
    return (window as any).CAFE24;
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

  isMobile() {
    return this.data?.MOBILE !== undefined ? this.data.MOBILE : null;
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

  getPageName() {
    return getMeta({ name: "path_role" });
  }

  getProduct() {
    const idOnStore = getMeta({ property: "product:productId" });
    if (!idOnStore) {
      return null;
    }
    return { idOnStore };
  }

  getCategory() {
    const idOnStore = getQuery("cate_no");
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

  getSearch() {
    const query = getQuery("keyword");
    if (!query) {
      return null;
    }
    const found = !!document.querySelector(".xans-search-result");
    const pathname = new URL(window.location.href).pathname;

    return { query, found, pathname };
  }
}
