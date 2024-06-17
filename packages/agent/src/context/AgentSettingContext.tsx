import { createContext, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Configuration as ApiConfiguration } from "@adcio.js/api/controller/v1";
import { Configuration as MessengerConfiguration } from "@adcio.js/api/messenger/v1.0";

import { App } from "../types/setting.types";

interface AgentSettingProviderProps extends App {
  children: React.ReactNode;
}

interface AgentSettingProvider extends App {
  apiConfig: ApiConfiguration;
  messengerConfig: MessengerConfiguration;
}

export const AgentSettingContext = createContext(null);

export const AgentSettingProvider = ({
  children,
  ...config
}: AgentSettingProviderProps) => {
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(config.agentProfile.language || "ko");
  }, [config.agentProfile.language]);

  const [state] = useState({
    ...config,
    apiConfig: new ApiConfiguration({
      basePath: config.apiEndpoint,
    }),
    messengerConfig: new MessengerConfiguration({
      basePath: config.messengerEndpoint,
    }),
  });
  return (
    <AgentSettingContext.Provider value={{ ...state }}>
      {children}
    </AgentSettingContext.Provider>
  );
};

export const useAgentSettingState = () =>
  useContext<AgentSettingProvider>(AgentSettingContext);
