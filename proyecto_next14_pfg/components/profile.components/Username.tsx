import Image from "next/image";
import { Button } from "../login.components/ui/button";
import { PencilSquareIcon } from "@heroicons/react/16/solid";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const Username = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="grid grid-cols-3 p-10">
      <div className="flex flex-col justify-center items-center">
        <div className="block relative ">
          <Image
            src={"/profile/user.webp"} //imagen de perfil del user
            alt="Foto Perfil"
            width={300}
            height={300}
            className="h-48 mx-auto object-cover rounded-full w-48 border-4 border-white"
          />
        </div>
        <Button className="my-1 px-4 rounded-xl" variant={"secondary"}>
          <PencilSquareIcon className="mr-2" width={"25"} /> EDITAR
        </Button>
      </div>
      <div className="self-end col-span-2 py-10 ">
        <h1 className="text-3xl font-bold text-white ">
          {session?.user.username}
        </h1>
        <div className="my-1 rounded-2xl h-3 w-full bg-gradient-to-r from-yellow-500 ..." />
      </div>
    </div>
  );
};

export default Username;
