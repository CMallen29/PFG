import { ToggleFavorite } from "@/components/explore.components/ToggleFavorite";
import ProgresBar from "@/components/pokemonInfo.components/ProgresBar";
import { authOptions } from "@/lib/auth";
import {
  getField,
  getGenericData,
  getImagePokemon,
} from "@/model/pokemon.fetch";
import { EvolutionChain } from "@/types/evolution-chain.types";
import { PokemonSpecies } from "@/types/pokemon-species.types";
import { Pokemon } from "@/types/pokemon.types";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { getServerSession } from "next-auth";
import Image from "next/image";
import React from "react";

async function page({ params }: { params: { name: string } }) {
  const fieldPokemon = "pokemon/";
  const sessionFav = await getServerSession(authOptions).then(
    (session) => session?.user.favorite
  );

  const dataPokemon = (await getField(fieldPokemon + params.name).then(
    (data) => data
  )) as Pokemon;

  const dataPokemonSpecies = (await getGenericData(
    dataPokemon.species.url
  )) as PokemonSpecies;

  const dataEvolution = (await getGenericData(
    dataPokemonSpecies.evolution_chain.url
  ).then((data) => data)) as EvolutionChain;

  return (
    <div className="flex flex-col items-center text-white">
      <div className="grid grid-cols-3 items-center bg-greenUnify-900/90 p-4 w-4/5 rounded-xl mt-10 mb-10">
        <div className="flex place-self-end absolute z-50">
          <ToggleFavorite id={dataPokemon.id} sessionFav={sessionFav} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={getImagePokemon(
              dataPokemon.sprites.other["official-artwork"].front_default
            )}
            alt="Pokemon"
            width="500"
            height="500"
            className="absolute mb-10 mr-20 drop-shadow-[2px_2px_rgba(0,0,0)] "
          />
        </div>
        <div className="flex flex-col col-span-2 self-start  p-10 text-3xl font-bold">
          <div className="flex justify-between ">
            <p className="uppercase">{dataPokemon.name.replaceAll("-", " ")}</p>
            <p>{dataPokemon.id}</p>
          </div>
          <div className="my-1 rounded-2xl h-3 w-full bg-gradient-to-r from-yellowUnify-600 ..." />
          <div className="flex justify-between items-center text-lg font-normal">
            <div className="pl-10 pt-10 w-3/5">
              {dataPokemonSpecies.flavor_text_entries.find(
                (item) => item.language.name === "es"
              )?.flavor_text ??
                "Aún no se ha investigado lo suficiente sobre este Pokémon."}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 w-4/5">
        <div className=" bg-greenUnify-900/90 rounded-xl mt-10">
          <h2 className="w-full bg-greenUnify-500 p-2 rounded-t-xl text-2xl font-bold">
            Estadísticas
          </h2>
          <ProgresBar dataPokemon={dataPokemon} />
        </div>

        <div className="gap-10">
          <div className=" bg-greenUnify-900/90 rounded-xl mt-10 ">
            <h2 className="w-full bg-greenUnify-500 p-2 rounded-t-xl text-2xl font-bold">
              Características
            </h2>
            <div className=" grid grid-cols-2 gap-5 uppercase text-white text-xl font-semibold p-10">
              <p>Generación:</p>
              <p className="capitalize">
                {dataPokemonSpecies.generation.name.replaceAll("-", " ")}
              </p>
              <p>Experiencia:</p>
              <p> {dataPokemon.base_experience}</p>
              <p>Altura: </p>
              <p>{dataPokemon.height}</p>
              <p>Peso: </p>
              <p>{dataPokemon.weight}</p>
              <p>Ratio captura: </p>
              <p>{dataPokemonSpecies.capture_rate}</p>
              <p>Evoluciones: </p>
              <div className="flex flex-col gap-2 capitalize">
                <p>{dataEvolution.chain.species.name.replaceAll("-", " ")}</p>
                <p>
                  {dataEvolution.chain.evolves_to.map((item) =>
                    item.species.name.replaceAll("-", " ")
                  )}
                </p>
                <p>
                  {dataEvolution.chain.evolves_to.map((item) =>
                    item.evolves_to.map((item) =>
                      item.species.name.replaceAll("-", " ")
                    )
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-4/5 gap-10">
        <div className=" bg-greenUnify-900/90 rounded-xl w-3/4 mt-10">
          <h2 className="w-full bg-greenUnify-500 p-2 rounded-t-xl text-2xl font-bold">
            Riguido
          </h2>
          <div className="flex justify-center p-10">
            <audio src={dataPokemon.cries.latest} controls>
              aqui
            </audio>
          </div>
        </div>
        <div className="flex flex-col bg-greenUnify-900/90 rounded-xl w-3/4 mt-10">
          <h2 className="w-full bg-greenUnify-500 p-2 rounded-t-xl text-2xl font-bold">
            Tipos
          </h2>
          <div className="flex flex-col justify-center p-10">
            {dataPokemon.types.map((type) => (
              <div
                key={type.slot}
                className={`bg-filter-${type.type.name} p-2 m-1 rounded-xl capitalize text-center w-full border-greenUnify-900/90 border-2`}
              >
                <span className="drop-shadow-[2px_2px_rgba(0,0,0)]">
                  {type.type.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className=" bg-greenUnify-900/90 rounded-xl col-span-2 w-3/4 mt-10">
          <h2 className="w-full bg-greenUnify-500 p-2 rounded-t-xl text-2xl font-bold">
            Especial
          </h2>
          <div className="px-10 grid grid-cols-1 gap-4 p-10">
            <p className="flex justify-between">
              LEGENDARIO:{" "}
              {dataPokemonSpecies.is_legendary ? (
                <CheckCircleIcon width={"30px"} />
              ) : (
                <XCircleIcon width={"30px"} />
              )}
            </p>
            <p className="flex justify-between">
              MITICO:{" "}
              {dataPokemonSpecies.is_mythical ? (
                <CheckCircleIcon width={"30px"} />
              ) : (
                <XCircleIcon width={"30px"} />
              )}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-4/5 gap-10">
        <div className=" bg-greenUnify-900/90 rounded-xl w-3/4 mt-10">
          <h2 className="w-full bg-greenUnify-500 p-2 rounded-t-xl text-2xl font-bold">
            Sprites
          </h2>
          <div className="grid grid-cols-2 place-content-center justify-items-center p-10">
            <Image
              src={getImagePokemon(dataPokemon.sprites.front_default)}
              alt="front_default"
              width={"200"}
              height={"200"}
            />

            <Image
              src={getImagePokemon(dataPokemon.sprites.back_default)}
              alt="back_default"
              width={"200"}
              height={"200"}
            />
            <Image
              src={getImagePokemon(dataPokemon.sprites.front_shiny)}
              alt="front_shiny"
              width={"200"}
              height={"200"}
            />
            <Image
              src={getImagePokemon(dataPokemon.sprites.back_shiny)}
              alt="back_shiny"
              width={"200"}
              height={"200"}
            />
            <Image
              src={getImagePokemon(
                dataPokemon.sprites.versions["generation-v"]["black-white"]
                  .animated.front_default
              )}
              alt="animated_front"
              width={"200"}
              height={"200"}
            />
            <Image
              src={getImagePokemon(
                dataPokemon.sprites.versions["generation-v"]["black-white"]
                  .animated.back_default
              )}
              alt="animated_back"
              width={"200"}
              height={"200"}
            />
          </div>
        </div>
        <div className=" bg-greenUnify-900/90 rounded-xl w-3/4 mt-10">
          <h2 className="w-full bg-greenUnify-500 p-2 rounded-t-xl text-2xl font-bold">
            Shiny
          </h2>
          <div className="flex justify-center items-center pt-20">
            <Image
              src={getImagePokemon(
                dataPokemon.sprites.other["official-artwork"].front_shiny
              )}
              alt=""
              width="600"
              height="600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
