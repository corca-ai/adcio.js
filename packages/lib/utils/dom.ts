export const waitForDOM = () => {
  if (document.readyState === "complete") {
    return Promise.resolve(document);
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

export const getMeta = (query: { name?: string; property?: string }) => {
  const { property, name } = query;

  let selector = "";
  if (property) {
    selector = `meta[property="${property}"]`;
  } else if (name) {
    selector = `meta[name="${name}"]`;
  }

  if (!selector) {
    return null;
  }

  const element = document.querySelector(selector);
  if (!element) {
    return null;
  }

  return element.getAttribute("content");
};

export const getQuery = (key: string) => {
  const url = new URL(window.location.href);
  return url.searchParams.get(key);
};

export type CreateElementOptions = {
  textContent?: string;
  classList?: string[];
  attributes?: Record<string, string>;
  parent?: Element;
};

export const createElement = (
  tag: string,
  options: CreateElementOptions = {},
) => {
  const element = document.createElement(tag);
  for (const className of options.classList || []) {
    element.classList.add(className);
  }
  for (const [key, value] of Object.entries(options.attributes || {})) {
    element.setAttribute(key, value);
  }
  if (options.textContent) {
    element.textContent = options.textContent;
  }
  if (options.parent) {
    options.parent.appendChild(element);
  }
  return element;
};

export type CreateNestedElementOptions = CreateElementOptions & {
  tag: string;
  children?: CreateNestedElementOptions[];
};

export const createNestedElement = (options: CreateNestedElementOptions) => {
  const { tag, children, ...rest } = options;
  const element = createElement(tag, rest);
  for (const child of children || []) {
    createNestedElement({ ...child, parent: element });
  }
  return element;
};

export const createElementFromHTML = (html: string) => {
  const div = document.createElement("div");
  div.innerHTML = html.trim();
  return div as Element;
};
