import React from "react";
import { Link } from "react-router-dom";
import { NewGameForm } from "./NewGameForm";

export const Home = ({ games }) => {
  return (
    <>
      <section>
        {games.map((game, key) => (
          <Link to={`/${game.id}`}>
            <aside key={key}>
              <img src={game.cards ? game.images[0].url : ""} alt="game" />
              <h3>{game.name}</h3>
            </aside>
          </Link>
        ))}
      </section>
      <footer>
        <NewGameForm />
      </footer>
    </>
  );
};
