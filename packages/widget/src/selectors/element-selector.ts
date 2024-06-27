export abstract class ElementSelector {
  private overlay: Element | null = null;
  private current: Element | null = null;

  protected drawOverlay(e: Element): Element {
    const overlay = document.createElement("div");
    const rect = e.getBoundingClientRect();
    Object.assign(overlay.style, {
      position: "absolute",
      top: `${rect.top + window.scrollY}px`,
      left: `${rect.left + window.scrollX}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      zIndex: "9999",
      pointerEvents: "none",
      backgroundColor: "#046eb8",
      opacity: "0.3",
    });
    document.body.appendChild(overlay);
    return overlay;
  }

  private onHoverIn(e: Element | null) {
    if (!e) {
      this.overlay?.remove();
    } else if (e !== this.current) {
      this.overlay = this.drawOverlay(e);
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  private onHoverOut(e: Element | null) {
    this.overlay?.remove();
  }

  protected hoverOut() {
    if (this.current) {
      this.onHoverOut(this.current);
    }
    this.current = null;
  }

  protected hoverIn(e: Element | null) {
    this.onHoverIn(e);
    this.current = e;
  }

  protected dispatchSetCurrent(e: Element | null) {
    if (this.current === e) {
      return;
    }
    this.hoverOut();
    this.hoverIn(e);
  }

  getCurrent() {
    return this.current;
  }

  abstract select(): Promise<Element | null>;
}
