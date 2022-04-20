import React, { useRef, useState } from "react";
import axios from "axios";

// import ReactDOM from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

//import "./styles.css";
import "../styles/TypingText.scss";

export default function TypingText(props) {
  //const [text, setText] = useState("loading text".split(""));
  //const [typing, setTyping] = useState("");
  //------------------------------------
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onChange = (input) => {
    setInput(input);
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    //console.log(input);
    setInput(input);
    keyboard.current.setOptions({
      physicalKeyboardHighlight: true,
      syncInstanceInputs: true,
    });
    keyboard.current.setInput(input);
    //console.log("input is", input);

    check();
  };

  //--------------------------------

  // const handleTyping = (e) => {
  //   setTyping(e.target.value);
  // };

  function check(letter, index) {
    let textTyped = input[index];
    // console.log(
    //   "check function",
    //   textTyped,
    //   "type",
    //   typeof textTyped,
    //   "letter",
    //   letter
    // );
    if (letter === textTyped) {
      return "has-background-success";
    } else {
      return "has-background-wrong";
    }
  }
  //   <button id="text-button" onClick={fetchData}>
  //   Click for showing typing text
  // </button>
  console.log("props.text:", props.text);
  return (
    <div className="TextShow">
      <div id="text-showed">
        {props.text.map((letter, i) => (
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
