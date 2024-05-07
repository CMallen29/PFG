import {Result } from "../types/search.types";

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
  const resulsearch = await getPokemon();
  return resulsearch.filter((pokemon) => pokemon.name.includes(query));
}
