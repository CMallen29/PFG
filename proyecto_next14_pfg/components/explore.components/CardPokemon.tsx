import { PokemonSimple } from "@/types/pokemon.types";
import React from "react";
import PokemonInfo from "../pokemonInfo.components/PokemonInfo";

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
          <PokemonInfo name={pokemon.name}>
            <div key={pokemon.id} className="bg-greenUnify-500 p-4 rounded-xl w-fit ">
              <div className="bg-gradient-to-b from-yellowUnify-800 to-100%">
              <p className="capitalize">{pokemon.name}</p>
              <p>ID: {pokemon.id}</p>
              </div>
             
              <img
                src={pokemon.sprites.other["official-artwork"].front_default}
                alt=""
                width="150"
                height="150"
                className="m-2 drop-shadow-2xl hover:scale-125"
              />
              {pokemon.types.map((value) => (
                <span key={value.type.name} className={`bg-filter-${value.type.name} p-2 m-1 rounded-xl capitalize `}>
                  {value.type.name}
                </span>
              ))}
            </div>
          </PokemonInfo>
        );
      })}
    </div>
  );
}

export default CardPokemon;
