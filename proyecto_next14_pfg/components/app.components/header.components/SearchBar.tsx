"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useSearchParams, useRouter } from "next/navigation";

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  //se usa useSearchParams porque el componente es de cliente - searchParams es para servidor
  const searchParams = useSearchParams();
  const pathname = "/explore";
  const { replace } = useRouter();

  function handleSearch(term: string) {
    //extrae los parametros de la url
    //si hay un termino de busqueda, lo añade a la url. Si ya existe uno y es diferente, borra la paginación
    //si no hay termino de busqueda, borra la query y la paginación
    //reemplaza la url con los nuevos parametros y borra el valor del input
    const params = new URLSearchParams(searchParams);
    if (term) {
      if (term !== params.get("query")) {
        params.delete("page");
      }
      params.set("query", term);
    } else {
      params.delete("query");
      params.delete("page");
    }
    replace(`${pathname}?${params.toString()}`);
    document.querySelector<HTMLInputElement>("input[name=search")!.value = "";
  }

  return (
    <div className="relative flex flex-shrink-0 h-10">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        name="search"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch(e.currentTarget.value);
          }
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[24px] w-[24px] -translate-y-1/2 text-gray-500 peer-focus:text-yellow-600" />
    </div>
  );
};

export default SearchBar;
