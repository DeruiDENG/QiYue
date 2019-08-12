import React from "react";
import LoginPanel from "./LoginPanel";
import "./header.scss";
import MainPanel from "./CategoryCtaPanel/MainPanel";
import { Row, Col } from "antd";

function MainHeader() {
  return (
    <Row type="flex" align="middle" justify="center" style={{padding: "16px"}}>
      <Col span={24} xl={20}>
        <Row type="flex" align="middle" justify="space-between">
          <Col>
            <MainPanel />
          </Col>
          <Col>
            <LoginPanel isUserLoggedIn />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default MainHeader;
