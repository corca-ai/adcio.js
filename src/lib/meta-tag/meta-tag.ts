import { AdcioMetaTagParams } from "./meta-tag.interface";

/**
 * This class is making for cafe24 client.
 *
 * @description
 * It is used to obtain the productIOn Store of a shopping mall created with cafe24.
 */
export class AdcioMetaTag {
  property?: string;
  name?: string;

  constructor({ property, name }: AdcioMetaTagParams) {
    this.property = property;
    this.name = name;
  }

  getQuery(): string {
    if (this.property) {
      return `meta[property="${this.property}"]`;
    } else if (this.name) {
      return `meta[name="${this.name}"]`;
    } else {
      throw new Error("property or name is required");
    }
  }

  getContent(): string | null {
    const query = this.getQuery();
    const element = document.querySelector(query);
    if (!element) {
      return null;
    }
    return element.getAttribute("content");
  }
}
