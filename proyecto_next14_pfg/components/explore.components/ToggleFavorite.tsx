"use client";

import { Toggle } from "@/components/ui/toggle";
import { StarIcon } from "@heroicons/react/16/solid";
import { useSession } from "next-auth/react";

export function ToggleFavorite({ id }: { id: number }) {
  const { data: session, update } = useSession();
  console.log(session);
  

  function handleFavorite() {
      if (session?.user.favorite.includes(id)) {
       console.log("quita");
        session?.user.favorite.splice(session?.user.favorite.indexOf(id), 1);
      } else {
        console.log("añade");
        session?.user.favorite.push(id);
      }
      console.log("update");
      
  }

  return (
    <Toggle
      key={id}
      aria-label="Toggle"
      defaultPressed={session?.user.favorite.includes(id)}
      onPressedChange={() => {
        handleFavorite();
        console.log(session?.user.favorite);
      }}
    >
       {session?.user.favorite.includes(id) ? "Quitar de favoritos" : "Añadir a favoritos"} 
      <StarIcon className="w-6 h-6" />
    </Toggle>
  );
}
