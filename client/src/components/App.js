import "../styles/App.scss";

import { useState, useContext, useEffect } from "react";
import { gameContext } from "../providers/GameProvider";

import TypingText from "./TypingText";

import GameMode from "./GameMode";

import GameStats from "./GameStats";

import GameScore from "./GameScore";
import Signup from "./Signup";

import TopNavLogin from "../navigation/TopNavLogin";
import TopNavLogout from "../navigation/TopNavLogout";

import ChatRoom from "./ChatRoom";

export default function App() {
  const { user, setUser, competitiveMode, setCompetitiveMode } =
    useContext(gameContext);

  const compStatusButton = function () {
    setCompetitiveMode(true);
  };

  console.log("Apps user: ", user);
  return (
    <main className="layout">
      {!user.name && <TopNavLogin />} {user.name && <TopNavLogout />}
      <section className="typing-text">
        <div className="row">
          <div className="col-sm-8">
            <GameMode />
          </div>
          <div className="col-sm-4">
            <GameScore />
          </div>
        </div>
        <div className="row">
          <div className="App col-sm-3">
            <GameStats />
          </div>
          <div className="App col-sm-6">
            {!user.name && <Signup />} {user.name && <TypingText />}
          </div>
          <div className="App col-sm-3">
            {user.name && competitiveMode && <ChatRoom />}
          </div>
        </div>
      </section>
      <div className="row">
        <div className="mode-button">
          <button onClick={compStatusButton}>Competitive Mode</button>
        </div>
      </div>
    </main>
  );
}
