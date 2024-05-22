import CardPokemon from "@/components/explore.components/CardPokemon";
import Pagination from "@/components/explore.components/pagination";
import {
  filterPokemon,
  getField,
  getPropertiesPokemon,
  typePokemon,
} from "@/model/pokemon.fetch";

async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
    type?: string;
  };
}) {
  //se usa searchParams porque el componente es de servidor - useSearchParams() es para cliente
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const type = searchParams?.type || "";
  const ITEMS_PER_PAGE = 10;

  
  let list;
  if (type == "") {
    list = (await getField("pokemon")).results;
  } else {
    const listTypes = (await getField("type")).results.filter((item) =>
      type.includes(item.name)
    );
    list = await typePokemon(listTypes[0].url);
  }

  const totalList = await filterPokemon(list, query);

  const totalItems = totalList.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const dataPokemon = getPropertiesPokemon(totalList, ITEMS_PER_PAGE, offset);

  return (
    <div className="bg-greenUnify-900/80 rounded-xl text-white">
      page
      <CardPokemon dataPokemon={dataPokemon} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}

export default Page;
