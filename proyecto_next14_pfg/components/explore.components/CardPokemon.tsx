import { PokemonSimple } from "@/types/pokemon.types";
import React from "react";
import PokemonInfo from "../pokemonInfo.components/PokemonInfo";
import { ToggleFavorite } from "./ToggleFavorite";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

async function CardPokemon({
  dataPokemon,
}: {
  dataPokemon: Promise<PokemonSimple[]>;
}) {
  const sessionFav = await getServerSession(authOptions).then((session) => session?.user.favorite);
  console.log(sessionFav);
  
  
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-12 p-4 font-bold">
      {(await dataPokemon).length === 0 && (
        <p>
          Vaya... Parece que el Pokémon que buscas no ha sido descubierto aún
        </p>
      )}
      {(await dataPokemon).map((pokemon) => {
        return (
          <div>
            <ToggleFavorite id={pokemon.id} sessionFav={sessionFav}/>
            <PokemonInfo pokemon={pokemon}/>
          </div>
        );
      })}
    </div>
  );
}

export default CardPokemon;
