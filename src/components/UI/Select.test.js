import { render, screen, fireEvent } from "@testing-library/react";
import Select from "./Select";

const mockOptions = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];

describe("Select component", () => {
  test("It should render options correctly", () => {
    render(
      <Select value="1" handleOnChange={() => {}} options={mockOptions} />
    );

    mockOptions.forEach((option) => {
      expect(
        screen.getByRole("option", { name: option.label })
      ).toBeInTheDocument();
    });
  });

  test("It should reflect selected value", () => {
    render(
      <Select value="2" handleOnChange={() => {}} options={mockOptions} />
    );

    expect(screen.getByRole("combobox")).toHaveValue("2");
  });

  test("It should call handleOnChange when an option is selected", () => {
    const handleOnChange = jest.fn();

    render(
      <Select value="1" handleOnChange={handleOnChange} options={mockOptions} />
    );

    fireEvent.change(screen.getByRole("combobox"), { target: { value: "3" } });

    expect(handleOnChange).toHaveBeenCalledTimes(1);
  });
});
