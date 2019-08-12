import React, { Fragment } from "react";
import { Col, Row } from "antd";
import "./App.scss";
import MainPanel from "./main-panel/MainPanel";
import PanelContainer from "./Panel/PanelContainer";
import MainHeader from "./Header/MainHeader";
import Footer from "./Footer/Footer";
import MainContentContainer from "./MainContent/MainContentContainer";

const App: React.FC = () => {
  return (
    <Fragment>
      <MainHeader />
      <div className="body-wrapper">
        <MainPanel />
        <Row gutter={24} type="flex" style={{ marginBottom: "32px" }}>
          <Col span={10} md={8} xl={6}>
            <PanelContainer />
          </Col>
          <Col span={15}>
            <MainContentContainer />
          </Col>
        </Row>
        <Footer />
      </div>
    </Fragment>
  );
};

export default App;
