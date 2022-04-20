import axios from "axios";
import React, { Fragment, useState } from "react";
// import axios from "axios";

export default function GameMode() {
  const [text, setText] = useState("loading text");

  const fetchChild = function (e) {
    e.preventDefault();
    const index = 0;

    axios
      .get("http://localhost:3000/texts")
      .then((response) => {
        console.log("texts response.data:", response.data);
        setText(response.data[index]);
        console.log("text difficulty:", text.difficulty);
        console.log(Object.values({ ...text }));
      })
      .catch(() => {
        alert("Error retreiving data");
      });
  };

  const fetchEasy = function (e) {
    e.preventDefault();
    const index = 1;

    axios
      .get("http://localhost:3000/texts")
      .then((response) => {
        console.log("texts response.data:", response.data);
        setText(response.data[index]);
        console.log("text difficulty:", text.difficulty);
      })
      .catch(() => {
        alert("Error retreiving data");
      });
  };

  const fetchMedium = function (e) {
    e.preventDefault();
    const index = 2;

    axios
      .get("http://localhost:3000/texts")
      .then((response) => {
        console.log("texts response.data:", response.data);
        setText(response.data[index]);
        console.log("text difficulty:", text.difficulty);
      })
      .catch(() => {
        alert("Error retreiving data");
      });
  };

  const fetchHard = function (e) {
    e.preventDefault();
    const index = 3;

    axios
      .get("http://localhost:3000/texts")
      .then((response) => {
        console.log("texts response.data:", response.data);
        setText(response.data[index]);
        console.log("text difficulty:", text.difficulty);
      })
      .catch(() => {
        alert("Error retreiving data");
      });
  };

  return (
    <Fragment>
      <div className="dropdown">
        <p className="difficulty-dropbtn">Difficulty</p>
        <div className="dropdown-content">
          <button onClick={fetchChild}>Child</button>
          <button onClick={fetchEasy}>Easy</button>
          <button onClick={fetchMedium}>Medium</button>
          <button onClick={fetchHard}>Hard</button>
        </div>
      </div>
      <ul id="test-display-text">{text.content}</ul>
    </Fragment>
  );
}
