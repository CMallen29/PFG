import { PokemonSimple } from "@/types/pokemon.types";
import React from "react";
import PokemonInfo from "../pokemonInfo.components/PokemonInfo";
import { ToggleFavorite } from "./ToggleFavorite";

async function CardPokemon({
  dataPokemon,
}: {
  dataPokemon: Promise<PokemonSimple[]>;
}) {
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
            <ToggleFavorite id={pokemon.id}/>
            <PokemonInfo name={pokemon.name}>
              <div
                key={pokemon.id}
                className="bg-greenUnify-500 rounded-xl w-48 grid justify-items-center  "
              >
                <div className="flex justify-between bg-yellowUnify-800 text-greenUnify-800 border-b-4 border-greenUnify-900/90 rounded-t-xl p-4 w-full text-xl">
                  <p className="capitalize">{pokemon.name}</p>
                  <p className="">{pokemon.id}</p>
                </div>

                <img
                  src={pokemon.sprites.other["official-artwork"].front_default}
                  alt=""
                  width="170"
                  height="170"
                  className=" m-2 hover:scale-150 transition duration-500 ease-in-out drop-shadow-[3px_3px_rgba(0,0,0)]"
                />
                <div className="flex flex-row justify-center w-full p-2">
                  {pokemon.types.map((value) => (
                    <div
                      key={value.type.name}
                      className={`bg-filter-${value.type.name} p-2 m-1 rounded-xl capitalize text-center w-full border-greenUnify-900/90 border-2`}
                    >
                      <span className="drop-shadow-[2px_2px_rgba(0,0,0)]">
                        {value.type.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </PokemonInfo>
          </div>
        );
      })}
    </div>
  );
}

export default CardPokemon;
