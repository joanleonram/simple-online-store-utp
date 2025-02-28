import { render, screen, fireEvent } from "@testing-library/react";

import Button from "../Button";

describe("Button", () => {
  it("renders the button with the correct text", () => {
    render(<Button variant="primary">Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("calls the onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(
      <Button variant="primary" onClick={handleClick}>
        Click Me
      </Button>
    );
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
