import { ElementSelector } from "./element-selector";
import { getCssSelector } from "./search";

export class Candidate {
  private element: Element | null;
  private onHighlight: () => void;
  private onSelect: () => void;

  constructor({
    element,
    onHighlight,
    onSelect,
  }: {
    element: Element | null;
    onHighlight?: () => void;
    onSelect?: () => void;
  }) {
    this.element = element || null;
    this.onHighlight = onHighlight || (() => {});
    this.onSelect = onSelect || (() => {});
  }

  getElement() {
    return this.element;
  }

  select() {
    this.onSelect();
  }

  highlight() {
    this.onHighlight();
  }

  setOnSelect(onSelect: () => void) {
    this.onSelect = onSelect;
  }

  cssSelector() {
    if (!this.element) {
      throw new Error("No element");
    }
    return getCssSelector(this.element);
  }

  name() {
    if (!this.element) {
      return "Skip";
    }
    return this.cssSelector();
  }
}

export class ListedElementSelector extends ElementSelector {
  private candidates: Candidate[] = [];
  private onAdd: (c: Candidate) => void;
  private onStop: () => void;

  constructor({
    onAdd,
    onStop,
  }: {
    onAdd?: (c: Candidate) => void;
    onStop?: () => void;
  }) {
    super();
    this.onAdd = onAdd || (() => {});
    this.onStop = onStop || (() => {});
  }

  add(element: Element | null) {
    const candidate = new Candidate({
      element,
      onHighlight: () => this.dispatchSetCurrent(element),
    });
    this.candidates.push(candidate);
    this.onAdd(candidate);
    return candidate;
  }

  stop() {
    this.onStop();
    this.hoverOut();
  }

  select(): Promise<Element | null> {
    return new Promise<Element | null>((resolve) => {
      this.candidates.forEach((candidate) => {
        candidate.setOnSelect(() => {
          const selected = this.getCurrent();
          if (!selected) {
            resolve(null);
          }
          this.stop();
          resolve(candidate.getElement());
        });
      });
    });
  }
}
