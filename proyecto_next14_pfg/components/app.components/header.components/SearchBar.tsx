"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from 'use-debounce';

const SearchBar = ({ placeholder }: { placeholder: string }) => {
  //se usa useSearchParams porque el componente es de cliente - searchParams es para servidor
  const searchParams = useSearchParams();
  const pathname = "/explore";
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);

  }, 300);

  

  return (
    <div className="relative flex flex-shrink-0 h-10">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        className="peer block w-full rounded-md border border-blue-950-200 py-[9px] pl-10 text-lg outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[24px] w-[24px] -translate-y-1/2 text-gray-500 peer-focus:text-yellow-600" />
    </div>
  );
};

export default SearchBar;