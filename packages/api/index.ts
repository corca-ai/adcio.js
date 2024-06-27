import * as controllerV1 from "./controller/v1";
import * as dto from "./dto";
import * as receiverV1 from "./receiver/v1";

export const v1 = {
  ...controllerV1,
  ...receiverV1,
  ...dto,
};
