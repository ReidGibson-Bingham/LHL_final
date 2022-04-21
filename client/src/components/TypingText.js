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
    
    setInput(input); // purely for display purposes
    keyboard.current.setOptions({
      physicalKeyboardHighlight: true,
      syncInstanceInputs: true,
    });
    
    // error handling //
    const index = input.length - 1;
    if (input.length === 1) {
      setGameStatus("started");
      event.target.disabled = false;
    } else if (index === typingText.length - 1) {
      setGameStatus("done");
      event.target.disabled = true;
    
    }

    keyboard.current.setInput(input);
    const letter = typingText[index];

    let textTyped = input[index];
    
    
    if (letter === textTyped) {
    
    } else {
      setErrorCount(errorCount + 1);
      
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
    
    return "has-background-wrong";

    
  }

  return (
    <div className="TextShow">
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
