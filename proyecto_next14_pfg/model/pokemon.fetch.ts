import { Result, Search } from "../types/search.types";
import { PokemonSimple } from "../types/pokemon.types";

const URL = "https://pokeapi.co/api/v2/";

export function getField(
  field: string,
  limit: number = 99999,
  offset: number = 0
): Promise<Search> {
  const url = `${URL}${field}?limit=${limit}&offset=${offset}}`;
  return fetch(url).then((response) => response.json());
}

export async function filterPokemon(
  list: Result[],
  query: string
): Promise<Result[]> {
  return list.filter((pokemon) => pokemon.name.includes(query));
}

export async function getPropertiesPokemon(
  listURL: Result[],
  ITEMS_PER_PAGE: number,
  offset: number
): Promise<PokemonSimple[]> {
  const limit = offset + ITEMS_PER_PAGE;

  try {
    return await Promise.all(
      listURL
        .slice(offset, limit)
        .map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        )
    );
  } catch (error) {
    console.log("8" + error);
    //pagina notfound
    return [];
  }
}

export async function fetchPokemon(
  pokemons: number[],
  offset: number,
  ITEMS_PER_PAGE: number
): Promise<PokemonSimple[]> {
  const limit = offset + ITEMS_PER_PAGE;
  const urlSingle = `${URL}pokemon/`;

  return await Promise.all(
    pokemons
      .slice(offset, limit)
      .map((pokemon) =>
        fetch(urlSingle + pokemon).then((response) => response.json())
      )
  );
}
