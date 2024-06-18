import { Navigate, Routes as ReactRouterRoutes, Route } from "react-router-dom";
import BannerPage from "./pages/Banner";
import StartPage from "./pages";
import { Adcio } from "@adcio/core";
import { renderAgent } from "@adcio/agent";
import { createStorage } from "../../../packages/lib/storage/storage.factory";

export default function App() {
  const adcioInstance = new Adcio({
    clientId: "your-client-id",
    customerId: "your-customer-id",
  });

  renderAgent({
    deviceId: "id",
    customerId: "61c2adf4-4886-4237-9a42-3da6f0ce963f",
    agentProfile: {
      id: "4d2e5e51-c91a-46b9-957b-3b90cddceb2c",
      clientId: "76dc12fa-5a73-4c90-bea5-d6578f9bc606",
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
        id: "76dc12fa-5a73-4c90-bea5-d6578f9bc606",
        name: "ANDAR",
        currency: "KRW",
        timezone: "KST",
        credit: 0,
        paidCredit: 0,
        freeCredit: 0,
        type: "OWN_WEBSITE",
        deletedAt: null,
        paymentCardId: "3259976c-66d9-4c46-b759-6452f872d802",
        storeId: "284726d6-4460-4673-bd9c-49b05577fb7c",
        businessLicenseId: "1718f116-dab2-44e1-9854-9f85783d3299",
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
