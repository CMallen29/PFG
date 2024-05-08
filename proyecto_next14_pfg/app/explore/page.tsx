import { getPropiertiesPokemon, searchName } from "@/model/pokemon.fetch";

async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  //se usa searchParams porque el componente es de servidor - useSearchParams() es para cliente
  const query = searchParams?.query || "";

  const data = await getPropiertiesPokemon(query);

  return (
    <div>
      page
      {data.map((pokemon) => {
        return (
          <div>
            <p>{pokemon.id}</p>
            <p>{pokemon.name}</p>
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
        );
      })}
    </div>
  );
}

export default Page;
