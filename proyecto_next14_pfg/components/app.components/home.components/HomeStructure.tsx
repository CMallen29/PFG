import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

async function HomeStructure() {
  const session = await getServerSession(authOptions);

  return (
    <div className="grid grid-cols-1 items-center text-white">
      <div className="flex flex-col justify-center items-center text-2xl ">
        {session?.user ? (
          <h2>
            Inicio de sesion correcto, bienvenido {session?.user.username}
          </h2>
        ) : (
          <h2>Bienvenido</h2>
        )}
      </div>
      <div>
        Pokemon destacado
      </div>
      <div>
        Carrusel
      </div>
      <div>
        Info página
      </div>
    </div>
  );
}

export default HomeStructure;
