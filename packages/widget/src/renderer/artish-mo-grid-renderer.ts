import { ArtishGridRenderer } from "./artish-grid-renderer";
import itemMo from "../assets/templates/artish-grid/item-mo.html?raw";
import listMo from "../assets/templates/artish-grid/list-mo.html?raw";

export class ArtishMoGridRenderer extends ArtishGridRenderer {
  templateItem = itemMo;
  templateList = listMo;
}
