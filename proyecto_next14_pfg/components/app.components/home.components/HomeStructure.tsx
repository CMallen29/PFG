import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import RelevantPokemon from "./RelevantPokemon";
import Welcome from "./Welcome";
import CarouselPokemon from "./CarouselPokemon";

async function HomeStructure() {
  const session = await getServerSession(authOptions);

  return (
    <div className="grid grid-cols-1 text-white">
      <div className="flex flex-cols justify-center items-center w-full">
        <div className="flex gap-4 items-center text-2xl p-12 bg-greenUnify-900/90 w-4/5 mt-10 rounded-xl">
          {session?.user ? (
            <h2 className="bg-greenUnify-500 p-6 rounded-xl mr-6">
              Bienvenido de nuevo {session.user.email}
            </h2>
          ) : (
            <h2>Bienvenido a Unify</h2>
          )}
          <Welcome />
        </div>
      </div>
      <section>
        <RelevantPokemon />
      </section>
      <section>
        <CarouselPokemon />
      </section>
    </div>
  );
}

export default HomeStructure;
