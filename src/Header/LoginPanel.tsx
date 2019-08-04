import React from "react";
import "./loginPanel.scss";

interface Props {
  isUserLoggedIn: boolean;
}

const LoginPanel = ({isUserLoggedIn}: Props) => (
    <div className="login-panel-wrapper">
      <div className="login-panel">
        <div className="login-panel__item">
          <a className="login-panel__link login-panel__link--red" href="#">使用帮助</a>
        </div>
        <div className="login-panel__item">
          {isUserLoggedIn ? <a className="login-panel__link" href="#">用户登出</a> : <a href="#">用户登录</a>}
        </div>
      </div>
      <div className="copyright">
        陕西师范大学黑维强教授版权所有
      </div>
    </div>
);

export default LoginPanel;
