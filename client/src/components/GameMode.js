import axios from "axios";
import React, { Fragment, useState, useContext } from "react";

import { gameContext } from "../providers/GameProvider";

export default function GameMode() {
  const { textDifficulty, setTextDifficulty, fetchData } =
    useContext(gameContext);

  return (
    <Fragment>
      <div className="dropdown">
        <p className="difficulty-dropbtn">Difficulty</p>
        <div className="dropdown-content">
          <button onClick={() => fetchData(0)}>Child</button>
          <button onClick={() => fetchData(1)}>Easy</button>
          <button onClick={() => fetchData(2)}>Medium</button>
          <button onClick={() => fetchData(3)}>Hard</button>
          <button onClick={() => fetchData(0)}>Compete</button>
        </div>
      </div>
      {/* <ul id="test-display-text">
        {textDifficulty.content}
      </ul> */}
    </Fragment>
  );
}
