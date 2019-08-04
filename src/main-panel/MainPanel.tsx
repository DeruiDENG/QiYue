import React from "react";
import MainCategoryButtons from "./MainCategoryButtons";
import "./mainPanel.scss";

const MainPanel = () => (
  <div className="main-panel">
    <div className="main-panel__title">明代至民国西北地区契约文书库</div>
    <MainCategoryButtons />
  </div>
);

export default MainPanel;
