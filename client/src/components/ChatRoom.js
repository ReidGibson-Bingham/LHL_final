import { useEffect, useState, useContext } from "react";
import io from "socket.io-client";

import { gameContext } from "../providers/GameProvider";
import Button from "react-bootstrap/Button";

import ProgressBar from "./ProgressBar";
import ProgressBarComp from "./ProgressBarComp";

export default function ChatRoom() {
  const {
    errorCount,
    percentDone,
    setPercentDone,
    user,
    gameStatus,
    setErrorCount,
    setInput,
  } = useContext(gameContext);

  const [socket, setSocket] = useState("");
  const [name, setName] = useState("");
  const [notify, setNotify] = useState();
  const [status, setStatus] = useState({});
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [to, setTo] = useState("");
  const [playerStatus, setPlayerStatus] = useState([]);
  const [compStatus, setCompStatus] = useState([0]);

  const clear = function () {
    setMessages([]);
  };

  // This app makes a websocket connection immediately
  useEffect(() => {
    // Connect to server
    const socket = io("http://localhost:8080/");
    setSocket(socket);

    // All This stuff should be a Custom Hook, right?
    socket.on("connect", (event) => {
      // console.log("connected");
    });

    socket.on("notify", (msg) => {
      setNotify(msg);
    });

    socket.on("status", (msg) => {
      setStatus(msg);
    });

    socket.on("public", (msg) => {
      setMessages((prev) => [`${msg.from} says:` + msg.text, ...prev]);
    });

    socket.on("private", (msg) => {
      setMessages((prev) => [`${msg.from} says: ${msg.text}`, ...prev]);
    });

    socket.on("playerStatus", (data) => {
      setPlayerStatus((prev) => [`${data.from} says: ${data.data}`, ...prev]);
      console.log("player status to dong:", data.errorCount);
      setCompStatus([data.errorCount, data.percentDone]);
    });

    socket.on("autoConnect", (name) => {
      setTo(name);
      console.log("&& to:", name);
    });

    // ensures we disconnect to avoid memory leaks
    return () => socket.disconnect();
  }, []);

  //
  useEffect(() => {
    sendPlayerStatus();
  }, [percentDone]);

  const onTextChange = function (event) {
    setText(event.target.value);
  };
  const onToChange = function (event) {
    setTo(event.target.value);
  };
  const onNameChange = function (event) {
    setName(event.target.value);
  };

  const connect = function () {
    console.log("register", name);
    socket && user.name && socket.emit("register", user.name);
  };

  const disconnect = function () {
    socket && socket.emit("offline");
  };

  // Send chat message to the server
  const send = function () {
    socket && text && socket.emit("chat", { text, to });
  };

  const sendPlayerStatus = function (props) {
    socket &&
      errorCount &&
      percentDone &&
      socket.emit("playerStatus", { errorCount, percentDone, to });
  };
  useEffect(() => {
    if (gameStatus === "new") {
      setPercentDone(0);
      setCompStatus(0);
    }
  }, [gameStatus]);
  const list = messages.map((msg, i) => {
    return <li key={i}>{msg}</li>;
  });

  return (
    <container className="chatroom-container component-border">
      <h4>Competitive Duel</h4>
      <div>
        <ProgressBar />
        <ProgressBarComp compStatus={compStatus} />
      </div>
      <h4>
        {/* <div>
          <span>{status.connected}</span> clients connected
        </div>
        <div>
          <span>{status.active}</span> clients active
        </div> */}
        {/* <div className="notify">broadcast: {notify}</div> */}
      </h4>

      <div>
        {/* <input onChange={onNameChange} value={user.name} /> */}
        {/* <label>{user.name}</label> */}
      </div>
      <div className="inner-component-border">
        <Button variant="outline-dark" onClick={connect}>
          Click to Compete{" "}
        </Button>
        {/* <button onClick={disconnect}>disconnect</button> */}
        <div>
          {/* <input onChange={onToChange} value={to} placeholder="To" /> */}
          <h4>
            {user.name} vs {to}
          </h4>
        </div>
        <div>
          <textarea
            className="chat-input-text"
            onChange={onTextChange}
            placeholder="Type a message"
          ></textarea>
        </div>

        <Button variant="outline-primary" onClick={send}>
          Send
        </Button>
      </div>
      {/* <button onClick={sendPlayerStatus}>Send Player Status</button> */}
      {/* <button onClick={clear}>Clear</button> */}
      <div className="chat-texts inner-component-border">
        <ul>{list}</ul>
      </div>
    </container>
  );
}
