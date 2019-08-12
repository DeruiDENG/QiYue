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
}

const MainCategoryButtons = () => {
  const categories: Category[] = [
    {
      displayText: "分类检索",
      type: SearchMode.ByCategory,
    },
    {
      displayText: "全文检索",
      type: SearchMode.FullText,
    },
    {
      displayText: "高级检索",
      type: SearchMode.Advanced,
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
        const { type, displayText } = category;
        const isSelected = type === searchMode;
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

export default MainCategoryButtons;
