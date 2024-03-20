import { IMPRESSION_EVENT } from "lib/events/names";
import { AdcioImpressionObserverParams } from "./impression-observer.interface";

export class AdcioImpressionObserver {
  private filter?: (element: Element) => boolean;
  private iObserver?: IntersectionObserver;
  private mObserver?: MutationObserver;

  private isIntersected: boolean = false;
  private isMutated: boolean = false;

  constructor({ filter }: AdcioImpressionObserverParams = {}) {
    this.filter = filter;
  }

  private checkFilter(element: Element) {
    return (this.filter && this.filter(element)) || !this.filter;
  }

  private onIntersection(callback: () => void) {
    this.iObserver?.disconnect();
    this.isIntersected = true;

    if (this.isMutated && this.isIntersected) {
      callback();
    }
  }

  private onMutation(callback: () => void) {
    this.mObserver?.disconnect();
    this.isMutated = true;

    if (this.isMutated && this.isIntersected) {
      callback();
    }
  }

  private observeWithIntersectionObserver(
    element: Element,
    callback: (element: Element) => void,
  ) {
    this.iObserver = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.onIntersection(() => callback(element));
          }
        }),
      { threshold: 0.5 },
    );
    this.iObserver.observe(element);

    if (this.filter) {
      this.mObserver = new MutationObserver(() => {
        if (this.checkFilter(element)) {
          this.onMutation(() => callback(element));
        }
      });
      this.mObserver.observe(element, { attributes: true });
    } else {
      this.onMutation(() => callback(element));
    }
  }

  public observe(element: Element) {
    return this.observeWithIntersectionObserver(element, (element: Element) =>
      element.dispatchEvent(
        new CustomEvent(IMPRESSION_EVENT, {
          bubbles: true,
        }),
      ),
    );
  }

  public disconnect() {
    this.iObserver?.disconnect();
    this.mObserver?.disconnect();
  }
}
