import { ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";

type Route = `/${string}`;

export function wrapper(
  { children }: { children: ReactNode },
  options?: { route: Route },
) {
  return (
    <MemoryRouter initialEntries={[options?.route ?? "/"]}>
      {children}
    </MemoryRouter>
  );
}
