"use client";
import * as React from "react";
import { Result } from "@/types/search.types";
import { Toggle } from "./ui/toggle";
import { useRouter, useSearchParams } from "next/navigation";

function ToggleType({ data }: { data: Result[] }) {
  const searchParams = useSearchParams();
  const pathname = "/explore";
  const { replace } = useRouter();

  function handleFilter(value: boolean, type: Result) {
    const params = new URLSearchParams(searchParams);
    if (value) {
      console.log(value + type.name);

      params.append("type", type.name);
    } else {
      console.log("off" + type.name);
      params.delete("type", type.name);
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      {data.map((type) => (
        <Toggle
          key={type.name}
          className="flex items-center m-1  justify-center rounded"
          value={type.name}
          onPressedChange={(value) => {
            handleFilter(value, type);
          }}
        >
          {type.name}
        </Toggle>
      ))}
    </div>
  );
}

export default ToggleType;
