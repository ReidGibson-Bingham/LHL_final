import { useState, useContext } from "react";
import axios from "axios";
//import "../styles/Signup.scss";
import { gameContext } from "../providers/GameProvider";

export default function Signup() {
  // States for registration
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
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
    gameTotalTime,
    setGameTotalTime,
    user,
    setUser,
  } = useContext(gameContext);

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
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
      name: name,
      email: email,
      password: password,
    };
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      axios
        .post(`http://localhost:3000/users`, userData)
        .then((res) => {
          console.log("post user", res.data, "name", name);
          setUser(res.data);
        })
        .catch((error) => {
          setError(error);
          console.log(error.response);
        });
      setError(false);
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
  //if (user === {}) {
  return (
    <div className="form-container">
      <h3>User Registration</h3>

      {/* Calling to the methods */}
      <span className="messages">
        {errorMessage()}
        {successMessage()}
      </span>

      <form className="sign-up-container">
        {/* Labels and inputs for form data */}
        <div className="row">
          <label className="label col-sm-4">Name:</label>
          <input
            onChange={handleName}
            className="input col-sm-2"
            value={name}
            type="text"
          />
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
          <label className="label col-sm-4">Email:</label>
          <input
            onChange={handleEmail}
            className="input col-sm-2"
            value={email}
            type="email"
          />
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
          <label className="label col-sm-4">Password:</label>
          <input
            onChange={handlePassword}
            className="input col-sm-2"
            value={password}
            type="password"
          />
        </div>
        <div className="row">&nbsp;</div>
        <div className="row text-center">
          <div className="align-items-center">
            <button
              onClick={handleSubmit}
              className="dropdown-content test"
              type="submit"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
  //}
  //return <div className="form-container"></div>;
}
