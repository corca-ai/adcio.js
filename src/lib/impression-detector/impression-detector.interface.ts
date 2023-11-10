import { LogOptionsDto } from "api/controller/v1";

export type AdcioImpressionDetectorParams = {
  logOption: LogOptionsDto;
  selector: string;
  detector?: (element: Element) => boolean;
};

export type AdcioImpressionDetectorDetectParams = (
  logOption: LogOptionsDto,
) => void;
