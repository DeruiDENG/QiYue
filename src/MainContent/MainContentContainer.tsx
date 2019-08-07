import React from "react";
import AdvancedSearchContent from "./AdvancedSearchContent";
import { useSearchMode } from "../hooks/useSearchMode";

const MainContentContainer = () => {
  const searchMode = useSearchMode();
  switch (searchMode) {
    case "advanced": {
      return <AdvancedSearchContent />;
    }
    case "by-category": {
      return null;
    }
    case "by-full-text": {
      return null;
    }
    default:
      return null;
  }
};

export default MainContentContainer;
