import { PokemonSimple } from "@/types/pokemon.types";
import React from "react";

async function CardPokemon({
  dataPokemon,
}: {
  dataPokemon: Promise<PokemonSimple[]>;
}) {
  return (
    <div>
      {(await dataPokemon).map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <p>{pokemon.id}</p>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default CardPokemon;
