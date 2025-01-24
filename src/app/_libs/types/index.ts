import React from "react";

export type User = {
  username: string;
  authorized: boolean;
};

export type Pokemon = {
  name: string;
  url?: string;
};

export type Auth = {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
  user: User;
  setUser : React.Dispatch<React.SetStateAction<User>>
};

export type LoginType = {
  username: string;
  password: string;
};

export type PokemonList = {
  count: number;
  results: Array<Pokemon>;
  next?: string;
};

type Ability = {
  ability: { name: string };
  is_hidden: boolean;
};

type Statistics = {
  base_stat: number;
  stat: { name: string };
};
type PokemonType = {
  type: { name: string };
};

type Sprites = {
  other: {
    "official-artwork": {
      front_default: string;
      front_shiny: string;
    };
  };
};

type Move = {
  move: { name: string };
};

export type PokemonDetailType = {
  id: number;
  name: string;
  weight: number;
  height: number;
  abilities: Array<Ability>;
  stats: Array<Statistics>;
  types: Array<PokemonType>;
  moves: Array<Move>;
  sprites: Sprites;
};
