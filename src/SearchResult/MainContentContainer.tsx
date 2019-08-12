import React from "react";
import AdvancedSearchContent from "./AdvancedSearchContent";
import { useSearchMode } from "../hooks/useSearchMode";
import ByCategorySearchResult from "./ByCategorySearchResult";

const MainContentContainer = () => {
  const searchMode = useSearchMode();
  return (
    <div>
      {searchMode === "advanced" && <AdvancedSearchContent />}
      {searchMode === "by-category" && <ByCategorySearchResult />}
    </div>
  );
};

export default MainContentContainer;
