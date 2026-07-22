import type { ReactNode } from "react";
import type { FileRoutesByTo } from "../routeTree.gen";
import { Link, useMatch } from "@tanstack/react-router";

type HeaderLinkProps = {
  to: keyof FileRoutesByTo;
  children: ReactNode;
};

export function HeaderLink(props: HeaderLinkProps) {
  const { to, children } = props;
  const match = useMatch({ from: to, shouldThrow: false });
  return (
    <Link to={to} disabled={!!match}>
      {children}
    </Link>
  );
}
