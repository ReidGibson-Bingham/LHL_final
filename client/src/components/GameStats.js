import React, { Fragment, useState, useContext, useEffect } from "react";
import axios from "axios";

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
    user,
  } = useContext(gameContext);

  useEffect(() => {
    getGamesData();
  }, []);

  // console.log("00 games data:", gamesData[0]);

  // only display current users
  const userGameItems = gamesData.filter((item) => item.user_id == user.id);

  console.log("userGameItems", userGameItems, user.id);

  const gameItems = userGameItems.map((game) => {
    game = Object.values(game);

    return (
      <div className="game-stats inner-component-border" key={game[0]}>
        <div key={Math.random()}>Game #: {game.slice(0, 1)} </div>
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
      </div>
    );
  });

  return (
    <container className="justify-content-start stats-list component-border">
      <div className="game-stats">
        <h4>Game Stats </h4>
        {gameItems[gameItems.length - 3]}
        {gameItems[gameItems.length - 2]}
        {gameItems[gameItems.length - 1]}
      </div>
    </container>
  );
}
