import { Pokemon } from "@/types/pokemon.types";

function ProgresBar({ dataPokemon }: { dataPokemon: Pokemon }) {
  return (
    <div className="p-5">
      {dataPokemon.stats.map((item) => (
        <div key={item.stat.name}>
          <div className="flex justify-between pt-4 pl-1 pr-9 uppercase text-white text-xl font-semibold">
            <p className="drop-shadow-[2px_2px_rgba(0,0,0)]">
              {item.stat.name.replaceAll("-", " ")}{" "}
            </p>
            <p>{item.base_stat}</p>
          </div>
          <div className="w-full h-7 bg-black/70 rounded-full dark:bg-gray-700">
            <div
              className="h-7 bg-warningUnify-800 text-xs font-medium p-2 leading-none rounded-full border-4 border-black/70"
              style={{ width: `${(item.base_stat * 100) / 255}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProgresBar;
