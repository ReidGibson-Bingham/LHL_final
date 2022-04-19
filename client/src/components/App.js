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
        <div class="row">
          <div class="col-sm-8">Mode and Difficulty Selection Here</div>
          <div class="col-sm-4">Time and Errors Here</div>
        </div>
        <div className="App">Typing Text Here</div>
        <div className="App">
          <TextShow />
        </div>
      </section>
    </main>
  );
}
