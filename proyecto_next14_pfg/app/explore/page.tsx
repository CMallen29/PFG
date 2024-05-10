import Pagination from "@/components/app.components/pagination";
import {
  filterPokemon,
  getField,
  getPropertiesPokemon,
} from "@/model/pokemon.fetch";

async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  //se usa searchParams porque el componente es de servidor - useSearchParams() es para cliente
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const ITEMS_PER_PAGE = 10;

  const list = (await getField("pokemon")).results;
  const totalList = await filterPokemon(list, query);
  const totalItems = totalList.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const dataPokemon = getPropertiesPokemon(totalList, ITEMS_PER_PAGE, offset);

  return (
    <div>
      page
      {(await dataPokemon).map((pokemon) => {
        return (
          <div key={pokemon.id}>
            <p>{pokemon.id}</p>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
        );
      })}
      <Pagination totalPages={totalPages} />
    </div>
  );
}

export default Page;
