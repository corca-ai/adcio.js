import {
  Configuration as ApiConfiguration,
  ChatProfile,
} from "@adcio.js/api/controller/v1";
import { Configuration as MessengerConfiguration } from "@adcio.js/api/messenger/v1";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useTranslation } from "react-i18next";

interface AgentSettingProviderProps {
  agentProfile: ChatProfile;
  messengerEndpoint: string;
  apiEndpoint: string;
  children: ReactNode;
}

interface AgentSettingProvider {
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
