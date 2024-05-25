import React, { useEffect, useState } from "react";
import styles from '../utils/css/Test.module.css';

function Test() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
      .then((response) => response.json())
      .then((data) => {
        const fetches = data.results.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        );
        Promise.all(fetches)
        .then((results) => {
          setPokemonData(results);
        });
      });
  }, []);

  return (
    <article className={styles.Layout}>
      {pokemonData.map((pokemon, index) => (
        <section key={index} className={styles.Card}>
          <p>{pokemon.name}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className={styles.img} />
        </section>
      ))}
    </article>
  );
}

export default Test;
