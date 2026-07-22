import type { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return <div style={{ border: "1px solid #ccc", padding: "1rem" }}>{children}</div>;
}
