import React, {Fragment, useState, useContext} from "react";
import axios from "axios";

import { gameContext } from "../providers/GameProvider";

export default function GameStats() {

  const {textDifficulty, saveGameData, getGamesData, gameData, setGameData, sessionsData, setSessionData} = useContext(gameContext);

  
  // const modifiedGameData = Object.entries({...gameData[gameData.length - 1]});

  // const gameDataItems = modifiedGameData.map( (item) => {
  //   return (
  //     <div key={item[0]}>
  //       {item[0]}: {item[1]} 
  //       <br></br>
  //       <br></br>
  //     </div>
  //   )

  // })

  const modifiedSessionData = Object.entries({...sessionsData});

  const sessionDataItems = modifiedSessionData.map( (item) => {

    console.log("item: ", Object.entries({...item}));

    return (
      <div key={item[0]}>
        {item[0]}: {item[1]} 
        <br></br>
        <br></br>
      </div>
    )

  })

  


  return (
    <Fragment>
      <button className='stats-button' onClick={saveGameData}> Save Game </button>
      <button className='stats-button' onClick={getGamesData}> get stats </button>
      <ul className="stats-list">
        {}
      </ul>
    </Fragment>
  );
  
}