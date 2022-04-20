import React, { useEffect, Fragment, useState } from "react";
import axios from "axios";

export default function Message() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [newMessagePost, setNewMessagePost] = useState([]);

  // axios.get("/games").then((response) => {
  //   console.log(response);
  // });

  // const onSubmitMessage = (e) => {
  //   e.preventDefault();
  //   setNewMessage("");
  // };

  return (
    <div>
      <p>message</p>
      <form>
        <label>chat with your friend</label>
        <textarea placeholder={"type your messages"} value={newMessage} />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
