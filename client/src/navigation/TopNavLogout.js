import React from "react";

import { useState, useContext } from "react";
import { gameContext } from "../providers/GameProvider";

const TopNavLogout = () => {
  const {
    errorCount,
    setErrorCount,
    gameStatus,
    setGameStatus,
    textId,
    setTextId,
    typingText,
    fetchData,
    textDifficulty,
    setTextDifficulty,
    user,
    setUser,
  } = useContext(gameContext);

  const logUserOut = function (e) {
    e.stopPropagation();
    setUser({ name: "" });
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h3>Typing Duel</h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="col-sm-8">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Admin
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-label">
                {" "}
                <a className="nav-link">User: {user.name}</a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" onClick={(event) => logUserOut(event)}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="navbar">
        <hr className="navbar__separator navbar--centered" />
        <nav className="navbar__menu"></nav>
      </section>
    </nav>
  );
};
export default TopNavLogout;
