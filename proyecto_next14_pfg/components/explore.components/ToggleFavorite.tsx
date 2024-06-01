"use client";

import { useRouter } from "next/navigation";
import { Toggle } from "@/components/ui/toggle";
import { StarIcon } from "@heroicons/react/16/solid";
import { useSession } from "next-auth/react";

export function ToggleFavorite({ id }: { id: number }) {
  const router = useRouter();
  const { data: session, update } = useSession();

  async function handleFavorite() {
    const response = await fetch("/api/updateFavorite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pokemonID: id,
      }),
    });

    console.log("antes", session?.user.favorite);
    update({ favorite: session?.user.favorite });
    console.log("despues", session?.user.favorite);

    if (response.ok) {
      router.refresh();
      console.log("Pokemon actualizado correctamente");
    } else {
      console.error("Error al actualizar pokemon");
    }
  }

  return (
    <Toggle
      key={id}
      aria-label="Toggle"
      defaultPressed={session?.user.favorite.includes(id)}
      onPressedChange={() => {
        handleFavorite();
        console.log("3", session?.user.favorite);
      }}
    >
      {session?.user.favorite.includes(id)
        ? "Quitar de favoritos"
        : "Añadir a favoritos"}
      <StarIcon className="w-6 h-6" />
    </Toggle>
  );
}
