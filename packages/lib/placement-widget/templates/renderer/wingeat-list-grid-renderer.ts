import { GridRenderer } from "./grid-renderer";
import item from "../assets/wingeat/item.html?raw";
import styles from "../assets/wingeat/styles.css?raw";
import wrapper from "../assets/wingeat/wrapper.html?raw";

export class WingeatGridRenderer extends GridRenderer {
  templateItem = item;
  templateWrapper = wrapper;
  templateStyles = styles;
}
