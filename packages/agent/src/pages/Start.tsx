import { useState } from "react";

import { AgentPath, Page } from "../router/route";
import Start from "../container/Start";
import { PageContainer } from "../layout/container/PageContainer";

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
