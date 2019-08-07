import React from "react";
import { Button } from "antd";
import "./mainCategoryButtons.scss";
import { actionCreators, selectors } from "../datastore";
import { connect } from "react-redux";
import { SearchMode, WholeState } from "../datastore/type";
import { Dispatch } from "redux";
import {useSearchMode} from "../hooks/useSearchMode";

interface Category {
  displayText: string;
  type: SearchMode;
  isSelected: boolean;
}

interface Props {
  activeCategoryType: SearchMode;
  switchCategory: (mode: SearchMode) => void;
}

const MainCategoryButtons = ({ activeCategoryType, switchCategory }: Props) => {
  // @ts-ignore
  const categories: Category[] = [
    {
      displayText: "分类检索",
      type: "by-category",
      isSelected: false
    },
    {
      displayText: "全文检索",
      type: "by-full-text",
      isSelected: false
    },
    {
      displayText: "高级检索",
      type: "advanced",
      isSelected: false
    }
  ].map(category => ({
    ...category,
    isSelected: category.type === activeCategoryType
  }));

  const searchMode = useSearchMode();

  return (
    <div className="main-category-buttons">
      {categories.map(category => {
        const { isSelected, type, displayText } = category;
        return (
          <div key={type} className="main-category-buttons__item">
            <Button
              type={isSelected ? "primary" : null}
              onClick={() => {
                switchCategory(type);
              }}
            >
              {displayText}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

function mapStateToProps(state: WholeState) {
  return { activeCategoryType: selectors.getSearchMode(state) };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    switchCategory: function(mode: SearchMode) {
      dispatch(actionCreators.switchMode({ mode }));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainCategoryButtons);
