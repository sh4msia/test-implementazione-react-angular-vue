import React, { useState } from "react";

import "./About.css";
import appStructure from "../images/app-structure.svg";
import syntax from "../images/syntax.svg";
import routing from "../images/routing.svg";
import stateManagement from "../images/state-management.svg";
import feedback from "../images/feedback.svg";
import reverseArrow from "../images/reverse-arrow.svg";

const About = () => {
  const [accordion1, setAccordion1] = useState(true);
  const [accordion2, setAccordion2] = useState(false);
  const [accordion3, setAccordion3] = useState(false);
  const [accordion4, setAccordion4] = useState(false);
  const [accordion5, setAccordion5] = useState(false);

  const toggleAccordion1 = () => {
    setAccordion1(!accordion1);
  };

  const toggleAccordion2 = () => {
    setAccordion2(!accordion2);
  };

  const toggleAccordion3 = () => {
    setAccordion3(!accordion3);
  };

  const toggleAccordion4 = () => {
    setAccordion4(!accordion4);
  };

  const toggleAccordion5 = () => {
    setAccordion5(!accordion5);
  };

  return (
    <div className="About">
      <h1>Presentazione</h1>
      <div className="accordion-container">
        <div
          className={`accordion ${accordion1 ? "open" : ""}`}
          onClick={toggleAccordion1}
        >
          <div className="icon-container">
            <img
              src={appStructure}
              alt="App Structure Icon"
              width={"60px"}
              height={"60px"}
            />
          </div>
          <div className="text-container">
            <h2>Struttura del progetto</h2>
            <p className={`${accordion1 ? "open" : ""}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </p>
          </div>
          <div className="icon-container">
            <img
              src={reverseArrow}
              alt="Reverse Arrow Icon"
              className={`reverse-arrow ${accordion1 ? "show" : ""}`}
              height={20}
              width={20}
            />
          </div>
        </div>
        <div
          className={`accordion ${accordion2 ? "open" : ""}`}
          onClick={toggleAccordion2}
        >
          <div className="icon-container">
            <img
              src={syntax}
              alt="Syntax Icon"
              width={"60px"}
              height={"60px"}
            />
          </div>
          <div className="text-container">
            <h2>Sintassi del framework</h2>
            <p className={`${accordion2 ? "open" : ""}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </p>
          </div>
          <div className="icon-container">
            <img
              src={reverseArrow}
              alt="Reverse Arrow Icon"
              className={`reverse-arrow ${accordion2 ? "show" : ""}`}
              height={20}
              width={20}
            />
          </div>
        </div>
        <div
          className={`accordion ${accordion3 ? "open" : ""}`}
          onClick={toggleAccordion3}
        >
          <div className="icon-container">
            <img
              src={routing}
              alt="Routing Icon"
              width={"60px"}
              height={"60px"}
            />
          </div>
          <div className="text-container">
            <h2>Routing</h2>
            <p className={`${accordion3 ? "open" : ""}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </p>
          </div>
          <div className="icon-container">
            <img
              src={reverseArrow}
              alt="Reverse Arrow Icon"
              className={`reverse-arrow ${accordion3 ? "show" : ""}`}
              height={20}
              width={20}
            />
          </div>
        </div>
        <div
          className={`accordion ${accordion4 ? "open" : ""}`}
          onClick={toggleAccordion4}
        >
          <div className="icon-container">
            <img
              src={stateManagement}
              alt="State Management Icon"
              width={"60px"}
              height={"60px"}
            />
          </div>
          <div className="text-container">
            <h2>Gestione dello stato</h2>
            <p className={`${accordion4 ? "open" : ""}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </p>
          </div>
          <div className="icon-container">
            <img
              src={reverseArrow}
              alt="Reverse Arrow Icon"
              className={`reverse-arrow ${accordion4 ? "show" : ""}`}
              height={20}
              width={20}
            />
          </div>
        </div>
        <div
          className={`accordion ${accordion5 ? "open" : ""}`}
          onClick={toggleAccordion5}
        >
          <div className="icon-container">
            <img
              src={feedback}
              alt="Feedback Icon"
              width={"60px"}
              height={"60px"}
            />
          </div>
          <div className="text-container">
            <h2>Gestione degli eventi</h2>
            <p className={`${accordion5 ? "open" : ""}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.{" "}
            </p>
          </div>
          <div className="icon-container">
            <img
              src={reverseArrow}
              alt="Reverse Arrow Icon"
              className={`reverse-arrow ${accordion5 ? "show" : ""}`}
              height={20}
              width={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
