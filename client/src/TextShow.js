import React, { useRef, useState } from "react";
import axios from "axios";

// import ReactDOM from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import "./styles.css";

export default function TextShow(props) {
  const [text, setText] = useState("loading text".split(""));
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

  const fetchData = (e) => {
    e.preventDefault();
    //console.log("fetch data ??");
    const min = 1;
    const max = 4;
    const randNum = Math.floor(Math.random() * (max - min));
    axios
      .get("http://localhost:3000/texts") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        //console.log("response data is", response.data); // The entire response from the Rails API
        //console.log("randomnumber", randNum);
        // console.log("response.data.content", response.data[randNum].content); // Just the message
        setText(response.data[randNum].content.split(""));
      });
    //console.log("text is:", text);
  };

  function check(letter, index) {
    
    let textTyped = input[index];
    
    if (letter === textTyped) {
      return "has-background-success";
    } else {
      return "has-background-wrong";
    }
  }

  return (
    <div className="TextShow">
      <div id="text-showed">
        {text.map((letter, i) => (
          <span key={i} className={check(letter, i)}>
            {letter}
          </span>
        ))}
      </div>

      {/* Labels and inputs for form data */}
      <button id="text-button" onClick={fetchData}>
        Click for showing typing text
      </button>
      <label className="label"></label>
      <textarea
        id="keyboard-input"
        value={input}
        placeholder={"Tap on the virtual keyboard to start"}
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
