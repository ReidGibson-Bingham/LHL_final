import axios from "axios";
import React, { Fragment, useState, useContext } from "react";
import Button from 'react-bootstrap/Button'

import { gameContext } from "../providers/GameProvider";

export default function GameMode() {

  const { 
    textDifficulty, 
    setTextDifficulty, 
    fetchData, 
    competitiveMode,
    setCompetitiveMode
  } = useContext(gameContext);

  const compStatusButton = function () {
    setCompetitiveMode(true);
  };

  return (
    <Fragment>
      <div className="dropdown">
        <p className="difficulty-dropbtn">Difficulty</p>
        <div className="dropdown-content">
          <Button variant="outline-success" onClick={() => fetchData(0)}>Child</Button> {' '}
          <Button variant="outline-primary" onClick={() => fetchData(1)}>Easy</Button> {' '}
          <Button variant="outline-warning" onClick={() => fetchData(2)}>Medium</Button> {' '}
          <Button variant="outline-danger"onClick={() => fetchData(3)}>Hard</Button> {' '}
          <Button variant="outline-dark" onClick={compStatusButton}>
            Competitive Mode
          </Button>  
        </div>
      </div>
    </Fragment>
  );
}
