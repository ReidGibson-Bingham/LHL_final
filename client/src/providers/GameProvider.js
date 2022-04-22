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
  const [textDifficulty, setTextDifficulty] = useState(0);
  const [gameTotalTime, setGameTotalTime] = useState(0);
  const setErrCount = (errorCount) => setErrorCount(errorCount);

  const fetchData = (textDifficulty) => {
    //console.log("fetch data ??");
    // const min = 1;
    // const max = 4;
    // const randNum = Math.floor(Math.random() * (max - min));
    axios
      .get("http://localhost:3000/texts") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // console.log("response data is", response.data); // The
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
  };

  // We can now use this as a component to wrap anything
  // that needs our state
  return (
    <gameContext.Provider value={providerData}>
      {props.children}
    </gameContext.Provider>
  );
}
