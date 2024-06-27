import { Navigate, Routes as ReactRouterRoutes, Route } from "react-router-dom";
import BannerPage from "./pages/Banner";
import StartPage from "./pages";
import { Adcio } from "@adcio.js/core";
import { renderAgent } from "@adcio.js/agent";

export default function App() {
  const adcioInstance = new Adcio({
    clientId: "7bbb703e-a30b-4a4a-91b4-c0a7d2303415",
    customerId: "your-customer-id",
  });

  renderAgent({
    deviceId: "id",
    customerId: "",
    agentProfile: {
      id: "",
      clientId: "",
      imageUrl: null,
      name: "ANDAR",
      description: "",
      domain: "outfit",
      theme: "lovely",
      language: "ko",
      activated: true,
      greetingMessage:
        "안녕하세요. 안다르 챗봇 추천시스템입니다. 저희는 다양한 카테고리, 성별, 사이즈, 활동복, 색상, 가격대에 따른 개인 맞춤형 추천을 해드릴 수 있습니다. 무엇을 원하시나요?",
      bottomMargin: 0,
      client: {
        id: "",
        name: "ANDAR",
        currency: "KRW",
        timezone: "KST",
        credit: 0,
        paidCredit: 0,
        freeCredit: 0,
        type: "OWN_WEBSITE",
        deletedAt: null,
        paymentCardId: "",
        storeId: "",
        businessLicenseId: "",
        isSeller: false,
      },
    },
    apiEndpoint: "https://api-dev.adcio.ai",
    messengerEndpoint: "https://messenger-dev.adcio.ai",
    platform: "WebPackage",
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
