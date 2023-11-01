import React from "react";
import logo from "./images/React-icon.svg";

import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import {} from "react-router-dom";

import "./App.css";
import Introduction from "./components/Introduction";
import TaskManager from "./components/TaskManager";
import About from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskManager />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="React logo" className="logo" />
        <div className="wrapper">
          <Introduction msg={"React"} />
          <nav>
            <a href="/">Task Manager</a>
            <a href="/about">Presentazione</a>
          </nav>
        </div>
      </header>
      <div className="wrapper">
        <RouterProvider router={router}>
          <Routes>
            <Route path="/" element={<TaskManager />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </RouterProvider>
      </div>
    </div>
  );
}

export default App;
