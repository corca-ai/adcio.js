import { GridRenderer } from "./grid-renderer";
import item from "../assets/templates/simple-grid/item.html?raw";
import list from "../assets/templates/simple-grid/list.html?raw";

export class SimpleGridRenderer extends GridRenderer {
  templateItem = item;
  templateList = list;
}
