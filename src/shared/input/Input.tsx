import React, { useCallback } from "react";
import "./input.scss";

interface Props {
  labelText: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
}

const Input = (props: Props) => {
  const { labelText, onChange, value } = props;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.currentTarget.value);
    },
    [onChange]
  );
  return (
    <div className="input-wrapper">
      <label>
        {labelText}
        {`: `}
        <input type="text" value={value} onChange={handleChange} />
      </label>
    </div>
  );
};

export default Input;
