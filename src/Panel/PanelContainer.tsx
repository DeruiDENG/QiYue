import React from "react";
import ByItemSearchInputPanel from "./ByItemSearchInputPanel";
import CategorySearchInputPanel from "./CategorySearchInputPanel";

type CategoryType = "by-category" | "by-item" | "by-full-text" | "advanced";

interface Props {
  type?: CategoryType;
}

const PanelContainer = ({ type = "by-category" }: Props) => {
  const getInputPanel = (type: CategoryType) => {
    switch (type) {
      case "by-item": {
        return <ByItemSearchInputPanel />;
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
