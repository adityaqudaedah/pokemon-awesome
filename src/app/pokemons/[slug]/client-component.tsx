"use client";
import Image from "next/image";
import React from "react";
import ProgressBar from "@/_components/atoms/progress-bar";
import { capitalize } from "@/_libs/helper";
import { FaRulerVertical, FaWeightHanging, FaArrowLeft } from "react-icons/fa";
import { SiTarget } from "react-icons/si";
import { useQuery } from "@tanstack/react-query";
import { PokemonDetailType } from "@/_libs/types";
import getAllPokemon from "@/_libs/fetcher/getPokemon";
import MyLoading from "@/_components/atoms/my-loading";
import Link from "next/link";
import PokemonTypes from "@/_components/atoms/pokemon-types";

const PokemonDetail: React.FC<{ slug: string }> = ({ slug }) => {
  const { data, isLoading } = useQuery<PokemonDetailType>({
    queryKey: ["pokemonByName", slug],
    queryFn: async () =>
      getAllPokemon({
        url: `/pokemon/${slug}`,
      }),
  });

  return (
    <React.Fragment>
      {isLoading ? (
        <MyLoading message="Loading..." />
      ) : (
        <div className="grid grid-cols-12 gap-4 place-content-center mt-4">
          {/* info */}
          <div className="col-start-4 col-end-10 grid grid-cols-4">
            {/* left-info*/}
            <div className="col-start-1 col-end-2 flex flex-col space-y-2">
              <div className="flex ">
                <Link href={"/"} className="text-xl">
                  <FaArrowLeft />
                </Link>
              </div>

              {data?.types.map((t, index) => (
                <div
                  className="flex w-full justify-end items-center space-x-2"
                  key={index}
                >
                  <span className="text-lg">
                    {capitalize(t.type.name || "")}{" "}
                  </span>
                  <PokemonTypes type={t.type.name || ""} />
                </div>
              ))}
            </div>
            {/* name & sprites */}
            <div className="col-start-2 col-end-4 flex flex-col justify-center items-center space-y-4">
              {/* name */}
              <section>
                <span className="text-2xl font-semibold">
                  {capitalize(data?.name as string)}
                </span>
              </section>

              {/* sprites */}
              <section>
                <Image
                  src={
                    data?.sprites.other["official-artwork"].front_default || ""
                  }
                  alt={`Picture of ${data?.name}`}
                  width={200}
                  height={200}
                  placeholder="blur"
                  blurDataURL="../../../../public/pokeball-logo.png"
                />
              </section>
            </div>

            {/* right-info */}
            {/* height & weight */}
            <div className="col-start-4 col-end-5 flex flex-col space-y-4">
              <div className="flex space-x-2 w-2/3 h-1/4 items-center justify-center border rounded-lg">
                <FaRulerVertical className="text-lg" />
                <span className="text-lg">
                  {(data?.height as number) / 10}{" "}
                  <span className="text-lg">m</span>
                </span>
              </div>

              <div className="flex space-x-2 w-2/3 h-1/4 items-center justify-center border rounded-lg">
                <FaWeightHanging className="text-lg" />
                <span className="text-lg">
                  {(data?.weight as number) / 10}
                  <span className="text-lg"> kg</span>
                </span>
              </div>
            </div>
          </div>

          {/* stats */}
          <div className="col-start-4 col-end-10 border grid grid-cols-4 gap-4 rounded p-4">
            {/* title*/}
            <div className="col-start-1 col-end-5 flex flex-col space-y-2">
              <span className="text-xl font-semibold">Statistics</span>
              <hr className="border-t border-gray-300 w-full" />
            </div>

            {data?.stats.map((statistic, index) => (
              <React.Fragment key={index}>
                {/* stats-name */}
                <div className="col-start-1 flex justify-end ">
                  <span className="text-lg">{statistic.stat.name}</span>
                </div>
                {/* stats-bar */}
                <div className="col-start-2 col-end-4 flex items-center">
                  <ProgressBar progress={statistic.base_stat} />
                </div>
                {/* stats-number */}
                <div className="col-start-4 flex justify-end ">
                  <span className="text-lg">{statistic.base_stat}</span>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* abilities */}
          <div className="col-start-4 col-end-7 flex flex-col border p-4 space-y-4">
            {/* title */}
            <div className="flex flex-col space-y-2">
              <span className="text-xl font-semibold">Abilities</span>
              <hr className="border-t border-gray-300 w-full" />
            </div>

            {/* ability */}
            <ul className="flex flex-col max-h-80 overflow-auto">
              {data?.abilities.map((pokemonAbility, index) => (
                <li className="flex items-center space-x-2" key={index}>
                  <SiTarget className="text-xs" />
                  <span className="text-lg">
                    {capitalize(pokemonAbility.ability.name)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* moves */}
          <div className="col-start-7 col-end-10 flex flex-col border p-4 space-y-4">
            {/* title */}
            <div className="flex flex-col space-y-2">
              <span className="text-xl font-semibold">Moves</span>
              <hr className="border-t border-gray-300 w-full" />
            </div>

            {/*  */}
            <ul className="flex flex-col max-h-80 overflow-auto">
              {data?.moves.map((pokemonMove, index) => (
                <li className="flex items-center space-x-2" key={index}>
                  <SiTarget className="text-xs" />
                  <span className="text-lg">
                    {capitalize(pokemonMove.move.name)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default PokemonDetail;
