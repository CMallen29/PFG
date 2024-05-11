import { authOptions } from "../lib/auth";
import { getServerSession } from "next-auth";

const Home = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return (
      <div className="flex flex-col justify-center items-center text-2xl ">
        <h2>Inicio de sesion correcto, bienvenido {session?.user.username} </h2>
      </div>
    );
  }

  return <h1>Hola, estas en la Home</h1>;
};

export default Home;
