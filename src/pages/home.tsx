import * as React from "react";
import { Button } from "~/shared/ui/button";
import { DemoDialog } from "~/shared/ui/dialog";

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home page</h1>
      <DemoDialog />
      <Button color="primary">Test 1</Button>
      <Button color="secondary">Test 2</Button>
    </div>
  );
};
