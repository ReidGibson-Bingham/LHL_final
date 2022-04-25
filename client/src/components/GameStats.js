import React, { Fragment, useState, useContext, useEffect } from "react";
import axios from "axios";
import SaveGame from "./SaveGame";

//import "./styles.css";
//import "../styles/GameStats.scss";

import { gameContext } from "../providers/GameProvider";

export default function GameStats() {
  const {
    textDifficulty,
    getGamesData,
    gameStatus,
    setGameStatus,
    gameData,
    setGameData,
    gamesData,
    setGamesData,
  } = useContext(gameContext);

  console.log("00 games data:", gamesData[0]);

  // only display current users
  const gameItems = gamesData.map((game) => {
    game = Object.values(game);

    return (
      <div key={game[0]}>
        Error Count: {game.slice(2, 3)}
        <br></br>
        Time (seconds): {game.slice(3, 4) / 1000}
        <br></br>
        Created on:{" "}
        {String(game.slice(5, 6)).substring(0, 10) +
          " at: " +
          String(game.slice(5, 6)).substring(11, 20)}
        <br></br>
      </div>
    );
  });
  // <ul className="stats-list">
  //         </ul>
  //className="stats-button"
  return (
    <section>
      <div className="GameStatus">{gameStatus === "done" && <SaveGame />}</div>
      <div>
        <button onClick={getGamesData}> get stats </button>
      </div>
      <div className="">
        <h4>Stats: </h4>
        {gameItems[gameItems.length - 2]}
        ----
        {gameItems[gameItems.length - 1]}
        ----
      </div>
    </section>
  );
}
