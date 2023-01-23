import React, { useEffect, useState, useContext } from "react";
import classNames from "classnames";

import { gameContext } from "../providers/GameProvider";

export default function GameScore() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  const {
    errorCount,
    setErrorCount,
    gameStatus,
    setGameStatus,
    textId,
    setTextId,
    typingText,
    fetchData,
    textDifficulty,
    setTextDifficulty,
    gameTotalTime,
    setGameTotalTime,
  } = useContext(gameContext);

  useEffect(() => {
    if (gameStatus === "started") {
      setRunning(true);
      console.log("** time:", time);
    }
    if (gameStatus === "done") {
      setRunning(false);
      // setGameTotalTime(time);
    }
    if (gameStatus === "new") {
      setTime(0);
      setGameTotalTime(0);
      setRunning(false);
    }
  }, [gameStatus]);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
        setGameTotalTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="stopwatch row justify-content-around component-border">
      <div className="numbers col-sm-2">
        Time:&nbsp;
        <span className="game_score-min">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
        </span>
        <span className="game_score-sec ">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
        </span>
      </div>
      <div className="errorCountStat col-sm-4">
        <span>Error Count: {errorCount}</span>
      </div>
    </div>
  );
}
