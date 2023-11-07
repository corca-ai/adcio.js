import { LogOptionsDto } from "api/controller/v1";
import { AdcioObserver } from "lib/observer";

interface AdcioImpressionDetectorArgs {
  logOption: LogOptionsDto;
  selector: string;
  detector?: (element: Element) => boolean;
}

export class AdcioImpressionDetector {
  static IMPRESSION_EVENT = "impression";
  private logOption: LogOptionsDto;
  private selector: string;
  private detector?: (element: Element) => boolean;

  constructor({ logOption, selector, detector }: AdcioImpressionDetectorArgs) {
    this.logOption = logOption;
    this.selector = selector;

    if (!detector) {
      this.detector = detector;
    }
  }

  public async detect(onImpression: (logOption: LogOptionsDto) => void) {
    await AdcioObserver.readyDOM();

    const element = document.querySelector(this.selector);
    if (!element) return;

    element.addEventListener(
      AdcioImpressionDetector.IMPRESSION_EVENT,
      () => onImpression(this.logOption),
      {
        once: true,
      },
    );

    const dispatch = (element: Element) =>
      element.dispatchEvent(
        new CustomEvent(AdcioImpressionDetector.IMPRESSION_EVENT, {
          bubbles: true,
        }),
      );

    return this.detectWithIntersectionObserver(element, dispatch);
  }

  detectWithIntersectionObserver(
    element: Element,
    callback: (element: Element) => void,
  ) {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting && this.checkDetector(element)) {
            observer.disconnect();
            callback(element);
          }
        }),
      { threshold: 0.5 },
    );
    observer.observe(element);
    return observer;
  }

  private checkDetector(element: Element) {
    return (this.detector && this.detector(element)) || !this.detector;
  }
}
