import React, { Fragment } from "react";
import "./App.scss";
import Header from "./Header/Header";
import MainPanel from "./main-panel/MainPanel";

const App: React.FC = () => {
  return (
    <Fragment>
      <div className="header-wrapper">
        <Header />
      </div>
      <MainPanel />
    </Fragment>
  );
};

export default App;
