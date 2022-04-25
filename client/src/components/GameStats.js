import React, { Fragment, useState, useContext, useEffect } from "react";
import axios from "axios";
import AutoSave from "./AutoSave";

//import "./styles.css";
import "../styles/GameStats.scss";

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

  // only display current users
  const gameItems = gamesData.map((game) => {
    game = Object.values(game);

    return (
      <Fragment>
        <br></br>
        <h4 key= {Math.random()}>Game #: {game.slice(0, 1)} </h4>
        <div key={game[0]}>
        
          Error Count: {game.slice(2, 3)} 
          <br></br> 
          Time (seconds): {(game.slice(3, 4) / 1000)}
          <br></br>
          Created on: {String(game.slice(5, 6)).substring(0, 10) + ' at: ' + String(game.slice(5, 6)).substring(11, 20)}
          <br></br>

        </div>
      </Fragment>
    )
    
      
  })

  

  return (
    <Fragment>
      
      {console.log("gameStatus: ",gameStatus)}
      {/* <div className="GameStatus">
        {gameStatus === "done" && <AutoSave/> }
      </div> */}

      <ul className="stats-list">
        
        {gameItems[gameItems.length-2]}
        {gameItems[gameItems.length-1]}
      </ul>
    </Fragment>
  );
}
