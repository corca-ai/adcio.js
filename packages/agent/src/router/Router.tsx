import { Suspense, useEffect, useReducer, useState } from "react";
import { useTranslation, withTranslation } from "react-i18next";

import { Layout } from "../layout/Layout";
import { AGENT_PATH, PathAction, PathState } from "./route";
import { useUserSetting } from "../hook/useUserSetting";
import { getInitPath } from "../utils/route";

interface Props {
  onRoute?: (route: PathState) => void;
}

const animateDuration = 300;

function Route({ onRoute }: Props) {
  const { i18n } = useTranslation();
  const { setting } = useUserSetting({});
  const [mounted, setMounted] = useState(true);
  const reducer = (state: PathState, action: PathAction): PathState => {
    state.path !== action.path && setMounted(false);
    return { path: action.path, id: action?.id };
  };
  const [route, routeTo] = useReducer(reducer, getInitPath());
  const [Component, setComponent] = useState(AGENT_PATH[route.path]);

  useEffect(() => {
    setTimeout(() => {
      setComponent(AGENT_PATH[route.path]);
      setMounted(true);
    }, animateDuration);
  }, [route.path]);

  useEffect(() => {
    onRoute && onRoute(route);
  }, [route]);

  useEffect(() => {
    i18n.changeLanguage(setting.language);
  }, []);

  return (
    <Suspense fallback={null}>
      <Layout
        path={route.path}
        animation={{ duration: animateDuration, mounted }}
      >
        <Component.element routeTo={routeTo} id={route.id} />
      </Layout>
    </Suspense>
  );
}

export default withTranslation()(Route);
