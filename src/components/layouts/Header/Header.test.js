import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { act as reactAct } from "react";

describe("Header component", () => {
  test("should render the Header component", () => {
    reactAct(() => {
      render(<Header />);
    });

    const svgElement = screen.getByRole("img", { hidden: true });

    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute("fill", "#000");
  });
});
