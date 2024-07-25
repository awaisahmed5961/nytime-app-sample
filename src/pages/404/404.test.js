import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import NotFoundPage from "./404";

describe("NotFoundPage component", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    );
  });

  test("it should render the 404 heading", () => {
    const headingElement = screen.getByText("404");
    expect(headingElement).toBeInTheDocument();
  });

  test("it should render the error message", () => {
    const errorMessageElement = screen.getByText("Page Not Found");
    expect(errorMessageElement).toBeInTheDocument();
  });

  test("it should render the descriptive text", () => {
    const descriptiveTextElement = screen.getByText(
      "Sorry, the page you are looking for does not exist."
    );
    expect(descriptiveTextElement).toBeInTheDocument();
  });

  test("it should render the 'Go Home' link with correct href", () => {
    const linkElement = screen.getByText("Go Home");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
