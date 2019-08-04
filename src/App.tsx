import React, { Fragment } from "react";
import "./App.scss";
import Header from "./Header/Header";
import MainPanel from "./main-panel/MainPanel";
import PanelContainer from "./Panel/PanelContainer";

const App: React.FC = () => {
  return (
    <Fragment>
      <div className="header-wrapper">
        <Header />
      </div>
      <MainPanel />
      <div className="body-wrapper">
        <div className="panel">
          <PanelContainer />
        </div>
      </div>
    </Fragment>
  );
};

export default App;
