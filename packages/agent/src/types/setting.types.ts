import { ChatProfile } from "@adcio.js/api/controller/v1";

// 'WebPackage' represents a web application bundled with adcio/js.
// Others represents a web application bundled with agent-web.
export type AppType = "WebPackage" | "MobileWeb" | "App";

export interface App {
  deviceId: string;
  customerId: string | null;
  messengerEndpoint: string;
  agentProfile: ChatProfile;
  apiEndpoint: string;
  platform?: string | null;
}
