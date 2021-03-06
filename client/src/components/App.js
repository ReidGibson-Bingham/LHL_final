import "../styles/App.scss";

import { useState, useContext, useEffect } from "react";

import { gameContext } from "../providers/GameProvider";

import Signup from "./Signup";
import TopNavLogin from "../navigation/TopNavLogin";
import TopNavLogout from "../navigation/TopNavLogout";

import TypingText from "./TypingText";

import GameMode from "./GameMode";

import GameStats from "./GameStats";

import GameScore from "./GameScore";

import ChatRoom from "./ChatRoom";

import AutoSave from "./AutoSave";

import Button from "react-bootstrap/Button";

export default function App() {
  const {
    user,
    setUser,
    competitiveMode,
    setCompetitiveMode,
    setGameStatus,
    gameStatus,
  } = useContext(gameContext);

  return (
    <main className="layout">
      {!user.name && <TopNavLogin />} {user.name && <TopNavLogout />}
      <section className="">
        <div className="row">
          <div className="col-sm-6">
            <GameMode />
          </div>
          <div className="col-sm-1"></div>
          <div className="col-sm-4">
            <GameScore />
          </div>
          <div className="col-sm-1"></div>
          <div className="row">
            <div className="col-sm-1">&nbsp;</div>
          </div>
        </div>
        <div className="row">
          <div className="App col-sm-3 justify-content-start">
            {user.name && <GameStats />}
          </div>
          <div className="App col-sm-6">
            {!user.name && <Signup />} {user.name && <TypingText />}
          </div>
          <div className="App col-sm-3">
            {user.name && competitiveMode && <ChatRoom />}
          </div>
        </div>
      </section>
      <div className="GameStatus">{gameStatus === "done" && <AutoSave />}</div>
    </main>
  );
}
