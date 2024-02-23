import "@testing-library/jest-dom";
import { server } from "mock-api/node";
import { afterAll, afterEach, beforeAll } from "vitest";

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
