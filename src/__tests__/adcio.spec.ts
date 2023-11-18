import { AdcioCore } from "lib/core";

beforeEach(() => {
  jest.restoreAllMocks();
  jest.useFakeTimers();
});

describe("test Adcio module", () => {
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
});
