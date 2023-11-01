import React from "react";
import "./Introduction.css";

function Introduction({ msg }) {
  return (
    <div>
      <h1 className="blue">{msg}</h1>
      <h3>
        Questa applicazione e stata creata con {""}
        <a href="#" target="_blank" rel="noopener">
          React
        </a>
      </h3>
    </div>
  );
}

export default Introduction;
