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
    return template.replace(/\${[A-Za-z0-9_.]*}/g, (match: string) => {
      const path = match.replace("${", "").replace("}", "");
      const value = this.resolveValueFromPath(path, data);
      return value || "";
    });
  }
}
