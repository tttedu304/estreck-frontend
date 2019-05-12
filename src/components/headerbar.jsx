import React, { Component } from "react";
import classNames from "classnames";
import "./scss/headerbar.scss";
import logo from "./assets/img/logo.png";

class HeaderBar extends Component {
  render() {
    return (
      <header className="header">
        <figure className="header__logo">
          <img src={logo} alt="Logo" className="header__logo--img" />
        </figure>
        <nav className="header__nav">
          {/* eslint-disable-next-line jsx-a11y/anchor-has-content,jsx-a11y/anchor-is-valid */}
          <a href="#" className="header__nav--menu" />
        </nav>
      </header>
    );
  }
}

export default HeaderBar;
