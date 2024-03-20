import { AdcioAnalyticsOnAddToCartParams } from "lib/analytics";

interface ICafe24ActionBasket {
  selected_item: string[]; // `${quantity}||${model_name}`
  needed: string[];
  optionIds: string[];
  basket_type: string;
  ch_ref: string;
  command: string;
  delvType: string;
  display_group: number;
  has_option: "T" | "F";
  is_direct_buy: "T" | "F";
  is_individual: "T" | "F";
  main_cate_no: number;
  multi_option_data: string;
  multi_option_schema: string;
  option1: string;
  option2: string;
  option_type: "T" | "F";
  prd_detail_ship_type: string;
  product_max: number;
  product_max_type: string;
  product_min: number;
  product_name: string;
  product_no: number;
  product_price: number;
  quantity: number;
  redirect: number;
  relation_product: "yes" | "no";
}

export class Cafe24ActionBasket {
  private data: ICafe24ActionBasket;

  constructor(data: ICafe24ActionBasket) {
    this.data = data;
  }

  static fromArg(arg: string) {
    const data = decodeURI(arg)
      .split("&")
      .reduce((acc, cur) => {
        const [key, value] = cur.split("=");
        if (key.endsWith("[]")) {
          const trimmedKey = key.slice(0, -2) as keyof ICafe24ActionBasket;
          return {
            ...acc,
            [trimmedKey]: [...((acc[trimmedKey] as string[]) || []), value],
          };
        }
        return {
          ...acc,
          [key]: isNaN(Number(value)) ? value : Number(value),
        };
      }, {} as ICafe24ActionBasket);
    return new Cafe24ActionBasket(data);
  }

  toCart(): AdcioAnalyticsOnAddToCartParams {
    return {
      cartId: String(Date.now()),
      productIdOnStore: String(this.data.product_no),
      categoryIdOnStore: String(this.data.main_cate_no),
      quantity: this.data.selected_item.reduce(
        (acc, cur) => acc + Number(cur.split("||")[0]),
        0,
      ),
    };
  }
}
