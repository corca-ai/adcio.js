import { Adcio } from "core/dist";
import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import { renderers } from "widget/src";
import { SuggestionTestId } from "../../../mock/constants";
import { server } from "../../../mock/node";

const IntersectionObserverMock = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  takeRecords: vi.fn(),
  unobserve: vi.fn(),
}));

vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  vi.restoreAllMocks();
  vi.resetModules();
});

afterAll(() => {
  server.close();
});

describe("test SimpleGridRenderer", () => {
  const clientId = "your-client-id";
  const customerId = "your-customer-id";

  const adcio = new Adcio({ clientId, customerId });

  it("SimpleGridRenderer", async () => {
    const recommendation = await adcio.createRecommendationProducts({
      placementId: SuggestionTestId.WIDGET_PLACEMENT,
    });
    expect(recommendation).toBeDefined();
    if (!recommendation) {
      return;
    }

    const element = new renderers.SimpleGridRenderer().render(
      recommendation,
      adcio,
    );
    expect(element).toBeDefined();
  });
});
