import React, { useCallback } from "react";
import './input.scss'

interface Props {
  options: {
    type: string;
    displayName: string;
  }[];
  selectedOptionType: string;
  onSelect: (type: string) => void;
  labelText: React.ReactNode;
}

const Select = (props: Props) => {
  const { options, selectedOptionType, onSelect, labelText } = props;

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onSelect(e.target.value);
    },
    [onSelect]
  );
  return (
    <div className="input-wrapper">
      <label>
        {labelText}
        {`: `}
        <select onChange={onChange}>
          {options.map(({ type, displayName }) => (
            <option
              key={type}
              value={type}
              selected={type === selectedOptionType}
            >
              {displayName}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Select;
