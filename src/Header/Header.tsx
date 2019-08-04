import React from "react";
import LoginPanel from "./LoginPanel";
import './header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">高端大气</div>
      <div className="header__college-logo">陕西师范大学</div>
      <LoginPanel isUserLoggedIn />
    </header>
  );
}

export default Header;
