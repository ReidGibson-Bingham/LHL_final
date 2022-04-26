import React from "react";
import axios from "axios";

import { useEffect, useState, useContext } from "react";
import { gameContext } from "../providers/GameProvider";
import Button from "react-bootstrap/Button";

const TopNavLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loginErrMsg, setLoginErrMsg] = useState("");
  const [error, setError] = useState(false);

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
  // Handling the name change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    if (email === "" || password === "") {
      setError(true);
    } else {
      axios
        .post(`http://localhost:3000/login`, userData)
        .then((res) => {
          setUser(res.data);
        })
        .catch((error) => {
          setError(error);
          setLoginErrMsg("Login Email or Password not found.");
        });
      setError(false);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <i className="fa-solid fa-keyboard"></i>
          {/* <i class="fa-solid fa-typewriter"></i> */}
        </a>
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
          <div className="col-sm-4">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Admin
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-8">
            <form>
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                  <div>
                    Login Email:{" "}
                    <input
                      onChange={handleEmail}
                      className="input"
                      type="email"
                    ></input>
                  </div>
                </li>
                <li className="nav-item">
                  &nbsp;&nbsp;&nbsp;Password:{" "}
                  <input
                    onChange={handlePassword}
                    className="input"
                    type="password"
                  ></input>
                </li>
                <li className="nav-item">
                  &nbsp;
                  <Button
                    variant="outline-primary"
                    onClick={handleSubmit}
                    className="dropdown-content test"
                    type="submit"
                  >
                    Submit
                  </Button>
                </li>
                <li className="nav-item alert-danger">{loginErrMsg}</li>
              </ul>
            </form>
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
export default TopNavLogin;
