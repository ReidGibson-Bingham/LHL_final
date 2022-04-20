import React, { Fragment, useState } from "react";
import axios from "axios";

export default function GameStats() {
  const [gameData, setGameData] = useState("");
  const [sessionData, setSessionData] = useState("");
  const [index, setIndex] = useState(0);

  const saveGameData = function (e) {
    e.preventDefault();

    setGameData({
      is_single_player: null,
      player1_id: 1,
      player2_id: 0,
      game_datetime: null,
      text_id: 1,
      created_at: null,
      updated_at: null,
    });

    setSessionData({
      user_id: 1,
      game_id: 1,
      error_count: 100,
      timer: 68,
      created_at: null,
      updated_at: null,
    });

    axios
      .post("http://localhost:3000/games", gameData)
      .then((response) => {
        console.log("game data successfully saved, response: ", response);
      })
      .catch((error) => {
        alert("Game data could not be saved, error: ", error);
      });

    axios
      .post("http://localhost:3000/sessions", sessionData)
      .then((response) => {
        console.log("session data successfully saved, response: ", response);
      })
      .catch((error) => {
        alert("session data could not be saved, error: ", error);
      });
  };

  const getGameData = function (e) {
    e.preventDefault();

    axios
      .get("http://localhost:3000/games")
      .then((response) => {
        console.log("games response.data:", response.data);
        setGameData(response.data);
        setIndex(response.data.length);
        console.log("Game data:", gameData);
      })
      .catch(() => {
        alert("Error retreiving data");
      });

    axios
      .get("http://localhost:3000/sessions")
      .then((response) => {
        console.log("sessions response.data:", response.data);
        setSessionData(response.data);
        setIndex(response.data.length);
        console.log(index);
      })
      .catch(() => {
        alert("Error retreiving data");
      });
  };

  const modifiedGameData = Object.entries({ ...gameData[index] });

  const gameDataItems = modifiedGameData.map((item) => {
    return (
      <div key={item[0]}>
        {item[0]}: {item[1]}
        <br></br>
        <br></br>
      </div>
    );
  });

  const modifiedSessionData = Object.entries({ ...sessionData[index] });

  const sessionDataItems = modifiedSessionData.map((item) => {
    return (
      <div key={item[0]}>
        {item[0]}: {item[1]}
        <br></br>
        <br></br>
      </div>
    );
  });

  return (
    <Fragment>
      <button className="stats-button" onClick={saveGameData}>
        {" "}
        Save Game{" "}
      </button>
      <button className="stats-button" onClick={getGameData}>
        {" "}
        get stats{" "}
      </button>
      <ul className="stats-list">
        {gameDataItems}
        {sessionDataItems}
      </ul>
    </Fragment>
  );
}
