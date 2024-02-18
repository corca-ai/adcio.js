import { Navigate, Routes as ReactRouterRoutes, Route } from "react-router-dom";
import BannerPage from "./pages/Banner";
import StartPage from "./pages";

export default function App() {
  return (
    <>
      <ReactRouterRoutes>
        <Route path="/banner" element={<BannerPage />} />
        <Route path="/" element={<StartPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </ReactRouterRoutes>
    </>
  );
}
