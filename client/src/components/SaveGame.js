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

  return (
    <Fragment>{useSave()}</Fragment>
  )

}


