import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/App.scss";

import TopNavbar from "../navigation/TopNavbar.js";
import TextShow from "../TextShow";

//import Form from "./Form";
//import TextShow from "../TextShow";

export default function App() {
  return (
    <main className="layout">
      <TopNavbar />
      <section className="typing-text">
        <div className="row">
          <div className="col-sm-8">Mode and Difficulty Selection Here</div>
          <div className="col-sm-4">Time and Errors Here</div>
        </div>
        <div className="App">Typing Text Here</div>
        <div className="App">
          <TextShow />
        </div>
      </section>
    </main>
  );
}
