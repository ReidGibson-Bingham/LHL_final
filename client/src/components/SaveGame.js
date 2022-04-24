import React, {Fragment, useState, useContext, useEffect} from "react";

import { gameContext } from "../providers/GameProvider";

export default function SaveGame() {

  const {
    saveGameData
  } = useContext(gameContext);

  const useSave = function() {

    useEffect(() => {

      saveGameData();

    }, []);

  }

  // i had to create this extra component to save the game conditionally, because the useSave hook could only be used conditionally if it was wrapped in a component

  return (
    <Fragment>{useSave()}</Fragment>
  )

}


