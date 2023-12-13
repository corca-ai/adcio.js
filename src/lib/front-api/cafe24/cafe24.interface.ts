export interface ICAFE24API {
  instance: ICAFE24API[];
  MALL_ID: string;
  SHOP_NO: number;
  init: (appInfo: { client_id: string; version: string }) => ICAFE24API;
  initializeXhr: () => void;
  fullPath: (url: string) => string;
  getMemberID: (callback: (member_id: string) => void) => void;
  getEncryptedMemberId: (
    client_id: string,
    callback: (err: Error, memberId: string) => void,
  ) => void;
  getMemberInfo: (callback: (member: { id: string }) => void) => void;
  getCustomerIDInfo: (
    callback: (
      err: Error,
      customer_id: { id: { guest_id: string; member_id: string | null } },
    ) => void,
  ) => void;
  getCustomerInfo: (
    callback: (err: Error, customer: { customer: any }) => void,
  ) => void;
  getMileageInfo: (
    callback: (err: Error, mileage: { mileage: any }) => void,
  ) => void;
  getPointInfo: (callback: (err: Error, point: { point: any }) => void) => void;
  getDepositInfo: (
    callback: (err: Error, deposit: { deposit: any }) => void,
  ) => void;
  getCreditInfo: (
    callback: (err: Error, credit: { credit: any }) => void,
  ) => void;
  getCartList: (
    callback: (
      err: Error,
      carts: {
        carts: {
          shop_no: number;
          product_no: number;
          additional_option: null;
          attached_file_option: null;
          basket_product_no: number;
          product_price: number;
          quantity: string;
          selected_product: string;
          variant_code: string;
          option_id: string;
          is_set_product: string;
          set_product_no: number;
          delvtype: string;
        }[];
      },
    ) => void,
  ) => void;
  getCartInfo: (callback: (err: Error, cart: { cart: any }) => void) => void;
  getCartItemList: (
    callback: (err: Error, items: { items: any }) => void,
  ) => void;
  getCartCount: (callback: (err: Error, count: number) => void) => void;
  getCouponCount: (callback: (err: Error, count: number) => void) => void;
  getWishCount: (callback: (err: Error, count: number) => void) => void;
  getShopInfo: (callback: (err: Error, shop: { shop: any }) => void) => void;
  addCurrentProductToCart: (
    mall_id: string,
    time: any,
    app_key: string,
    member_id: string,
    hmac: string,
    callback: (err: Error, cart: { cart: any }) => void,
  ) => void;
  precreateOrder: (
    mall_id: string,
    time: any,
    app_key: string,
    member_id: string,
    hmac: string,
    callback: (err: Error, order: { order: any }) => void,
  ) => void;
  get: (url: string, callback: (err: Error, data: any) => void) => void;
  post: (
    url: string,
    params: any,
    callback: (err: Error, data: any) => void,
  ) => void;
  put: (
    url: string,
    params: any,
    callback: (err: Error, data: any) => void,
  ) => void;
  delete: (url: string, callback: (err: Error, data: any) => void) => void;
}

export interface ICAFE24 {
  API_DOMAIN: string;
  APPSCRIPT_ASSIGN_DATA: unknown[];
  APPSCRIPT_SDK_DATA: string[];
  AVAILABLE_LANGUAGE: string[];
  AVAILABLE_LANGUAGE_CODES: Record<string, string>;
  COMMON_UTIL: Record<string, (...args: unknown[]) => unknown>;
  CRYPTOKEY: Record<string, (...args: unknown[]) => unknown>;
  CURRENCY_INFO: Record<string, (...args: unknown[]) => unknown>;
  EXTERNAL_FRONT_APPSCRIPT: Record<string, (...args: unknown[]) => unknown>;
  FRONTEND: { FW_MANIFEST_CACHE_REVISION: number; IS_WEB_VIEW: "T" | "F" };
  FRONT_EXTERNAL_SCRIPT_VARIABLE_DATA: {
    common_member_id_crypt: string;
  } & Partial<{ member_id_crypt: string }> &
    Partial<{
      order_id: string;
      payed_amount: number;
      total_basic_ship_fee: number;
      order_product: {
        category_name_1: string;
        category_no_1: number;
        product_code: string;
        product_name: string;
        product_no: number; // product.code
        product_price: number;
        quantity: number;
        sub_total_price: number;
        sum_total_opt_price: number;
      }[];
    }>;
  FRONT_JS_CONFIG_MANAGE: unknown;
  FRONT_JS_CONFIG_MEMBER: unknown;
  FRONT_JS_CONFIG_SHOP: unknown;
  FRONT_LANGUAGE_CODE: string;
  FRONT_XANS_INTERPRETER: Record<string, (...args: unknown[]) => unknown>;
  FRONT_XANS_TEMPLATE: Record<string, (...args: unknown[]) => unknown>;
  GLOBAL_BOARD_LANGUAGE_CODES: unknown;
  GLOBAL_DATETIME: unknown;
  GLOBAL_DATETIME_INFO: unknown;
  GLOBAL_INFO: Record<string, (...args: unknown[]) => unknown>;
  GLOBAL_MALL_LANGUAGE_CODES: unknown;
  GLOBAL_MEMBER_LANGUAGE_CODES: unknown;
  GLOBAL_ORDER_LANGUAGE_CODES: unknown;
  GLOBAL_PRODUCT_LANGUAGE_CODES: unknown;
  KAKAO_PIXEL_BRIDGE: Record<string, (...args: unknown[]) => unknown>;
  MANAGE_MEMBER: Record<string, (...args: unknown[]) => unknown>;
  MANAGE_PRODUCT_RECENT: Record<string, (...args: unknown[]) => unknown>;
  MANIFEST_CACHE_REVISION: string;
  MOBILE: boolean;
  MOBILE_DEVICE: boolean;
  MOBILE_USE: boolean;
  MOBILE_UTIL: Record<string, (...args: unknown[]) => unknown>;
  MOBILE_WEB: boolean;
  PLUSAPP_BRIDGE: Record<string, (...args: unknown[]) => unknown>;
  ROOT_DOMAIN: string;
  ROUTE: {
    is_mobile: boolean;
    is_need_route: boolean;
    language_code: string;
    path: { origin: string; prefix: string; result: string };
    shop_no: number;
    skin_code: string;
  };
  SDE_SHOP_NUM: number;
  SHOP: Record<string, (...args: unknown[]) => unknown>;
  SHOP_CURRENCY_FORMAT: unknown;
  SHOP_CURRENCY_INFO: unknown;
  SHOP_LIB_INFO: Record<string, (...args: unknown[]) => unknown>;
  SHOP_PRICE: Record<string, (...args: unknown[]) => unknown>;
  SHOP_PRICE_FORMAT: Record<string, (...args: unknown[]) => unknown>;
  SHOP_PRICE_UTIL: Record<string, (...args: unknown[]) => unknown>;
  SKIN_CODE: string;
}
