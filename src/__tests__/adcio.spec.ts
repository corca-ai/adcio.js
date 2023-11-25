import { AdcioCore } from "lib/core";
import { StatusCode } from "server/constants";
import { Adcio } from "../adcio";
import { server } from "../server";

beforeAll(() => {
  server.listen();
  jest.useFakeTimers();
});

afterEach(() => {
  server.resetHandlers();
  jest.restoreAllMocks();
  jest.resetModules();
});

afterAll(() => {
  server.close();
});

describe("test Adcio module", () => {
  it("should have matching client and customer IDs", () => {
    const clientId = "your-client-id";
    const customerId = "your-customer-id";

    const adcio = new Adcio({ clientId, customerId });

    expect(adcio["config"].clientId).toBe(clientId);
    expect(adcio["config"].customerId).toBe(customerId);
  });
});

describe("test AdcioCore module", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
  });

  it("should have the same session ID before expiration", async () => {
    jest.useFakeTimers();

    const adcioCore = new AdcioCore({
      clientId: "your-client-id",
    });

    const initialSessionId = adcioCore.getSessionId();

    jest.advanceTimersByTime(10000);

    // Verify that the session ID remains the same after 10s
    expect(adcioCore.getSessionId()).toBe(initialSessionId);
  });

  it("should have a different session ID after expiration", async () => {
    const adcioCore = new AdcioCore({
      clientId: "your-client-id",
    });

    const initialSessionId = adcioCore.getSessionId();

    jest.advanceTimersByTime(30 * 60 * 1000);

    // AdcioCore should reset the session ID after 30m
    // Verify that the session ID has changed after 30m
    expect(adcioCore.getSessionId()).not.toBe(initialSessionId);
  });

  it("should call AdcioCore constructor once when Adcio is created", async () => {
    jest.doMock("../lib/core", () => {
      return {
        AdcioCore: jest.fn().mockImplementation(),
      };
    });

    const { AdcioCore } = await import("../lib/core");
    const { Adcio } = await import("../adcio");

    new Adcio({
      clientId: "your-client-id",
      customerId: "your-customer-id",
    });

    expect(AdcioCore).toHaveBeenCalledTimes(1);

    jest.dontMock("../lib/core");
  });
});

// example of mocking api test code
describe("test Adcio Analytics module", () => {
  const clientId = "your-client-id";
  const customerId = "your-customer-id";

  it("should match onImpression params", async () => {
    const adcio = new Adcio({ clientId, customerId });

    const response = await adcio.onImpression({
      requestId: "your-client-requestId",
      adsetId: "your-client-adsetId",
    });

    expect(response.status).toBe(StatusCode.SUCCESS);
  });
});
