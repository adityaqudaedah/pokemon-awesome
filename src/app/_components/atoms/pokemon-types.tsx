import { POKEMON_TYPES } from "@/_libs/const";
import React from "react";
import {
  FaBug,
  FaMoon,
  FaDragon,
  FaFirefox,
  FaLeaf,
  FaGhost,
  FaRegSnowflake,
  FaStar,
  FaSkull,
  FaEye,
  FaMountain,
  FaWater,
} from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { GiFairyWings } from "react-icons/gi";
import { IoShield } from "react-icons/io5";
import { GiBatwingEmblem, GiUndergroundCave } from "react-icons/gi";
import { FaGear } from "react-icons/fa6";

const IconType: React.FC<{ pokemonTypes: string }> = ({ pokemonTypes }) => {
  switch (pokemonTypes.toLowerCase()) {
    case POKEMON_TYPES.BUG:
      return <FaBug />; // Replace with the actual icon
    case POKEMON_TYPES.DARK:
      return <FaMoon />; // Replace with the actual icon
    case POKEMON_TYPES.DRAGON:
      return <FaDragon />; // Replace with the actual icon
    case POKEMON_TYPES.ELECTRIC:
      return <AiFillThunderbolt />; // Replace with the actual icon
    case POKEMON_TYPES.FAIRY:
      return <GiFairyWings />; // Replace with the actual icon
    case POKEMON_TYPES.FIGHTING:
      return <IoShield />; // Replace with the actual icon
    case POKEMON_TYPES.FIRE:
      return <FaFirefox />; // Replace with the actual icon
    case POKEMON_TYPES.FLYING:
      return <GiBatwingEmblem />; // Replace with the actual icon
    case POKEMON_TYPES.GHOST:
      return <FaGhost />; // Replace with the actual icon
    case POKEMON_TYPES.GRASS:
      return <FaLeaf />; // Replace with the actual icon
    case POKEMON_TYPES.GROUND:
      return <GiUndergroundCave />; // Replace with the actual icon
    case POKEMON_TYPES.ICE:
      return <FaRegSnowflake />; // Replace with the actual icon
    case POKEMON_TYPES.NORMAL:
      return <FaStar />; // Replace with the actual icon
    case POKEMON_TYPES.POISON:
      return <FaSkull />; // Replace with the actual icon
    case POKEMON_TYPES.PSYCHIC:
      return <FaEye />; // Replace with the actual icon
    case POKEMON_TYPES.ROCK:
      return <FaMountain />; // Replace with the actual icon
    case POKEMON_TYPES.STEEL:
      return <FaGear />; // Replace with the actual icon
    case POKEMON_TYPES.WATER:
      return <FaWater />; // Replace with the actual icon
    default:
      return null;
  }
};

const PokemonTypes: React.FC<{ type: string }> = ({ type  }) => {
  return (
    <div className="flex border w-10 h-10 items-center justify-center rounded-full ">
      <span>
        <IconType pokemonTypes={type} />
      </span>
    </div>
  );
};

export default PokemonTypes;
