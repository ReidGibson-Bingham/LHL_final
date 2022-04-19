import React from "react";
import "./App.css";
import Form from "./Form";
import TextShow from "./TextShow";
import Stats from "./Stats"
import StartGame from "./StartGame";

export default function App() {

  return (
    <div className="App">
      <Form />
      <TextShow />
      <StartGame />
      <Stats />
    </div>
  );
}
