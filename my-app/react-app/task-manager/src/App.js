import React from "react";
import logo from "./images/React-icon.svg";

import "./App.css";
import TaskManager from "./components/TaskManager";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="React logo" className="logo" />
        <div className="wrapper">
          <Welcome msg={"React"} />
          <nav>
            <a>Home</a>
            <a>About</a>
          </nav>
        </div>
      </header>
      <TaskManager />
    </div>
  );
}

export default App;
