import React from "react";
import LoginPanel from "./LoginPanel";
import './header.scss';

function MainHeader() {
  return (
    <header className="header">
      <div className="header__logo">中国契约</div>
      <div className="header__college-logo">陕西师范大学</div>
      <LoginPanel isUserLoggedIn />
    </header>
  );
}

export default MainHeader;
