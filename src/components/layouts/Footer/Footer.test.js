import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

const getCurrentYear = () => new Date().getFullYear();

describe("Footer component", () => {
  test("should render the Footer component", () => {
    render(<Footer />);

    const footerElement = screen.getByText(/Copyright \(c\)/);
    expect(footerElement).toBeInTheDocument();

    expect(footerElement).toHaveTextContent(
      `Copyright (c) ${getCurrentYear()} The New York Times Company. All Rights Reserved. ©`
    );
  });
});
