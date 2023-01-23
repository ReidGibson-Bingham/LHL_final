import React, {Fragment, useState, useContext, useEffect} from "react";

import { gameContext } from "../providers/GameProvider";

// this component was made because saveGameData had to be placed in a hook to prevent it from saving games in a loop. That hook had to be placed in a function and wrapped in a component to get around the limitation of hooks not being able to be used in a condition
// we need to autosave to save the user time when finishing a game, having to press a button to save would cause them to lose time

export default function AutoSave() {

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


