import React from "react";
import { Button } from "antd";
import "./mainCategoryButtons.scss";

interface Category {
  displayText: string;
  type: string;
  isSelected: boolean;
}

interface Props {
  activeCategoryType?: string;
}

const MainCategoryButtons = ({ activeCategoryType = "by-category" }: Props) => {
  const categories: Category[] = [
    {
      displayText: "分类检索",
      type: "by-category",
      isSelected: false
    },
    {
      displayText: "条目检索",
      type: "by-item",
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

  return (
    <div className="main-category-buttons">
      {categories.map(category => {
        const { isSelected, type, displayText } = category;
        return (
          <div key={type} className="main-category-buttons__item">
            <Button
              type={isSelected ? "primary" : null}
              onClick={() => {
                console.log(`${type} button is clicked`);
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
