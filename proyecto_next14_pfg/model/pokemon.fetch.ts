import { Result } from "../types/search.types";
import { PokemonSimple } from "../types/pokemon.types";

function getField(field: string): Promise<Result[]> {
  const url = `https://pokeapi.co/api/v2/${field}?limit=1400&offset=0`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results);
}

async function getPokemon() {
  return await getField("pokemon");
}

export async function searchName(query: string) {
  const resultPokemon = await getPokemon();
  return resultPokemon.filter((pokemon) => pokemon.name.includes(query));
}

export async function getPropiertiesPokemon(
  query: string
): Promise<PokemonSimple[]> {
  const filterRaw = await searchName(query);
  return await Promise.all(
    filterRaw.map((pokemon) =>
      fetch(pokemon.url).then((response) => response.json())
    )
  );
}
