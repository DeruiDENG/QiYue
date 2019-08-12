import React, { useCallback } from "react";
import { Button } from "antd";
import "./mainCategoryButtons.scss";
import { actionCreators } from "../../datastore/searchMode";
import { useDispatch } from "react-redux";
import { SearchMode } from "../../datastore/type";
import { useSearchMode } from "../../hooks/useSearchMode";

interface Category {
  displayText: string;
  type: SearchMode;
  disabled?: boolean;
}

const MainCategoryButtons = () => {
  const categories: Category[] = [
    {
      displayText: "分类检索",
      type: SearchMode.ByCategory,
    },
    {
      displayText: "高级检索",
      type: SearchMode.Advanced,
    },
    {
      displayText: "全文检索",
      type: SearchMode.FullText,
      disabled: true,
    },
  ];

  const searchMode = useSearchMode();
  const dispatch = useDispatch();
  const switchCategory = useCallback((mode: SearchMode) => {
    dispatch(actionCreators.switchMode({ mode }));
  }, []);

  return (
    <div className="main-category-buttons">
      {categories.map(category => {
        const { type, displayText, disabled } = category;
        const isSelected = type === searchMode;
        return (
          <div key={type} className="main-category-buttons__item">
            <Button
              type={isSelected ? "primary" : null}
              onClick={() => {
                switchCategory(type);
              }}
              disabled={disabled}
            >
              {displayText}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default MainCategoryButtons;
