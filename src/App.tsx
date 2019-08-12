import React, { Fragment } from "react";
import { Col, Row } from "antd";
import "./App.scss";
import PanelContainer from "./SearchInput/PanelContainer";
import MainHeader from "./Header/MainHeader";
import Footer from "./Footer/Footer";
import MainContentContainer from "./SearchResult/MainContentContainer";

const App: React.FC = () => {
  return (
    <Fragment>
      <MainHeader />
      <div className="body-wrapper">
        <Row gutter={24} type="flex" justify="center" style={{ marginBottom: "32px", paddingTop: "16px", paddingBottom:"16px" }}>
          <Col span={10} md={8} xl={4}>
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
