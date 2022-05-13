import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "~/shared/ui/button";
import { DemoDialog } from "~/shared/ui/dialog";
import { paths } from ".";

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Home page</h1>
      <Link to={paths.todo(666)}>Single todo</Link>
      <DemoDialog />
      <Button color="primary">Test 1</Button>
      <Button color="secondary">Test 2</Button>
    </div>
  );
};
