import ProgresBar from "@/components/pokemonInfo.components/ProgresBar";
import { getField } from "@/model/pokemon.fetch";
import { EvolutionChain } from "@/types/evolution-chain.types";
import { PokemonSpecies } from "@/types/pokemon-species.types";
import { Pokemon } from "@/types/pokemon.types";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

async function page({ params }: { params: { name: string } }) {
  const fieldPokemon = "pokemon/";

  const dataPokemon = (await getField(fieldPokemon + params.name).then(
    (data) => data
  )) as Pokemon;

  const dataPokemonSpecies = (await getGenericData(
    dataPokemon.species.url
  )) as PokemonSpecies;

  const dataEvolution = (await getGenericData(
    dataPokemonSpecies.evolution_chain.url
  ).then((data) => data)) as EvolutionChain;

  console.log(dataEvolution.chain.species.name);

  function getGenericData(url: string) {
    return fetch(url).then((response) => response.json());
  }

  function getImagePokemon(sprite: string) {
    return sprite === null ? "/pokemon/pokeball.png" : sprite;
  }

  return (
    <div className="flex flex-col items-center text-white">
      <div className="grid grid-cols-3 items-center bg-greenUnify-900/90 p-4 w-4/5 rounded-xl mt-10">
        <div className="flex flex-col justify-center items-center">
          <img
            src={getImagePokemon(
              dataPokemon.sprites.other["official-artwork"].front_default
            )}
            alt=""
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
            <div></div>
            <div className="pl-10 pt-10 w-3/5">
              {dataPokemonSpecies.flavor_text_entries.find(
                (item) => item.language.name === "es"
              )?.flavor_text ??
                "Aún no se ha investigado lo suficiente sobre este Pokémon."}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-4/5 gap-10">
        <div className=" bg-greenUnify-900/90 p-10 rounded-xl col-span-2 w-3/4 mt-10">
          <ProgresBar dataPokemon={dataPokemon} />
        </div>
        <div className=" bg-greenUnify-900/90 p-4 rounded-xl w-full mt-10 text-lg">
          CARACTERISTICAS----------------------------------------
          <div></div>
          <div className="pt-7 grid grid-cols-2 gap-2">
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
            <p>Ratio captura</p>
            <p>{dataPokemonSpecies.capture_rate}</p>
          </div>
          <div className="flex flex-row gap-2">
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

      <div className="flex flex-row w-4/5 gap-10">
        <div className=" bg-greenUnify-900/90 p-10 rounded-xl col-span-2 w-3/4 mt-10">
          <div>
            CRIES
            <audio src={dataPokemon.cries.latest} controls>
              aqui
            </audio>
          </div>
        </div>
        <div className=" bg-greenUnify-900/90 p-10 rounded-xl col-span-2 w-3/4 mt-10">
          <div className="flex flex-col">
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
        <div className=" bg-greenUnify-900/90 p-10 rounded-xl col-span-2 w-3/4 mt-10">
          <div className="px-10 grid grid-cols-1 gap-4">
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

      <div className=" bg-greenUnify-600 rounded-xl w-4/5 text-white mt-10">
        <h1 className="justify-center items-center p-2">Hola</h1>
        <div className="grid grid-cols-4 items-center bg-greenUnify-900/90 p-4 w-full rounded-b-xl mt-10">
          <div>
            <img
              src={getImagePokemon(
                dataPokemon.sprites.other["official-artwork"].front_shiny
              )}
              alt=""
              width="200"
              height="200"
            />
          </div>

          <div>
            <p>SPRITES</p>
            <img src={dataPokemon.sprites.front_default} alt="" />
          </div>
          <div>
            <img src={dataPokemon.sprites.front_shiny} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
