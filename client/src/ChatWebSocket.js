import React, { useEffect } from "react";

export default function ChatWebSocket(props) {
  useEffect(() => {
    props.getRoomData();
    props.cableApp.room = props.cableApp.cable.subscriptions.create(
      {
        channel: "ChatChannel",
        room: 1,
      },
      {
        received: (updatedRoom) => {
          props.updateApp(updatedRoom);
        },
      }
    );
  }, []);

  return <div></div>;
}
