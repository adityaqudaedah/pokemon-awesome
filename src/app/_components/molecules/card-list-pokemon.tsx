import { Pokemon } from "@/_libs/types";
import React from "react";
import CardPokemon from "./card-pokemon";

interface ICardListPokemon {
  pokemons: Array<Pokemon>;
}
const CardListPokemon: React.FC<ICardListPokemon> = (props) => {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {props.pokemons.map((pokemon, index) => (
        <li key={index}>
          <CardPokemon pokemon={pokemon} />
        </li>
      ))}
    </ul>
  );
};

export default CardListPokemon;
