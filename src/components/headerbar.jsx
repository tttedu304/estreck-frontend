import React, { Component } from "react";
//import "./scss/headerbar.scss";
//import logo from "./assets/img/logo.png";
import "materialize-css/dist/css/materialize.min.css";
//<img src={logo} alt="Logo" className="header__logo--img" />

class HeaderBar extends Component {
  render() {
    return (
      <React.Fragment>
        <nav className="nav-extended">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo">
              Logo
            </a>
            <a href="/" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">Sass</a>
              </li>
              <li>
                <a href="badges.html">Components</a>
              </li>
              <li>
                <a href="collapsible.html">JavaScript</a>
              </li>
            </ul>
          </div>
          <div className="nav-content">
            <ul className="tabs tabs-transparent">
              <li className="tab">
                <a href="#test1">Test 1</a>
              </li>
              <li className="tab">
                <a className="active" href="#test2">
                  Test 2
                </a>
              </li>
              <li className="tab disabled">
                <a href="#test3">Disabled Tab</a>
              </li>
              <li className="tab">
                <a href="#test4">Test 4</a>
              </li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="mobile-demo">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>

        <div id="test1" className="col s12">
          Test 1
        </div>
        <div id="test2" className="col s12">
          Test 2
        </div>
        <div id="test3" className="col s12">
          Test 3
        </div>
        <div id="test4" className="col s12">
          Test 4
        </div>
      </React.Fragment>
    );
  }
}

export default HeaderBar;
