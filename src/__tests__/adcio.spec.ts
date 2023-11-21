import { AdcioCore } from "lib/core";
import { StatusCode } from "server/constants";
import { Adcio } from "../adcio";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.restoreAllMocks();
  jest.resetModules();
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

describe("test", () => {
  it("should have matching", async () => {
    const clientId = "your-client-id";
    const customerId = "your-customer-id";

    const adcio = new Adcio({ clientId, customerId });

    await adcio
      .onImpression({
        requestId: "test",
        adsetId: "test",
      })
      .then((res) => {
        expect(res.status).toBe(StatusCode.SUCCESS);
      });
  });
});