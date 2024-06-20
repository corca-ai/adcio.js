import { useState } from "react";

import { Page } from "../router/route";
import Start from "../container/Start";
import { PageContainer } from "../layout/container/PageContainer";
import { AgentPath } from "../types/route.types";

export default function StartLayout({ routeTo }: Page) {
  const [display, setDisplay] = useState(true);
  const customRouteTo = (url: string) => {
    const [path, id] = url.split("/");
    routeTo({ path: path as AgentPath, id });
  };

  return display ? (
    <PageContainer>
      <Start
        appType="WebPackage"
        routeTo={customRouteTo}
        setDisplay={setDisplay}
      />
    </PageContainer>
  ) : (
    <></>
  );
}
