export class SearchedElement {
  constructor(
    private e: Element,
    private d: number = 0,
  ) {}

  get element() {
    return this.e;
  }

  get depth() {
    return this.d;
  }

  isLeaf() {
    let hasTextNode = false;
    for (let i = 0; i < this.e.childNodes.length; i++) {
      if (this.e.childNodes[i].nodeType === Node.TEXT_NODE) {
        hasTextNode = true;
      }
    }
    return this.e.children.length === 0 || hasTextNode;
  }
}

export const dfs = (
  e: Element,
  depth: number = 0,
  options: { maxDepth?: number; excludeTags?: string[] } = {},
): SearchedElement[] => {
  const { maxDepth, excludeTags } = options;
  if (excludeTags && excludeTags.includes(e.tagName.toLowerCase())) {
    return [];
  }

  const result: SearchedElement[] = [new SearchedElement(e, depth)];
  if (e.children.length === 0) {
    return result;
  }
  if (maxDepth !== undefined && depth >= maxDepth) {
    return result;
  }
  for (let i = 0; i < e.children.length; i++) {
    result.push(...dfs(e.children[i], depth + 1, options));
  }
  return result;
};

export const escapePath = (path: string): string => {
  return path.replace(/\\/g, "\\\\");
};

// https://stackoverflow.com/questions/3620116/get-css-path-from-dom-element
export const getCssSelector = (
  e: Element,
  maxDepth: number = 10000,
): string => {
  const path = [];
  let current: Element | ParentNode | ChildNode = e;
  for (let i = 0; i < maxDepth; i++) {
    if (current.nodeType !== Node.ELEMENT_NODE) {
      break;
    }
    let selector = current.nodeName.toLowerCase();
    if (selector === "html") {
      break;
    }
    const id = (current as Element).id;
    if (id) {
      selector = `${selector}#${id.replace(/[0-9]/g, "\\3$&")}`;
    } else {
      let nth = 1;
      for (
        let sib = current;
        sib.previousSibling && (sib = sib.previousSibling);
        sib != null
      ) {
        if (sib.nodeName.toLowerCase() == selector) nth++;
      }
      if (nth != 1) {
        selector = `${selector}:nth-of-type(${nth})`;
      }
    }
    path.unshift(selector);
    if (current.parentNode) {
      current = current.parentNode;
    }
  }
  return path.join(" > ");
};

export const doesElementBelongToDevTool = (e: Element): boolean => {
  let current = e;
  for (let i = 0; i < 10; i++) {
    if (current.classList.contains("adcio-dev-tool")) {
      return true;
    }
    if (current.parentElement === null) {
      break;
    }
    current = current.parentElement;
  }
  return false;
};

export const getDepth = (e: Element) => {
  let current = e.parentElement;
  let depth = 0;
  while (current != null) {
    current = current.parentElement;
    depth++;
  }
  return depth;
};

export const getElementAtDepth = (leaf: Element, depth: number) => {
  let current = leaf.parentElement;
  const parents = [leaf];
  while (current != null) {
    parents.push(current);
    current = current.parentElement;
  }

  if (parents.length <= depth) {
    return null;
  }

  return parents[parents.length - depth - 1];
};
