import React from "react";
import { Row, Col } from "antd";
import MainCategoryButtons from "./MainCategoryButtons";
import "./mainPanel.scss";

const MainPanel = () => (
  <Row align="middle" type="flex" gutter={24}>
    <Col span={10} md={8} xl={6}>
      <div className="main-panel-title">明代至民国西北地区契约文书库</div>
    </Col>
    <Col span={15}>
      <MainCategoryButtons />
    </Col>
  </Row>
);

export default MainPanel;
