import React from "react";
import AdvancedSearchInputPanel from "./AdvancedSearchInputPanel";
import CategorySearchInputPanel from "./CategorySearchInputPanel";

type CategoryType = "by-category" | "by-item" | "by-full-text" | "advanced";

interface Props {
  type?: CategoryType;
}

const PanelContainer = ({ type = "advanced" }: Props) => {
  const getInputPanel = (type: CategoryType) => {
    switch (type) {
      case "advanced": {
        return <AdvancedSearchInputPanel />;
      }
      case "by-category": {
        return <CategorySearchInputPanel />;
      }
      default:
        return null;
    }
  };

  return getInputPanel(type);
};

export default PanelContainer;
