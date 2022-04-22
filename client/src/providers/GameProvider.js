import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create a Context
export const gameContext = createContext();

// Create a Component wrapper from Context.Provider
export default function GameProvider(props) {
  const [gameStatus, setGameStatus] = useState("new"); // statuses => new, started, done
  const [errorCount, setErrorCount] = useState(0);

  const [textId, setTextId] = useState(0);
  const [typingText, setTypingText] = useState("no text".split(""));
  const [textDifficulty, setTextDifficulty] = useState(1);
  const [gameTotalTime, setGameTotalTime] = useState(0);
  const setErrCount = (errorCount) => setErrorCount(errorCount);
  const [gameData, setGameData] = useState({});
  const [sessionData, setSessionData] = useState([]);
  const [sessionsData, setSessionsData] = useState([]);




  const fetchData = (textDifficulty) => {
   
    axios
      .get("http://localhost:3000/texts") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        
        setTypingText(response.data[textDifficulty].content.trim().split(""));
        //return response.data[randNum].content.split("");
      });
    //console.log("text is:", text);
  };
  useEffect(() => {
    //setTypingText(fetchData(textDifficulty));
    //need to call this on textDifficulty selection.
    fetchData(textDifficulty);
  }, []);

  const saveGameData = function () {

    const gameDATA = {
      is_single_player: null,
      player1_id: 1,
      player2_id: 0,
      game_datetime: null,
      text_id: textDifficulty,
      created_at: null, 
      updated_at: null
    }

    setGameData(gameDATA)

    axios.post('http://localhost:3000/games', gameDATA)
      .then((response) => {

        console.log("game data successfully saved, response: ", response)

        const sessionDATA = {
          user_id: 1,
          game_id: response.data.id,
          error_count: errorCount,
          timer: gameTotalTime,
          created_at: null,
          updated_at: null
        }

        setSessionData(sessionDATA)

        return axios.post('http://localhost:3000/sessions', sessionDATA)

      })
      .then((response) => {
        console.log("session data successfully saved, response: ", response)
      })
      .catch((error) => {
        alert("session data could not be saved, error: ", error)
      })

  }

  const getGamesData = function() {

    axios.get('http://localhost:3000/sessions')
      .then((response) => {
        setSessionsData(response.data)
        console.log("response.data:", response.data)
        
      })
      .catch(() => {
        alert("Error retreiving data")
      })

  }

  // This list can get long with a lot of functions.  Reducer may be a better choice
  const providerData = {
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
    gameData,
    saveGameData, 
    getGamesData,
    setSessionData,
    sessionData,
    setSessionsData,
    sessionsData
  };

  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <gameContext.Provider value={providerData}>
      {props.children}
    </gameContext.Provider>
  );
}
