import { VisualElementSelector } from "./visual-element-selector";

const example = `<div></div>`;

export class VisualPositionSelector extends VisualElementSelector {
  protected drawOverlay(e: Element) {
    const parent = document.createElement("div");
    parent.insertAdjacentHTML("beforeend", example);
    const overlay = parent.children[0] as HTMLElement;
    Object.assign(overlay.style, {
      position: "relative",
      width: `100%`,
      height: `300px`,
      pointerEvents: "none",
      backgroundColor: "#046eb8",
      opacity: "0.3",
    });
    e.appendChild(overlay);
    return overlay;
  }
}
