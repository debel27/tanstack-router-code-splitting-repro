import { createFileRoute } from "@tanstack/react-router";

import { useOnlineStatus } from "../hooks/useOnlineStatus";

export const Route = createFileRoute("/route1")({
  component: RouteComponent,
});

function RouteComponent() {
  const isOnline = useOnlineStatus();

  return (
    <div>
      <h1>Route 1</h1>
      <div>
        <div>Status: {isOnline ? "Online" : "Offline"}</div>
      </div>
    </div>
  );
}
