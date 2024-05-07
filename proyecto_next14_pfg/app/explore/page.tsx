import { searchName } from "@/model/pokemon.fetch";

async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  //se usa searchParams porque el componente es de servidor - useSearchParams() es para cliente
  const query = searchParams?.query || "";

  const data = await searchName(query);
  // const berry = await getBerry(query);
  // const contestType = await getContestType(query);
  // const contestEffect = await getContestEffect(query);

  // console.log(pokemon);

  return (
    <div>
      page
      {data.map((pokemon) => (
        <div>
          <hr />
          <p>Nombre: {pokemon.name} </p>
          <p>Url: {pokemon.url}</p>
        </div>
      ))}
    </div>
  );
}

export default Page;
