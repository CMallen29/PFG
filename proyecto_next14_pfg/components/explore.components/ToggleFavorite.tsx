

import { Toggle } from "@/components/ui/toggle";
import { authOptions } from "@/lib/auth";
import { StarIcon } from "@heroicons/react/16/solid";
import { getServerSession } from "next-auth";

export async function ToggleFavorite({ id }: { id: number }) {
  const session = await getServerSession(authOptions);
  console.log(session?.user.favorite);

  function defaultPressedUser() {
    if (session?.user.favorite) {
      return session?.user.favorite.includes(id);
    }
    return false;
  }

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
    <Toggle aria-label="Toggle italic" defaultPressed={defaultPressedUser()}>
      <StarIcon className="w-6 h-6" />
    </Toggle>
  );
}
