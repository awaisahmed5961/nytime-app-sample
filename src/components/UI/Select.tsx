import { FC } from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  value: string;
  handleOnChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}

const Select: FC<SelectProps> = ({ value, handleOnChange, options }) => {
  return (
    <select
      role="combobox"
      className="border border-gray-300 rounded-md p-2 outline-none"
      value={value}
      onChange={handleOnChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
