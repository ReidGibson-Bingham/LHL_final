import React, { useRef, useState } from "react";
import axios from "axios";

import ReactDOM from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

import "./styles.css";

export default function TextShow(props) {
  const [text, setText] = useState("loading text");
  const [typing, setTyping] = useState("");
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
    setInput(input);
    keyboard.current.setInput(input);
  };

  //--------------------------------

  const handleTyping = (e) => {
    setTyping(e.target.value);
  };

  const fetchData = (e) => {
    e.preventDefault();
    console.log("fetch data ??");
    axios
      .get("http://localhost:3000/texts") // You can simply make your requests to "/api/whatever you want"
      .then((response) => {
        // handle success
        console.log("response data is", response.data); // The entire response from the Rails API

        console.log("response.data.content", response.data[1].content); // Just the message
        setText({
          content: response.data[1].content,
        });
      });
  };

  return (
    <div className="TextShow">
      <div>
        <p>{text.content}</p>
      </div>

      {/* Labels and inputs for form data */}
      <button id="text-button" onClick={fetchData}>
        Click for showing typing text
      </button>
      <label className="label"></label>
      <input
        className="keyboard-input"
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
