export const waitForDOM = () => {
  if (document.readyState === "complete") {
    return;
  }
  return new Promise<Document>((res) =>
    document.addEventListener("DOMContentLoaded", function () {
      res(document);
    }),
  );
};

export const waitForElement = (
  selector: string,
  wrapper: Element | Document = document,
  timeout?: number,
) => {
  return new Promise<Element | null>((resolve) => {
    const element = wrapper.querySelector(selector);
    if (element) {
      return resolve(element);
    }
    const observer = new MutationObserver((mutationList, observer) => {
      const element = wrapper.querySelector(selector);
      if (element) {
        observer.disconnect();
        return resolve(element);
      }
    });

    observer.observe(wrapper, { childList: true, subtree: true });
    if (timeout) {
      setTimeout(() => {
        observer.disconnect();
        resolve(null);
      }, timeout);
    }
  });
};
