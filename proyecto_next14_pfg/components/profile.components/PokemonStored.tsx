import { getUserById } from "@/model/user.data";
import CardPokemon from "../explore.components/CardPokemon";
import { fetchPokemonUser } from "../../model/pokemon.fetch";
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
  const dataPokemon = fetchPokemonUser(pokemons, offset, ITEMS_PER_PAGE);
 

  return (
    <div className=" bg-greenUnify-600 min-w-fit w-full min-h-fit text-white my-10 rounded-xl">
      <div>
        <h1 className="text-2xl font-bold mx-2 p-2">Mis pokemons</h1>
        <div className="grid place-items-center gap-3 bg-greenUnify-800 p-4 rounded-b-xl">
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
