import { rest } from "msw";
import { impressionField } from "./constants";

class APIError extends Error {
  statusCode: number;
  message: string;

  constructor(statusCode: number, message: string) {
    super();
    this.statusCode = statusCode;
    this.message = message;
  }
}

function checkRequiredFields<U extends { name: string; isRequired: boolean }>(
  obj: unknown,
  fieldList: U[],
) {
  if (obj == null || typeof obj !== "object") {
    throw new APIError(400, "요청 형식이 잘못되었습니다.");
  }

  fieldList.forEach((field) => {
    if (!(field.name in obj) && field.isRequired) {
      throw new APIError(
        400,
        `필요한 필드 값이 없습니다. ${String(field.name)}`,
      );
    }
  });

  for (const key in obj) {
    if (!fieldList.some((field) => field.name === key)) {
      throw new APIError(400, `존재하지 않는 필드값을 전달했습니다. ${key}`);
    }
  }
}

const API_BASE_URL = 'https://receiver.adcio.ai';

export function handlers() {
  return [rest.post(`${API_BASE_URL}/performance/impression`, onImpression)];
}

const onImpression: Parameters<typeof rest.post>[1] = async (req, res, ctx) => {
  try {
    checkRequiredFields(req.body, impressionField);
    return res(ctx.delay(3000), ctx.status(201));
  } catch (error) {
    if (error instanceof APIError) {
      return res(
        ctx.status(error.statusCode),
        ctx.json({ message: error.message }),
      );
    }

    return res(
      ctx.status(500),
      ctx.json({
        message: "server error",
      }),
    );
  }
};
