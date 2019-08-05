import React from "react";
import { Row, Col } from "antd";
import MainCategoryButtons from "./MainCategoryButtons";
import "./mainPanel.scss";

const MainPanel = () => (
  <Row align="middle" type="flex" gutter={24}>
    <Col span={3}>
      <div className="main-panel-title">明代至民国西北地区契约文书库</div>
    </Col>
    <Col span={21}>
      <MainCategoryButtons />
    </Col>
  </Row>
);

export default MainPanel;
