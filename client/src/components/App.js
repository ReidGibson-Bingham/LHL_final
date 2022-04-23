import "../styles/App.scss";

import { useState, useContext } from "react";

import axios from "axios";

import TopNavbar from "../navigation/TopNavbar.js";

import TypingText from "./TypingText";

import GameMode from "./GameMode";

import GameStats from "./GameStats";

import GameScore from "./GameScore";

import GameProvider from "../providers/GameProvider";
import ChatRoom from "./ChatRoom";

export default function App() {

  const [comptetiveMode, setCompetetiveMode] = useState(false)

  const compStatusButton = function () {
    setCompetetiveMode(true)
  }

  return (
    <main className="layout">
      <GameProvider>
        <TopNavbar />
        <section className="typing-text">
          <div className="row">
            
            <div className="col-sm-8">
              <GameMode />
            </div>
            
            <div className="col-sm-4">
              <GameScore />
            </div>
            
          </div>
          <div className="App">
            <TypingText />
          </div>
        </section>
        <div className="game-button">
          <GameStats />
        </div>

        <div className="row">

          <div className="mode-button">
            <button onClick={compStatusButton}>Competitive Mode</button>
          </div>

          <div className="col-sm-12">
            {comptetiveMode && <ChatRoom />}
          </div>
          
        </div>
        
      </GameProvider>
    </main>
  );
}
