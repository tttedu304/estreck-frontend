import React, { Component } from "react";
import classNames from "classnames";
import "./scss/searchbar.scss";

class SearchBar extends Component {
  state = { open: false };

  handleClick = () => {
    this.setState(state => ({ open: !state.open }));
  };
  render() {
    // eslint-disable-next-line no-restricted-globals
    const searchClass = classNames({ open: this.state.open, search: true });
    return (
      <div className={searchClass}>
        <input type="search" className="search-box" />
        <span className="search-button" onClick={this.handleClick}>
          <span className="search-icon" />
        </span>
      </div>
    );
  }
}
export default SearchBar;
