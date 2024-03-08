import { ElementSelector } from "./element-selector";
import { doesElementBelongToDevTool, getElementAtDepth } from "./search";

export class VisualElementSelector extends ElementSelector {
  private mouseMoveListener: ((e: MouseEvent) => void) | null = null;
  private mouseClickListener: ((e: MouseEvent) => void) | null = null;

  private depth?: number;
  private root?: Element;

  constructor(options: { depth?: number; root?: Element } = {}) {
    super();
    this.depth = options.depth;
    this.root = options.root;
  }

  stop() {
    if (this.mouseMoveListener) {
      document.removeEventListener("mousemove", this.mouseMoveListener);
    }

    this.hoverOut();
  }

  select(): Promise<Element | null> {
    let moved = false;
    return new Promise<Element | null>((resolve) => {
      this.mouseMoveListener = (e) => {
        let target = document.elementFromPoint(e.clientX, e.clientY);
        if (!target) {
          return;
        }

        if (this.root && !this.root.contains(target)) {
          return;
        }

        if (this.depth) {
          target = getElementAtDepth(target, this.depth);
          if (!target) {
            return;
          }
        }

        moved = true;
        if (doesElementBelongToDevTool(target)) {
          this.dispatchSetCurrent(null);
        } else {
          this.dispatchSetCurrent(target);
        }
      };

      this.mouseClickListener = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (!moved) {
          return;
        }
        const selected = this.getCurrent();
        this.stop();
        if (this.mouseClickListener) {
          document.removeEventListener("click", this.mouseClickListener, true);
        }
        resolve(selected);
      };

      document.addEventListener("click", this.mouseClickListener, true);

      document.addEventListener("mousemove", this.mouseMoveListener, {
        passive: true,
      });
    });
  }
}
