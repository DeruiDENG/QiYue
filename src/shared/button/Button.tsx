import React from "react";
import classNames from "classnames";
import "./button.scss";

interface Props {
  displayText: React.ReactNode;
  isSelected?: boolean;
  isDisabled?: boolean;
  onClick: () => void;
}

const Button = (props: Props) => {
  const { displayText, isDisabled, isSelected, onClick } = props;
  return (
    <button
      className={classNames("button", { "is-selected": isSelected })}
      disabled={isDisabled}
      onClick={onClick}
    >
      {displayText}
    </button>
  );
};

export default Button;
