import React, { useState } from "react";
import axios from "axios";

export default function TextShow(props) {
  const [text, setText] = useState("loading text");
  const [typing, setTyping] = useState("");
  const handleTyping = (e) => {
    setTyping(e.target.value);
  };

  const fetchData = (e) => {
    e.preventDefault();
    console.log("fetch data ??");
    axios
      .get("/texts/") // You can simply make your requests to "/api/whatever you want"
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
        <h1>display text</h1>
      </div>

      <form>
        {/* Labels and inputs for form data */}
        <label className="label"></label>
        <input
          onChange={handleTyping}
          className="input"
          value={typing}
          type="text"
        />

        <button onClick={fetchData}>Click for showing typing text</button>
      </form>
    </div>
  );
}
