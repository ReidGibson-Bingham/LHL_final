import React, {Fragment, useState} from "react";
import axios from "axios";

export default function Stats() {

  const [gameData, setGameData] = useState('');
  const [sessionData, setSessionData] = useState('');
  
  const getGameData = function(e) {

    e.preventDefault()

    axios.get('http://localhost:3000/games')
      .then((response) => {
        console.log("games response.data:", response.data)
        setGameData(response.data )
        console.log("Game data:", gameData)
      })
      .catch(() => {
        alert("Error retreiving data")
      })

    axios.get('http://localhost:3000/sessions')
      .then((response) => {
        console.log("sessions response.data:", response.data)
        setSessionData(response.data)
      })
      .catch(() => {
        alert("Error retreiving data")
      })

  }
  
  const modifiedGameData = Object.entries({...gameData[0]});

  const gameDataItems = modifiedGameData.map( (item) => {

    return (
      <div key={item[0]}>
        {item[0]}: {item[1]} 
        <br></br>
        <br></br>
      </div>
    )

  })

  const modifiedSessionData = Object.entries({...sessionData[0]});

  const sessionDataItems = modifiedSessionData.map( (item) => {

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
      <button className='stats-button' onClick={getGameData}> show stats </button>
      <ul>
        {gameDataItems}
        {sessionDataItems}
      </ul>
    </Fragment>
  );
  
}