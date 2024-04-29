import { GridRenderer } from "./grid-renderer";
import item from "../assets/templates/simple-grid/item.html?raw";
import styles from "../assets/templates/simple-grid/styles.css?raw";
import wrapper from "../assets/templates/simple-grid/wrapper.html?raw";

export class SimpleGridRenderer extends GridRenderer {
  templateItem = item;
  templateWrapper = wrapper;
  templateStyles = styles;
}
