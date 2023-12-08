import { PLACEMENT_ERROR_MESSAGE } from "lib/constants/error";
import { AdcioCore } from "lib/core";
import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { server } from "./mock";
import { SuggestionTestId } from "./mock/constants";
import { Adcio } from "../adcio";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

afterEach(() => {
  vi.restoreAllMocks();
  vi.resetModules();
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
    vi.useFakeTimers();
  });

  it("should have the same session ID before expiration", async () => {
    const adcioCore = new AdcioCore({
      clientId: "your-client-id",
    });

    const initialSessionId = adcioCore.getSessionId();

    vi.advanceTimersByTime(10000);

    // Verify that the session ID remains the same after 10s
    expect(adcioCore.getSessionId()).toBe(initialSessionId);
  });

  it("should have a different session ID after expiration", async () => {
    const adcioCore = new AdcioCore({
      clientId: "your-client-id",
    });

    const initialSessionId = adcioCore.getSessionId();

    vi.advanceTimersByTime(30 * 60 * 1000);

    // AdcioCore should reset the session ID after 30m
    // Verify that the session ID has changed after 30m
    expect(adcioCore.getSessionId()).not.toBe(initialSessionId);
  });

  it("should call AdcioCore constructor once when Adcio is created", async () => {
    vi.doMock("../lib/core", () => {
      return {
        AdcioCore: vi.fn().mockImplementation((adcioCore) => adcioCore),
      };
    });

    const { AdcioCore } = await import("../lib/core");
    const { Adcio } = await import("../adcio");

    new Adcio({
      clientId: "your-client-id",
      customerId: "your-customer-id",
    });

    expect(AdcioCore).toHaveBeenCalledTimes(1);

    vi.doUnmock("../lib/core");
  });
});

describe("test AdcioPlacement module", () => {
  const clientId = "your-client-id";
  const customerId = "your-customer-id";

  const adcio = new Adcio({ clientId, customerId });

  it("When the provided placementId is registered in the ADCIO service.", async () => {
    await expect(
      adcio.createSuggestion({
        placementId: SuggestionTestId.SUCCESS_PLACEMENT,
      }),
    ).resolves.not.toThrow();
  });

  // it("When the provided placementId is not uuid in the ADCIO service.", async () => {
  //   await expect(
  //     adcio.createSuggestion({
  //       placementId: SuggestionTestId.NOT_UUID,
  //     }),
  //   ).rejects.toMatchObject({
  //     response: {
  //       status: 400,
  //       data: {
  //         message: PLACEMENT_ERROR_MESSAGE.NOT_UUID,
  //       },
  //     },
  //   });
  // });

  // it("When the provided placementId is not registered in the ADCIO service.", async () => {
  //   await expect(
  //     adcio.createSuggestion({
  //       placementId: SuggestionTestId.RANDOM_UUID,
  //     }),
  //   ).rejects.toMatchObject({
  //     response: {
  //       status: 404,
  //       data: {
  //         message: PLACEMENT_ERROR_MESSAGE.PLACEMENT_NOT_FOUND,
  //       },
  //     },
  //   });
  // });

  // it("When the provided placementId is not activated in the ADCIO service.", async () => {
  //   await expect(
  //     adcio.createSuggestion({
  //       placementId: SuggestionTestId.NO_ACTIVATED_PLACEMENT,
  //     }),
  //   ).rejects.toMatchObject({
  //     response: {
  //       status: 404,
  //       data: {
  //         message: PLACEMENT_ERROR_MESSAGE.NO_ACTIVATED_PLACEMENT,
  //       },
  //     },
  //   });
  // });
});
