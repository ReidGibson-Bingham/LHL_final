import React, {Fragment, useState} from "react";
import axios from "axios";

export default function GameStats() {

  const [gameData, setGameData] = useState('');
  const [sessionData, setSessionData] = useState('');
  const [index, setIndex] = useState(0);


  const saveGameData = function (e) {
    
    e.preventDefault()

    setGameData({
      is_single_player: null,
      player1_id: 1,
      player2_id: 0,
      game_datetime: null,
      text_id: 1,
      created_at: null, 
      updated_at: null
    })

    setSessionData({
      user_id: 1,
      game_id: 1,
      error_count: 100,
      timer: 68,
      created_at: null,
      updated_at: null
    })

    axios.post('http://localhost:3000/games', gameData)
      .then((response) => {
        console.log("game data successfully saved, response: ", response)

        return axios.post('http://localhost:3000/sessions', sessionData)

      })
      .then((response) => {
        console.log("session data successfully saved, response: ", response)
      })
      .catch((error) => {
        alert("session data could not be saved, error: ", error)
      })

  }
  
  const getGameData = function(e) {

    e.preventDefault()

    axios.get('http://localhost:3000/games')
      .then((response) => {
        // console.log("games response.data:", response.data)
        setGameData(response.data )
        // console.log("Game data:", gameData)

        return axios.get('http://localhost:3000/sessions')

      })
      .then((response) => {
        // console.log("sessions response.data:", response.data)
        setSessionData(response.data)
      })
      .catch(() => {
        alert("Error retreiving data")
      })

  }

  const modifiedGameData = Object.entries({...gameData[gameData.length - 1]});
  console.log("gameData:", gameData);
  console.log("index: ", index);

  const gameDataItems = modifiedGameData.map( (item) => {
    return (
      <div key={item[0]}>
        {item[0]}: {item[1]} 
        <br></br>
        <br></br>
      </div>
    )

  })

  const modifiedSessionData = Object.entries({...sessionData[sessionData.length - 1]});

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
      <button className='stats-button' onClick={saveGameData}> Save Game </button>
      <button className='stats-button' onClick={getGameData}> get stats </button>
      <ul className="stats-list">
        {gameDataItems}
        {sessionDataItems}
      </ul>
    </Fragment>
  );
  
}