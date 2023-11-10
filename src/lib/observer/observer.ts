export class AdcioObserver {
  static async readyDOM() {
    if (document.readyState === "complete") {
      return;
    }
    return new Promise<Document>((res) =>
      document.addEventListener("DOMContentLoaded", function () {
        res(document);
      }),
    );
  }
}
