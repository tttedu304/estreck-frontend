import React from "react";
// eslint-disable-next-line no-unused-vars
import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/searchbar";
import HeaderBar from "./components/headerbar";
import Documentation from "./components/documentation";

function App() {
  return (
    <div className="App">
      <HeaderBar />
      <Documentation />
      <SearchBar />
    </div>
  );
}

export default App;
