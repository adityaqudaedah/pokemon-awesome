"use client";

import React from "react";
import MyLoading from "@/_components/atoms/my-loading";
import CardListPokemon from "@/_components/molecules/card-list-pokemon";
import PageLayout from "@/_components/organism/page-layout";
import { useQuery } from "@tanstack/react-query";
import getAllPokemon from "@/_libs/fetcher/getPokemon";
import { PokemonList } from "@/_libs/types";
import { useAuth } from "./_hooks/useAuth";

export default function Home() {
  const {isAuthenticated} = useAuth()
  const { data, isLoading } = useQuery<PokemonList>({
    queryKey: ["allPokemon"],
    queryFn: async () =>
      getAllPokemon({
        url: "/pokemon",
        params: {
          limit: 20,
          offset: 0,
        },
      }),
  });

  if (!isAuthenticated) {
    return  <MyLoading message="Checking Authentication..." />
  }

  return (
    <div className="h-screen w-screen">
      {isLoading ? (
        <MyLoading message="Loading..." />
      ) : (
        <PageLayout>
          <div className="flex flex-col items-center max-w-screen min-h-screen space-y-4">
            {/* title */}
            <h1 className="text-2xl text-white font-semibold mt-4">
              Pokemon List
            </h1>

            {/*hr  */}

            {/* pokemon-list */}

            <section id="pokemon-list">
              <CardListPokemon pokemons={data?.results || []} />
            </section>
          </div>
        </PageLayout>
      )}
    </div>
  );
}
