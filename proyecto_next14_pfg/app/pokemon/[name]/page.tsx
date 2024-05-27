import { getField } from "@/model/pokemon.fetch";
import { EvolutionChain } from "@/types/evolution-chain.types";
import { PokemonSpecies } from "@/types/pokemon-species.types";
import { Pokemon } from "@/types/pokemon.types";
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
          <div className="text-lg font-normal pt-7 text-justify">
            <p>Base Experience: {dataPokemon.base_experience}</p>
            <p>Height: {dataPokemon.height}</p>
            <p>Weight: {dataPokemon.weight}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-4/5 gap-10">
        <div className=" bg-greenUnify-900/90 p-4 rounded-xl col-span-2 w-3/4 mt-10">

        <div>
            {dataPokemon.stats.map((item) => (
              <div key={item.stat.name}>
                <p className="uppercase text-white">
                  {item.stat.name.replaceAll("-", " ")}{" "}
                </p>
                <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                  <div
                    className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-2 leading-none rounded-full "
                    style={{ width: `${item.base_stat*100/255}%` }}
                  >
                    {item.base_stat}
                  </div>
                </div>
              </div>
            ))}
          </div>



          <div>
            {dataPokemon.stats.map((item) => (
              <div
                key={item.stat.name}
                className="flex flex-row items-center justify-between px-10 py-2 m-4 rounded-full bg-gradient-to-r from-greenUnify-500 text-greenUnify-800 font-semibold border-greenUnify-500 border-4"
              >
                <p className="uppercase text-white">
                  {item.stat.name.replaceAll("-", " ")}{" "}
                </p>
                <p className="text-yellowUnify-600">{item.base_stat}</p>
                
                
              </div>

              
            ))}
          </div>
        </div>
        <div className=" bg-greenUnify-900/90 p-4 rounded-xl w-full mt-10">
          {dataPokemonSpecies.flavor_text_entries.find(
            (item) => item.language.name === "es"
          )?.flavor_text ??
            "Aún no se ha investigado lo suficiente sobre este Pokémon."}
        </div>
      </div>

      <div>
        DATA GENERAL
        <img
          src={getImagePokemon(
            dataPokemon.sprites.other["official-artwork"].front_shiny
          )}
          alt=""
          width="200"
          height="200"
        />
        <div>
          Tipos:
          {dataPokemon.types.map((type) => (
            <p key={type.slot}>
              Tipo {type.slot} : {type.type.name}
            </p>
          ))}
        </div>
      </div>

      <div>
        EVOLUCIONES
        
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
      <div>
        RATIO CAPTURA
        <p>{dataPokemonSpecies.capture_rate}</p>
      </div>
      <div>
        CRIES
        <audio src={dataPokemon.cries.latest} controls>
          aqui
        </audio>
      </div>
      <div>
        LEGENDARIO/MITICO
        <p>LEGENDARIO: {dataPokemonSpecies.is_legendary ? "SI" : "NO"}</p>
        <p>MITICO: {dataPokemonSpecies.is_mythical ? "SI" : "NO"}</p>
      </div>
      <div>
        <p>SPRITES</p>
        <img src={dataPokemon.sprites.front_default} alt="" />
        <img src={dataPokemon.sprites.front_shiny} alt="" />
      </div>
      <div>
        <p>GENERATION</p>
        <p className="uppercase">
          {dataPokemonSpecies.generation.name.replaceAll("-", " ")}
        </p>
      </div>
    </div>
  );
}

export default page;
