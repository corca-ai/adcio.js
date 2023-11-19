import { AdcioCore } from "lib/core";

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.restoreAllMocks();
  jest.resetModules();
  // unmock Adcio and AdcioCore modules
  jest.dontMock("../adcio");
  jest.dontMock("../lib/core");
});

describe("test Adcio module", () => {
  it("should match client ID and customer ID", async () => {
    jest.doMock("../adcio", () => {
      return {
        Adcio: jest.fn().mockImplementation((params) => {
          expect(params.clientId).toBe("your-client-id");
          expect(params.customerId).toBe("your-customer-id");
        }),
      };
    });

    const { Adcio } = await require("../adcio");

    // Pass the client ID and customer ID as params when creating the AdcioCore instance
    new Adcio({
      clientId: "your-client-id",
      customerId: "your-customer-id",
    });
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
  });
});
