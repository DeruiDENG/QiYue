import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.less";
import "./my-theme.less";
import "./index.scss";
import App from "./App";
import { ConfigProvider } from "antd";

ReactDOM.render(
  <ConfigProvider>
    <App />
  </ConfigProvider>,
  document.getElementById("root")
);
