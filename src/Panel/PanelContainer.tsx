import React from "react";
import AdvancedSearchInputPanel from "./AdvancedSearchInputPanel";
import CategorySearchInputPanel from "./CategorySearchInputPanel";
import { SearchMode, WholeState } from "../datastore/type";
import { selectors } from "../datastore";
import { connect } from "react-redux";

interface Props {
  searchMode: SearchMode;
}

const PanelContainer = ({ searchMode }: Props) => {
  const getInputPanel = (searchMode: SearchMode) => {
    switch (searchMode) {
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

  return getInputPanel(searchMode);
};

function mapStateToProps(state: WholeState) {
  return { searchMode: selectors.getSearchMode(state) };
}

export default connect(mapStateToProps)(PanelContainer);
