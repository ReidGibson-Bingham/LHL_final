import { useState } from "react";

export default function ProgressBarComp(props) {
  const { compStatus } = props;
  // console.log("coponent bar", compStatus);
  const containerStyles = {
    height: 20,
    width: 400,
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${compStatus[1] ? compStatus[1] : 0}%`,
    backgroundColor: "#ff8e50",
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
        <span style={labelStyles}>
          Opponent:{Math.floor(compStatus[1] ? compStatus[1] : 0)}
        </span>
      </div>
    </div>
  );
}
