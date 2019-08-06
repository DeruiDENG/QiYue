import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.less";
import "./my-theme.less";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import { getStore } from "./datastore/utils";

ReactDOM.render(
  <ConfigProvider>
    <Provider store={getStore()}>
      <App />
    </Provider>
  </ConfigProvider>,
  document.getElementById("root")
);
