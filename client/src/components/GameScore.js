import React, { useEffect, useState, useContext } from "react";
import classNames from "classnames";

import { gameContext } from "../providers/GameProvider";

export default function GameScore() {
  const [time, setTime] = useState(0);
  // const [time, setTime] = useState(0);
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
    console.log("GameScore gameStatus: ", gameStatus);
    if (gameStatus === "started") {
      setRunning(true);
      console.log("** time:", time);
    }
    if (gameStatus === "done") {
      setRunning(false);
      // setGameTotalTime(time);
    }
    if (gameStatus === "new") {
      setTime(0)
    }
    console.log("GameScore time: ", time);
  }, [gameStatus]);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        console.log("testing: ", time);
        setTime((prevTime) => prevTime + 10);
        setGameTotalTime((prevTime) => prevTime + 10)
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  //<span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
  return (
    <div className="stopwatch row">
      <div className="numbers col-sm-2">
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

      {/* <div className="buttons">
        <button onClick={() => setRunning(true)}>Start</button>
        <button onClick={() => setRunning(false)}>Stop</button>
        <button onClick={() => setTime(0)}>Reset</button>
      </div> */}
    </div>
  );
}
