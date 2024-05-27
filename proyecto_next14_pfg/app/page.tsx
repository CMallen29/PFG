import { access } from "fs";
import { authOptions } from "../lib/auth";
import { getServerSession } from "next-auth";

const Home = async () => {
  const session = await getServerSession(authOptions);
 

  if (session?.user) {
    return (
      <div className="flex flex-col justify-center items-center text-3xl font-extrabold text-white">
        <h2>UUID: {session?.user.uuid} </h2>
        <h3> {session?.user.favorite} </h3>
      </div>
    );
  }

  return <h1>Hola, estas en la Home</h1>;
};

export default Home;
