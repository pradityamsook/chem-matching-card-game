import React, { useState } from "react";
import { app } from "./base";

const db = app.firestore();

export const NewGameForm = () => {
  const [gameName, setGameName] = useState("");

  const onGameNameChange = (e) => {
    setGameName(e.target.value);
  };

  const onGameCreate = () => {
    if (!gameName) {
      console.log("can't upload");
      return;
    }
    db.collection("games").doc(gameName).set({
      name: gameName,
    });
    setGameName("");
  };

  return (
    <>
      <input value={gameName} onChange={onGameNameChange} type="text" />
      <button onClick={onGameCreate}>Create Game</button>
    </>
  );
};
