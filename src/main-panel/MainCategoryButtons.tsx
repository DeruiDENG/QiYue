import React from "react";
import Button from "../shared/button/Button";
import "./mainCategoryButtons.scss";

interface Category {
  displayText: string;
  type: string;
  isSelected: boolean;
  isDisabled: boolean;
}

interface Props {
  activeCategoryType?: string;
}

const MainCategoryButtons = (props: Props) => {
  const { activeCategoryType } = props;
  const categories: Category[] = [
    {
      displayText: "分类检索",
      type: "by-category",
      isSelected: false,
      isDisabled: false
    },
    {
      displayText: "条目检索",
      type: "by-item",
      isSelected: false,
      isDisabled: false
    },
    {
      displayText: "全文检索",
      type: "by-full-text",
      isSelected: false,
      isDisabled: false
    },
    {
      displayText: "高级检索",
      type: "advanced",
      isSelected: false,
      isDisabled: false
    }
  ].map(category => ({
    ...category,
    isSelected: category.type === activeCategoryType
  }));

  return (
    <div className="main-category-buttons">
      {categories.map(category => {
        const { isDisabled, isSelected, type, displayText } = category;
        return (
          <div key={type} className="main-category-buttons__item">
            <Button
              displayText={displayText}
              isSelected={isSelected}
              isDisabled={isDisabled}
              onClick={() => {
                console.log(`${type} button is clicked`);
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MainCategoryButtons;
