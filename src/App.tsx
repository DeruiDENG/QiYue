import React, { Fragment } from "react";
import { Col, Row } from "antd";
import "./App.scss";
import MainPanel from "./main-panel/MainPanel";
import PanelContainer from "./Panel/PanelContainer";
import MainHeader from "./Header/MainHeader";
import Footer from "./Footer/Footer";

const App: React.FC = () => {
  return (
    <Fragment>
      <MainHeader />
      <div className="body-wrapper">
        <MainPanel />
        <Row gutter={24} style={{ marginBottom: "32px" }}>
          <Col span={3}>
            <PanelContainer />
          </Col>
          <Col span={21}>Some Content</Col>
        </Row>
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
