import React from "react";
import { Row, Col } from "antd";
import MainCategoryButtons from "./MainCategoryButtons";
import "./mainPanel.scss";

const MainPanel = () => (
  <div className="main-panel">
    <div className="main-panel-title" style={{ width: "236px" }}>
      明代至民国西北地区契约文书库
    </div>
    <MainCategoryButtons />
  </div>
);

export default MainPanel;
