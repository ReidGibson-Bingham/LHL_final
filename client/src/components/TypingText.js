import React, { useRef, useState, useContext, useEffect } from "react";

// import ReactDOM from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

//import "./styles.css";
import "../styles/TypingText.scss";

import { gameContext } from "../providers/GameProvider";

export default function TypingText(props) {
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
  } = useContext(gameContext);

  console.log("@@error count:", errorCount);

  //const [text, setText] = useState("loading text".split(""));
  //const [typing, setTyping] = useState("");
  //------------------------------------
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onChange = (input) => {
    setInput(input);
    // console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    // console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    // console.log("input: ", input);
    setInput(input); // purely for display purposes
    keyboard.current.setOptions({
      physicalKeyboardHighlight: true,
      syncInstanceInputs: true,
    });
    // console.log("typing text: ", typingText);
    // error handling //
    const index = input.length - 1;
    if (input.length === 1) {
      setGameStatus("started");
      event.target.disabled = false;
    } else if (index === typingText.length - 1) {
      setGameStatus("done");
      event.target.disabled = true;
      // console.log("Game Done!");
    }

    keyboard.current.setInput(input);
    const letter = typingText[index];

    let textTyped = input[index];
    console.log("percent done", (input.length / typingText.length) * 100);

    if (letter === textTyped) {
      //console.log("matched!");
    } else {
      setErrorCount(errorCount + 1);
      //console.log("It didn't match");
    }

    // check();
  };

  //--------------------------------

  // const handleTyping = (e) => {
  //   setTyping(e.target.value);
  // };

  function check(letter, index) {
    const textTyped = input[index];
    // console.log("TT textTyped:", textTyped);
    if (letter === textTyped) {
      // console.log("TT has-background-success ");
      return "has-background-success";
    } else if (!textTyped) {
      // console.log("TT background-color ");
      return "background-color";
    }
    // console.log("TT has-background-wrong ");
    return "has-background-wrong";

    // console.log("index:", index);
  }

  return (
    <div className="TextShow">
      <div>multiplayer stats</div>

      <div>user1{errorCount}</div>
      <div>user2{errorCount}</div>
      <div className="GameStatus">
        {gameStatus === "started"
          ? "Game In Progress..."
          : gameStatus === "done"
          ? "Game Complete!"
          : gameStatus === "new"
          ? "Game Ready!"
          : "Select game difficulty."}
      </div>
      <div id="text-showed">
        {typingText.map((letter, i) => (
          <span key={i} className={check(letter, i)}>
            {letter}
          </span>
        ))}
      </div>

      {/* Labels and inputs for form data */}

      <label className="label"></label>
      <textarea
        id="keyboard-input"
        value={input}
        placeholder={"Start typing to begin game"}
        onChange={onChangeInput}
      />
      <Keyboard
        keyboardRef={(r) => (keyboard.current = r)}
        layoutName={layout}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
    </div>
  );
}
