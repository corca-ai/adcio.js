import { LogOptionsDto } from "api/controller/v1";

export type AdcioImpressionDetectorArgs = {
  logOption: LogOptionsDto;
  selector: string;
  detector?: (element: Element) => boolean;
};

export type AdcioImpressionDetectorDetectArgs = (
  logOption: LogOptionsDto,
) => void;
