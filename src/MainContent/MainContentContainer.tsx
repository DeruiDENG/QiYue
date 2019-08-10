import React from "react";
import AdvancedSearchContent from "./AdvancedSearchContent";
import { useSearchMode } from "../hooks/useSearchMode";
import ByCategorySearchResult from "./ByCategorySearchResult";

const MainContentContainer = () => {
  const searchMode = useSearchMode();
  switch (searchMode) {
    case "advanced": {
      return <AdvancedSearchContent />;
    }
    case "by-category": {
      return <ByCategorySearchResult />;
    }
    case "by-full-text": {
      return null;
    }
    default:
      return null;
  }
};

export default MainContentContainer;
