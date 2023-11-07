import { AdcioMetaTagProps } from "./meta-tag.interface";

// for cafe24
export class AdcioMetaTag {
  property?: string;
  name?: string;

  constructor({ property, name }: AdcioMetaTagProps) {
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
