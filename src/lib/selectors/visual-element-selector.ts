import { ElementSelector } from "./element-selector";
import { doesElementBelongToDevTool } from "./search";

export class VisualElementSelector extends ElementSelector {
  private mouseMoveListener: ((e: MouseEvent) => void) | null = null;
  private mouseClickListener: ((e: MouseEvent) => void) | null = null;

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
        const target = document.elementFromPoint(e.clientX, e.clientY);
        if (!target) {
          return;
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
