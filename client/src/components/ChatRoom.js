import { useEffect, useState, useContext } from "react";
import io from "socket.io-client";

import { gameContext } from "../providers/GameProvider";

export default function ChatRoom() {
  const { errorCount } = useContext(gameContext);

  const [socket, setSocket] = useState("");
  const [name, setName] = useState("");
  const [notify, setNotify] = useState();
  const [status, setStatus] = useState({});
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [to, setTo] = useState("");
  const [error, setError] = useState("");

  const clear = function () {
    setMessages([]);
  };

  // This app makes a websocket connection immediately
  useEffect(() => {
    // Connect to server
    const socket = io("http://localhost:8080/");
    setSocket(socket);

    // All This stuff should be a Custom Hook, right?

    //======================
    // onErrorCountChange = (errorCount) => {
    //   client.send(
    //     JSON.stringify({
    //       type: "contentchange",
    //       username: this.state.username,
    //       content: errorCount,
    //     })
    //   );
    // };
    //
    //======================

    socket.on("connect", (msg) => {
      console.log("connected");
      socket.emit("clientStatus", errorCount);
      // setError(msg);
    });

    socket.on("notify", (msg) => {
      setNotify(msg);
    });

    socket.on("status", (msg) => {
      setStatus(msg);
    });

    socket.on("public", (msg) => {
      setMessages((prev) => ["Broadcast: " + msg.text, ...prev]);
    });

    // socket.on("private", (msg) => {
    //   setMessages((prev) => [`${msg.from} says: ${msg.text}`, ...prev]);
    // });

    // ensures we disconnect to avoid memory leaks
    return () => socket.disconnect();
  }, []);

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
    socket && name && socket.emit("register", name);
  };

  const disconnect = function () {
    socket && socket.emit("offline");
  };

  // Send chat message to the server
  const send = function () {
    socket && text && socket.emit("chat", { errorCount, text, to });
  };

  const list = messages.map((msg, i) => {
    return <li key={i}>{msg}</li>;
  });
  console.log("messages", messages);

  return (
    <div className="ChatRoom">
      <h1>{errorCount}</h1>
      <h4>
        <div>
          <span>{status.connected}</span> clients connected
        </div>
        <div>
          <span>{status.active}</span> clients active
        </div>
        {/* <div>
          <span>{status.errorCount}</span> clients errorCount
        </div> */}
        <div className="error">{error}</div>
      </h4>

      <div>
        <input onChange={onNameChange} value={name} placeholder="Name" />
      </div>
      <button onClick={connect}>Login</button>
      <button onClick={disconnect}>Logout</button>
      {/* <div>
        <input onChange={onToChange} value={to} placeholder="To" />
      </div> */}
      <div>
        <textarea
          onChange={onTextChange}
          placeholder="Type a message"
        ></textarea>
      </div>

      <button onClick={send}>Send</button>
      <button onClick={clear}>Clear</button>
      <ul>{list}</ul>
      {/* <TypingText /> */}
    </div>
  );
}
