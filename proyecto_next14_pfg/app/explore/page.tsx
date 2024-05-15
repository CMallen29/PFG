import CardPokemon from "@/components/explore.components/CardPokemon";
import Pagination from "@/components/explore.components/pagination";
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
    type?: string[];
  };
}) {
  //se usa searchParams porque el componente es de servidor - useSearchParams() es para cliente
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const type = searchParams?.type || "";
  const ITEMS_PER_PAGE = 10;

  //se obtienen todos los tipos y se filtra para obsener los que coinciden con type
  const listTypes = (await getField("type")).results.filter((item) => type.includes(item.name));

  
  

  const list = (await getField("pokemon")).results;
  const totalList = await filterPokemon(list, query);
  const totalItems = totalList.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  
  const dataPokemon = getPropertiesPokemon(totalList, ITEMS_PER_PAGE, offset);

  return (
    <div>
      page
      <CardPokemon dataPokemon={dataPokemon} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}

export default Page;
