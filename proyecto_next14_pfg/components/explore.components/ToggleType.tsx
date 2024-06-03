"use client";
import * as React from "react";
import { Result } from "@/types/search.types";
import { useRouter, useSearchParams } from "next/navigation";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

function ToggleType({ data }: { data: Result[] }) {
  const searchParams = useSearchParams();
  const pathname = "/explore";
  const { replace } = useRouter();

  const [value, setValue] = React.useState("");

  function handleFilter(value: string) {
    const params = new URLSearchParams(searchParams);
    if (value === "all") {
      params.delete("type");
    } else {
      params.set("type", value);
    }
    params.delete("page");
    replace(`${pathname}?${params.toString()}`);
  }

  function typeToggle(type: string) {
    if (type !== "shadow" && type !== "unknown" && type !== "stellar") {
      return (
        <ToggleGroupItem
          value={type}
          key={type}
          className={`border-filter-${type}  border-2 flex items-center m-1  justify-center rounded-xl capitalize`}
        >
          {type}
        </ToggleGroupItem>
      );
    }
  }

  return (
    <div>
      <div>
        <ToggleGroup
          type="single"
          value={value}
          className="flex flex-wrap justify-center"
          onValueChange={(value) => {
            if (value) {
              setValue(value);
              handleFilter(value);
            }
          }}
        >
          <ToggleGroupItem
            value="all"
            key="all"
            className="border-white  border-2 flex items-center m-2  justify-center rounded-xl capitalize"
          >
            Todos
          </ToggleGroupItem>

          {data.map((type) => typeToggle(type.name))}
        </ToggleGroup>
      </div>
    </div>
  );
}

export default ToggleType;
