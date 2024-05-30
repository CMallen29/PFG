"use client";

import { Toggle } from "@/components/ui/toggle";
import { StarIcon } from "@heroicons/react/16/solid";
import { useSession } from "next-auth/react";

export function ToggleFavorite({ id }: { id: number }) {
  const { data: session } = useSession();
  console.log(id);
  
  console.log(session?.user.favorite);

  function handleFavorite() {
    if (session?.user.favorite) {
      if (session?.user.favorite.includes(id)) {
        session?.user.favorite.splice(session?.user.favorite.indexOf(id), 1);
      } else {
        session?.user.favorite.push(id);
      }
    }
  }

  return (
    <Toggle
      value={id}
      aria-label="Toggle"
      defaultPressed={session?.user.favorite.includes(id)}
      onPressedChange={() => {
        handleFavorite();
        console.log(session?.user.favorite);
      }}
    >
      <StarIcon className="w-6 h-6" />
    </Toggle>
  );
}
