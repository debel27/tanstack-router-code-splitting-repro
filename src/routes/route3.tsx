import { createFileRoute } from "@tanstack/react-router";

import { Card } from "../components/Card";
import { Icon } from "../components/Icon";
import { Input } from "../components/Input";

export const Route = createFileRoute("/route3")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Route 3</h1>
      <Card>
        <Icon />
        <Input />
      </Card>
    </div>
  );
}
