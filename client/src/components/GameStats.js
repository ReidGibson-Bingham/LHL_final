import React, {Fragment, useState, useContext, useEffect} from "react";
import axios from "axios";
import SaveGame from "./SaveGame";

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
    sessionsData,
    setSessionData
  } = useContext(gameContext);


  const sessionItems = sessionsData.map( (session) => {
    session = Object.values(session);
    
    return (
      <div key={session[0]}>
        
        <br></br>
        Game ID: {session.slice(2, 3)}
        <br></br>
        User ID: {session.slice(1, 2)}
        <br></br> 
        Error Count: {session.slice(3, 4)} 
        <br></br> 
        Time (seconds): {parseFloat(String(session.slice(4, 5))) * 0.001}
        <br></br>
        Created on: {String(session.slice(5, 6)).substring(0, 10) + ' at: ' + String(session.slice(5, 6)).substring(11, 20)}
        <br></br>

      </div>
    )
      
  })

  

  return (
    <Fragment>
      
      {console.log("gameStatus: ",gameStatus)}
      <div className="GameStatus">
        {gameStatus === "done" && <SaveGame />}
      </div>

      <button className='stats-button' onClick={getGamesData}> get stats </button>
      <ul className="stats-list">
        {sessionItems}
      </ul>
    </Fragment>
  );
  
}