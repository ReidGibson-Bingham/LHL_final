import React, { useRef, useState, useContext, useEffect } from "react";

// import ReactDOM from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import "../styles/App.scss";

import { gameContext } from "../providers/GameProvider";

export default function TypingText(props) {
  const {
    errorCount,
    setErrorCount,
    gameStatus,
    setGameStatus,
    typingText,
    percentDone,
    setPercentDone,
  } = useContext(gameContext);

  //const [text, setText] = useState("loading text".split(""));
  //const [typing, setTyping] = useState("");
  //------------------------------------
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");

  const keyboard = useRef();

  const onChange = (input) => {
    setInput(input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    // event.target.disabled = false;
    setInput(input); // purely for display purposes
    keyboard.current.setOptions({
      physicalKeyboardHighlight: true,
      syncInstanceInputs: true,
    });

    // error handling //
    const index = input.length - 1;
    if (input.length === 1) {
      setGameStatus("started");
      // event.target.disabled = false;
    } else if (index === typingText.length - 1) {
      setGameStatus("done");
    } else if (index >= typingText.length) {
      // event.target.disabled = true;
    }

    keyboard.current.setInput(input);
    const letter = typingText[index];

    let textTyped = input[index];
    setPercentDone((input.length / typingText.length) * 100);
    // console.log("percent done", percentDone);

    if (letter === textTyped) {
    } else {
      setErrorCount(errorCount + 1);
    }

    if (gameStatus === "new") {
      // event.target.disabled = false;
      document.getElementById("keyboard-input").value = "";
      // setInput('');
      console.log("condition met");
    }

    // check();
  };

  //--------------------------------

  // const handleTyping = (e) => {
  //   setTyping(e.target.value);
  // };

  function check(letter, index) {
    const textTyped = input[index];

    if (letter === textTyped) {
      return "has-background-success";
    } else if (!textTyped) {
      return "background-color";
    }

    ////////////////////////////////
    if (gameStatus === "new") {
      return "background-color";
    }
    ////////////////////////////////

    return "has-background-wrong";
  }

  /////////////////////////////////
  if (gameStatus === "new") {
    setErrorCount(0);
  }

  return (
    <container className="typing-text-container">
      <div className="game-status">
        {gameStatus === "started"
          ? "Game In Progress..."
          : gameStatus === "done"
          ? "Game Complete!"
          : gameStatus === "new"
          ? "Game Ready!"
          : "Select game difficulty."}
      </div>
      <div className="text-to-type" id="text-showed">
        {typingText.map((letter, i) => (
          <span key={i} className={check(letter, i)}>
            {letter}
          </span>
        ))}
      </div>

      {/* Labels and inputs for form data */}

      <label className="label"></label>
      <textarea
        className="typing-area"
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
    </container>
  );
}
