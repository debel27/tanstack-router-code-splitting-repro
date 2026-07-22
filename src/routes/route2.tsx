import { createFileRoute } from "@tanstack/react-router";

import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Icon } from "../components/Icon";
import { Input } from "../components/Input";

export const Route = createFileRoute("/route2")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Route 2</h1>
      <Card>
        <Icon />
        <Button />
        <Input />
      </Card>
    </div>
  );
}
