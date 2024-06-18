import { useEffect, useState } from "react";

import { PageContainer } from "../layout/container/PageContainer";
import { Page } from "../router/route";
import { removeActiveGroupId, setActiveGroupId } from "../utils/route";
import Chat from "../container/Chat";
import { AgentPath } from "../types/route.types";

interface Props extends Page {
  id: string;
}

export default function ChatLayout({ routeTo, id }: Props) {
  const [display, setDisplay] = useState(true);
  const customRouteTo = (url: string) => {
    const [path, id] = url.split("/");
    routeTo({ path: path as AgentPath, id });
  };

  useEffect(() => {
    setActiveGroupId(id);
    return () => removeActiveGroupId();
  }, [id]);

  return display ? (
    <PageContainer>
      <Chat
        appType="WebPackage"
        routeTo={customRouteTo}
        id={id}
        setDisplay={setDisplay}
      />
    </PageContainer>
  ) : (
    <></>
  );
}
