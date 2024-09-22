import { ArtishGridRenderer } from "./artish-grid-renderer";
import { ArtishMoGridRenderer } from "./artish-mo-grid-renderer";
import { RosemomGridRenderer } from "./rosemom-grid-renderer";
import { SimpleGridRenderer } from "./simple-grid-renderer";

export { SimpleGridRenderer, ArtishGridRenderer, RosemomGridRenderer };

export const getRenderer = (id: string) => {
  switch (id) {
    case "934a0ffc-3fde-4d82-bbd0-d765bfef319b":
      return new SimpleGridRenderer();
    case "b59ff34e-a71b-4b7d-8e8f-74f8dabc430e":
      return new ArtishGridRenderer();
    case "390e516a-5f97-4c93-ba50-daca4b1222b9":
      return new ArtishMoGridRenderer();
    case "4585084e-4098-4695-9ee0-c0b39018e2aa":
      return new RosemomGridRenderer();
    default:
      throw new Error(`Renderer with id ${id} not found`);
  }
};
