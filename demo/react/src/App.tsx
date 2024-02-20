import { Navigate, Routes as ReactRouterRoutes, Route } from "react-router-dom";
import BannerPage from "./pages/Banner";
import StartPage from "./pages";
import { Adcio } from "adcio.js/src/adcio";

export default function App() {
  const adcioInstance = new Adcio({
    clientId: "your-client-id",
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
