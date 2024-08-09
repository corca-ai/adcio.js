import { Navigate, Routes as ReactRouterRoutes, Route } from "react-router-dom";
import BannerPage from "./pages/Banner";
import StartPage from "./pages";
import { Adcio } from "@adcio.js/core";

export default function App() {
  const adcioInstance = new Adcio({
    clientId: "7bbb703e-a30b-4a4a-91b4-c0a7d2303415",
    customerId: "your-customer-id",
  });

  return (
    <>
      <ReactRouterRoutes>
        <Route
          path="/banner"
          element={<BannerPage adcioInstance={adcioInstance} />}
        />
        <Route path="/" element={<StartPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </ReactRouterRoutes>
    </>
  );
}
