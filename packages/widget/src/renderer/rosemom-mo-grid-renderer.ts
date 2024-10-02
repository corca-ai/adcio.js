import { RosemomGridRenderer } from "./rosemom-grid-renderer";
import item from "../assets/templates/rosemom-grid/item-mo.html?raw";
import list from "../assets/templates/rosemom-grid/list-mo.html?raw";

export class RosemomMoGridRenderer extends RosemomGridRenderer {
  templateItem = item;
  templateList = list;
}
