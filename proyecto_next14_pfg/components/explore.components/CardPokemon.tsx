import { PokemonSimple } from "@/types/pokemon.types";
import React from "react";

async function CardPokemon({
  dataPokemon,
}: {
  dataPokemon: Promise<PokemonSimple[]>;
}) {
  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-12 p-4">
      {(await dataPokemon).length === 0 && (
        <p>
          Vaya... Parece que el Pokémon que buscas no ha sido descubierto aún
        </p>
      )}
      {(await dataPokemon).map((pokemon) => {
        return (
          <div key={pokemon.id} className="bg-teal-600 p-4 rounded w-fit ">
            <p>{pokemon.id}</p>
            <p>{pokemon.name}</p>
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt=""
              width="150"
              height="150"
            />
            {pokemon.types.map((value) => (
              <span key={value.type.name} className="p-2">{value.type.name}</span>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default CardPokemon;
