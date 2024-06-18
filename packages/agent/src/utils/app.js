/* eslint-disable */
import { devLog } from "./common";

export const sendProductRouterToApp = (path) => {
  try {
    devLog("Calling ProductRouter\nProductRouter params: ", path);
    if (typeof ProductRouter !== "undefined") {
      ProductRouter.postMessage(path); // for Android, Flutter
    } else if (window?.webkit?.messageHandlers?.ProductRouter) {
      window.webkit.messageHandlers.ProductRouter.postMessage(path); // for iOS
    }
    throw new Error(
      "There is no send method. Please get in touch with a Web developer.",
    );
  } catch (e) {
    devLog("--------ERROR--------");
    devLog("Failed to call ProductRouter with params: ", path);
    devLog("Your userAgent: ", window?.navigator?.userAgent);
    devLog("error: ", e);
    devLog("---------------------");
  }
};
