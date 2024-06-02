import { Pokemon } from "@/types/pokemon.types";
import { getField } from "@/model/pokemon.fetch";
import { datePokemon } from "@/model/pokemon.date";
import ProgresBar from "@/components/pokemonInfo.components/ProgresBar";
import PokemonInfo from "@/components/pokemonInfo.components/PokemonInfo";

async function RelevantPokemon() {
  const fieldPokemon = "pokemon/";
  //sacamos la fecha de hoy y la pasamos a la funcion datePokemon
  const day = new Date().toLocaleDateString();

  const dataPokemon = (await getField(fieldPokemon + datePokemon(day)).then(
    (data) => data
  )) as Pokemon;

  function getImagePokemon(sprite: string) {
    return sprite === null ? "/pokemon/pokeball.png" : sprite;
  }

  return (
    <div className="flex flex-col items-center text-white">
      <div className=" bg-greenUnify-600 rounded-xl w-4/5 mt-10">
        <h2 className="text-2xl font-bold justify-center mx-2 p-2">POKÉMON DEL DÍA</h2>
        <PokemonInfo name={dataPokemon.name}>
          <div className="grid grid-cols-3 items-center bg-greenUnify-900/90 p-4 w-auto rounded-b-xl">
            <div className="flex flex-col justify-center items-center">
              <img
                src={getImagePokemon(
                  dataPokemon.sprites.other["official-artwork"].front_default
                )}
                alt=""
                width="500"
                height="500"
                className="absolute mb-10 mr-20 drop-shadow-[2px_2px_rgba(0,0,0)] "
              />
            </div>
            <div className="flex flex-col col-span-2 self-start  p-10 text-3xl font-bold">
              <div className="flex justify-between ">
                <p className="uppercase">
                  {dataPokemon.name.replaceAll("-", " ")}
                </p>
                <p>{dataPokemon.id}</p>
              </div>
              <div className="my-1 rounded-2xl h-3 w-full bg-gradient-to-r from-yellowUnify-600 ..." />

              <ProgresBar dataPokemon={dataPokemon} />
            </div>
          </div>
        </PokemonInfo>
      </div>
    </div>
  );
}

export default RelevantPokemon;
