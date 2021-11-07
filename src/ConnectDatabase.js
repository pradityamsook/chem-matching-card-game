import { Link, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

// internal functionals.
import { NewGameForm } from "./NewGameForm";
import { Game } from "./Game";
import { Home } from "./Home";
import { app } from "./base";

// css style.
import "./style/mvp.css";

const db = app.firestore();
export const ConnectDatabase = () => {
  const [games, setGame] = useState([]);

  useEffect(() => {
    const unmount = db.collection("games").onSnapshot((snapshot) => {
      const tempGames = [];
      snapshot.forEach((doc) => {
        tempGames.push({ ...doc.data(), id: doc.id });
      });
      setGame(tempGames);
    });
    return unmount;
  }, []);

  return (
    <>
      <main>
        <Switch>
          <Route exact path="/" render={() => <Home games={games} />} />
          <Route path="/:game" component={Game} />
        </Switch>
      </main>
    </>
  );
};

// export default connectDatabase;
