import React from "react";
import "./Welcome.css";

function Welcome({ msg }) {
  return (
    <div>
      <h1 class="blue">{msg}</h1>
      <h3>
        You’ve successfully created a project with {""}
        <a href="#" target="_blank" rel="noopener">
          React
        </a>
      </h3>
    </div>
  );
}

export default Welcome;
