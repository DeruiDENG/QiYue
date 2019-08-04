import React, {useCallback} from "react";
import "./input.scss";

interface Props {
  isChecked: boolean;
  labelText: string;
  onChange: (isChecked: boolean) => void;
}

const CheckBox = (props: Props) => {
  const { isChecked, labelText, onChange } = props;

  const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.currentTarget.checked);
      },
      [onChange]
  );

  return (
      <label>
        {labelText}
        {`: `}
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
      </label>
  );
};

export default CheckBox;
