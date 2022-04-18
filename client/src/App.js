import React, { useEffect, useState } from "react";
import "./App.css";
import Form from "./Form";
import TextShow from "./TextShow";
import Game from "./Game"

export default function App() {

  return (
    <div className="App">
      <Form />
      <TextShow />
      <Game />
    </div>
  );
}
