import { Result, Search } from "../types/search.types";
import { PokemonSimple } from "../types/pokemon.types";

export function getField(
  field: string,
  limit: number = 99999,
  offset: number = 0
): Promise<Search> {
  //limit y offset para obtener todos los resultados. La api solo devuelve 20 resultados
  const url = `https://pokeapi.co/api/v2/${field}?limit=${limit}&offset=${offset}}`;
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
    console.log(error);
    //pagina notfound
    return [];
  }
}
