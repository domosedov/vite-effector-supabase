import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button", () => {
  it("should render", () => {
    render(<Button>Click me!</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
