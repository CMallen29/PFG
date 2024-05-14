import { getUserById } from "@/model/user.data";
import CardPokemon from "../explore.components/CardPokemon";
import { fetchPokemon } from "../../model/pokemon.fetch";
import Pagination from "../explore.components/pagination";

async function PokemonStored({ page }: { page?: string }) {
  const user = await getUserById();
  const pokemons = user.save_pokemon;

  //paginación
  const ITEMS_PER_PAGE = 6;
  const totalPokemons = pokemons.length;
  const totalPages = Math.ceil(totalPokemons / ITEMS_PER_PAGE);
  const currentPage = Number(page) || 1;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  //fetch array de pokemons y paginacion
  const dataPokemon = fetchPokemon(pokemons, offset, ITEMS_PER_PAGE);
 

  return (
    <div className=" bg-teal-900 min-w-fit w-full min-h-fit text-white my-10 ">
      <div>
        <h1 className="text-2xl font-bold  mx-2 p-2">Mis pokemons</h1>
        <div className="grid place-items-center gap-3 bg-teal-950 p-4">
          <div>
            <CardPokemon dataPokemon={dataPokemon} />
          </div>
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
}

export default PokemonStored;
