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

  function getGenericData(url: string) {
    return fetch(url).then((response) => response.json());
  }

  return (
    <div>
      page
      <p>name: {params.name}</p>
      <div>
        DATA GENERAL
        <p>ID: {dataPokemon.id}</p>
        <p>Nombre: {dataPokemon.name}</p>
        <img
          src={dataPokemon.sprites.other["official-artwork"].front_default}
          alt=""
          width="200"
          height="200"
        />
        <img
          src={dataPokemon.sprites.other["official-artwork"].front_shiny}
          alt=""
          width="200"
          height="200"
        />
        <p>Base Experience: {dataPokemon.base_experience}</p>
        <p>Height: {dataPokemon.height}</p>
        <p>Weight: {dataPokemon.weight}</p>
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
        STATS
        <div>
          {dataPokemon.stats.map((item) => (
            <div>
              <p>{item.stat.name}</p>
              <p>{item.base_stat}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        EVOLUCIONES
        <p>{dataEvolution.chain.species.name}</p>
        <p>{dataEvolution.chain.evolves_to.map((item) => item.species.name)}</p>
        <p>
          {dataEvolution.chain.evolves_to.map((item) =>
            item.evolves_to.map((item) => item.species.name)
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
    </div>
  );
}

export default page;
