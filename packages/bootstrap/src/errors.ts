export class AdcioError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "AdcioError";
  }
}
