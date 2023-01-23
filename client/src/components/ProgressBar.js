import { useEffect, useState, useContext } from "react";
import { gameContext } from "../providers/GameProvider";

export default function ProgressBar() {
  const { percentDone } = useContext(gameContext);
  let percDone = Math.floor(percentDone);
  const containerStyles = {
    height: 20,
    width: "95%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 5,
  };

  const fillerStyles = {
    height: "100%",
    width: `${percentDone}%`,
    backgroundColor: "#81D8D0",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "#1b8b9a",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`You:${percDone}`}</span>
      </div>
    </div>
  );
}
