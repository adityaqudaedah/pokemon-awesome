import Image from "next/image";
import React from "react";
import { Pokemon } from "@/_libs/types";
import { capitalize } from "@/_libs/helper";
import { useRouter } from "next/navigation";

interface ICardPokemon {
  pokemon: Pokemon;
}

const CardPokemon: React.FC<ICardPokemon> = (props) => {
  const router = useRouter();

  const handleClickCard = (pokemonName: string) => {
    console.log(pokemonName);
    router.push(`/pokemons/${pokemonName}`);
  };
  return (
    <div
      className="flex justify-center items-center border-2 hover:bg-gray-700 hover:cursor-pointer rounded p-4 space-x-4"
      onClick={() => handleClickCard(props.pokemon.name)}
    >
      {/* images */}
      <div className="flex">
        <Image
          src={`${process.env.NEXT_PUBLIC_APP_POKEMON_ARTWORK}/${props.pokemon.name}.jpg`}
          alt="Picture of the pokemon"
          width={80}
          height={80}
          placeholder="blur"
          blurDataURL="../../../../public/pokeball-logo.png"
        />
      </div>
      {/* poke-info */}
      <div className="flex flex-col space-y-1">
        <h1 className="text-xl text-white font-semibold">
          {capitalize(props.pokemon.name)}
        </h1>
      </div>
    </div>
  );
};

export default CardPokemon;
