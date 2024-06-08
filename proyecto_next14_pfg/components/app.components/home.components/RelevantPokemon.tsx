import { Pokemon } from "@/types/pokemon.types";
import { getField } from "@/model/pokemon.fetch";
import { datePokemon } from "@/model/pokemon.date";
import ProgresBar from "@/components/pokemonInfo.components/ProgresBar";
import Link from "next/link";
import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { ToggleFavorite } from "@/components/explore.components/ToggleFavorite";

async function RelevantPokemon() {
  const fieldPokemon = "pokemon/";
  //sacamos la fecha de hoy y la pasamos a la funcion datePokemon
  const day = new Date().toLocaleDateString();

  const sessionFav = await getServerSession(authOptions).then(
    (session) => session?.user.favorite
  );

  const dataPokemon = (await getField(fieldPokemon + datePokemon(day)).then(
    (data) => data
  )) as Pokemon;

  function getImagePokemon(sprite: string) {
    return sprite === null ? "/pokemon/pokeball.png" : sprite;
  }

  return (
    <div className="flex flex-col items-center text-white">
      <div className=" bg-greenUnify-900/90 rounded-xl mt-10 w-4/5">
        <div className="flex justify-between items-center w-full bg-greenUnify-500 rounded-t-xl text-2xl font-bold">
          <h2 className="text-2xl font-bold justify-center mx-2 p-2">
            Pokémon del día
          </h2>
          <ToggleFavorite id={dataPokemon.id} sessionFav={sessionFav} />
        </div>

        <Link href={`/pokemon/${dataPokemon.name}`}>
          <div className="grid grid-cols-3 items-center bg-greenUnify-900/90 p-4 w-auto rounded-b-xl">
            <div className="flex flex-col justify-center items-center">
              <Image
                src={getImagePokemon(
                  dataPokemon.sprites.other["official-artwork"].front_default
                )}
                alt="Relevant Pokémon"
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
        </Link>
      </div>
    </div>
  );
}

export default RelevantPokemon;
