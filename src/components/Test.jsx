import React, { useState } from "react";

function PokemonCards() {
  const [State, setState] = useState([]);

  fetch(" https://pokeapi.co/api/v2/pokemon/ ")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setState(data.results);
    });

  return (
    <>
      {State.map((card, index) => (
        <div key={index}>
          {card.name}
        </div>
      ))}
    </>
  );
}

export default PokemonCards;