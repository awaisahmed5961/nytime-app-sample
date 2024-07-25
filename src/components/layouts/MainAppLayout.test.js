import { render, screen } from "@testing-library/react";
import MainAppLayout from "./MainAppLayout";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

describe("MainAppLayout component", () => {
  beforeEach(() => {
    render(
      <MainAppLayout>
        <div>Test Child Content</div>
      </MainAppLayout>
    );
  });

  test("should render Header", () => {
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });

  test("It should render Footer component on the page", () => {
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });

  test("It should render the child slot", () => {
    const childElement = screen.getByText("Test Child Content");
    expect(childElement).toBeInTheDocument();
  });
});
