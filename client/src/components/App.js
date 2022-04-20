import React, { useEffect, useState } from "react";
import axios from "axios";

import "../styles/App.scss";

import TopNavbar from "../navigation/TopNavbar.js";
import TextShow from "../TextShow";
import Message from "../Message";

import Cable from "actioncable";

//import Form from "./Form";
//import TextShow from "../TextShow";

export default function App({ cableApp }) {

  const [currentRoom, setCurrentRoom] = useState({
		chat: {},
		users: [],
		messages: [],
	})
	const [messages, setMessages] = useState(null)

  function handleCurrentRoom(result) {
    return {
      chat: result.data.attributes,
      users: result.data.attributes.users.data,
      messages: result.data.attributes.messages,
    };
  }
  function getRoomData() {
    fetch(`/chat`)
      .then((res) => res.json())
      .then((result) => {
        setCurrentRoom(() => handleCurrentRoom(result));
      });
  }

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
          {/* <TextShow /> */}
          <Message />
        </div>
      </section>
    </main>
  );
}
