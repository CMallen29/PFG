import { Pokemon } from "@/types/pokemon.types";
import React from "react";
import { ToggleFavorite } from "./ToggleFavorite";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import Link from "next/link";
import { getImagePokemon } from "@/model/pokemon.fetch";

async function CardPokemon({
  dataPokemon,
}: {
  dataPokemon: Promise<Pokemon[]>;
}) {
  const sessionFav = await getServerSession(authOptions).then(
    (session) => session?.user.favorite
  );

  return (
    <div className="flex flex-row flex-wrap justify-center items-center gap-12 p-4 font-bold">
      {(await dataPokemon).length === 0 && (
        <p>
          Vaya... Parece que el Pokémon que buscas no ha sido descubierto aún
        </p>
      )}
      {(await dataPokemon).map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <ToggleFavorite id={pokemon.id} sessionFav={sessionFav} />
            <Link href={`/pokemon/${pokemon.name}`}>
              <div
                className="bg-greenUnify-500 rounded-xl w-48 grid justify-items-center  "
              >
                <div className="flex justify-between bg-yellowUnify-800 text-greenUnify-800 border-b-4 border-greenUnify-900/90 rounded-t-xl p-4 w-full text-xl">
                  <p className="capitalize">
                    {pokemon.name.replaceAll("-", " ")}
                  </p>
                  <p className="">{pokemon.id}</p>
                </div>

                <img
                  src={getImagePokemon(
                    pokemon.sprites.other["official-artwork"].front_default
                  )}
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
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default CardPokemon;
