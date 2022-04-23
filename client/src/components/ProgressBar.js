import { useEffect, useState, useContext } from "react";
import { gameContext } from "../providers/GameProvider";
// import "../styles/ProgressBar.scss";
export default function ProgressBar() {
  const { percentDone } = useContext(gameContext);
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${percentDone}%`,
    backgroundColor: "#6a1b9a",
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${percentDone}%`}</span>
      </div>
    </div>
  );
}
