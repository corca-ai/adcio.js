import {
  ProductSuggestionResponseDto,
  BannerSuggestionResponseDto,
} from "@adcio.js/api/controller/v1";

export abstract class AbstractRenderer {
  protected resolveValueFromPath(path: string, data: any): string {
    const keys = path.split(".");
    let value = { ...data };
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (!(typeof value === "object")) {
        break;
      }
      value = value[key];
    }
    return value;
  }

  protected renderTemplate(template: string, data: any): string {
    return (
      template
        // simple variable
        .replace(/\${[A-Za-z0-9_.]*}/g, (match: string) => {
          const path = match.replace("${", "").replace("}", "");
          const value = this.resolveValueFromPath(path, data);
          return value || "";
        })
        // ternary operator
        .replace(/\${[A-Za-z0-9_.]*\s*\?.*\:.*}/g, (match: string) => {
          const expression = match.replace("${", "").replace("}", "");
          const [path, trueValue, falseValue] = expression.split(/\?|:/);
          const value = this.resolveValueFromPath(path.trim(), data);
          return value ? trueValue.trim() : falseValue.trim();
        })
        // string multiplication
        .replace(
          /\${[A-Za-z0-9\-\_]*\s*\*\s*[A-Za-z0-9_.]*}/g,
          (match: string) => {
            const expression = match.replace("${", "").replace("}", "");
            const [value, path] = expression.split("*");
            const times = this.resolveValueFromPath(path.trim(), data);
            return (value.trim() + " ").repeat(parseInt(times, 10)).trimEnd();
          },
        )
        // replace
        .replace(/\${[A-Za-z0-9_.]*\.replace\(.*,.*\)}/g, (match: string) => {
          const expression = match.replace("${", "").replace("}", "");
          const [path, args] = expression.split(".replace");
          const [from, to] = args.replace("(", "").replace(")", "").split(",");
          const value = this.resolveValueFromPath(path.trim(), data);
          return value.replace(from, to);
        })
    );
  }

  abstract render(
    recommendation: ProductSuggestionResponseDto | BannerSuggestionResponseDto,
    adcioInstance: any, // import Adcio from @adcio.js/core
  ): Element;
}
