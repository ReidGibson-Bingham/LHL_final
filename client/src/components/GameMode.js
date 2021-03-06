import axios from "axios";
import React, { Fragment, useState, useContext } from "react";
import Button from "react-bootstrap/Button";

import { gameContext } from "../providers/GameProvider";

export default function GameMode() {
  const {
    textDifficulty,
    setTextDifficulty,
    fetchData,
    competitiveMode,
    setCompetitiveMode,
    gameStatus,
    setGameStatus,
  } = useContext(gameContext);

  const compStatusTrue = function () {
    setCompetitiveMode(true);
    fetchData(3);
  };

  // this function sets both the difficulty and sets competitive mode to false
  const compositeFunction = function (index) {
    setCompetitiveMode(false);
    fetchData(index);
  };

  const newGameStatus = function () {
    setGameStatus("new");
  };

  return (
    <Fragment>
      <div className="dropdown">
        <div className="dropdown-content">
          <Button
            variant="outline-success"
            onClick={() => compositeFunction(0)}
          >
            Child
          </Button>{" "}
          <Button
            variant="outline-primary"
            onClick={() => compositeFunction(1)}
          >
            Easy
          </Button>{" "}
          <Button
            variant="outline-warning"
            onClick={() => compositeFunction(2)}
          >
            Medium
          </Button>{" "}
          <Button variant="outline-danger" onClick={() => compositeFunction(3)}>
            Hard
          </Button>{" "}
          <Button variant="outline-dark" onClick={compStatusTrue}>
            Competitive Mode
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="outline-secondary" onClick={newGameStatus}>
            {" "}
            New Game{" "}
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
