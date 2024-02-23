import { act, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UserEvent } from "@testing-library/user-event/dist/types/setup/setup";
import { suggestionResponse } from "mock-api/suggestion.demo";
import { Adcio } from "adcio.js";

import { wrapper } from "./utils/renderUI";
import BannerPage from "../pages/Banner";
import { afterEach, describe, vi, expect, it } from "vitest";

const setup = () => {
  console.log(Adcio);
  const adcioInstance = new Adcio({
    clientId: "your-client-id",
    customerId: "your-customer-id",
  });
  return render(<BannerPage adcioInstance={adcioInstance} />, {
    wrapper: (props) => wrapper(props, { route: "/" }),
  });
};

describe("Test SDK Banner", () => {
  it("test", async () => {
    const { container } = setup();
    await waitFor(() => {
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("[PC] Banner Test")).toBeInTheDocument();
    });
    expect(container).toMatchSnapshot();
  });
});
