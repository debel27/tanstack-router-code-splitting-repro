import { Outlet, createRootRoute } from "@tanstack/react-router";
import { HeaderLink } from "../components/HeaderLink";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <header style={{ display: "flex", gap: "4px" }}>
        <HeaderLink to="/route1">Route 1</HeaderLink>
        <HeaderLink to="/route2">Route 2</HeaderLink>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
