import React from "react";
import AdvancedSearchInputPanel from "./AdvancedSearchInputPanel";

type CategoryType = "by-category" | "by-item" | "by-full-text" | "advanced";

interface Props {
  type?: CategoryType;
}

const PanelContainer = ({ type = "by-item" }: Props) => {
  const getInputPanel = (type: CategoryType) => {
    switch (type) {
      case "by-item": {
        return <AdvancedSearchInputPanel />;
      }
      default:
        return null;
    }
  };

  return getInputPanel(type);
};

export default PanelContainer;
