import React, { useState, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";

// internal functionals.
import { NewCard } from "./NewCard";
import { app } from "./base";

// css style
import "./style/textFormat.css";

export const Game = () => {
  const [cards, setCard] = useState([]);
  const [gameName, setGameName] = useState("");

  const match = useRouteMatch("/:game");
  const { game } = match.params;

  const db = app.firestore();

  useEffect(() => {
    const unmount = db
      .collection("games")
      .doc(game)
      .onSnapshot((doc) => {
        setCard(doc.data().images || []);
        setGameName(doc.data().name);
      });
    return unmount;
  }, []);

  return (
    <>
      <section>
        <header>
          <h1>{gameName}</h1>
          <p>
            Go to the <Link to="/">Home</Link>
          </p>
        </header>
        {cards.map((card, key) => (
          <aside key={key}>
            <img src={card.url} alt="game" width="300" height="234" />
            <h3 className="format">{card.cardName}</h3>
          </aside>
        ))}
      </section>
      <footer>
        <NewCard currentGame={game} />
      </footer>
    </>
  );
};
