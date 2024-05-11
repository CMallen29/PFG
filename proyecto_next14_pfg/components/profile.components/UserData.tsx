import { User } from "next-auth";
import { Button } from "../login.components/ui/button";
import { PencilSquareIcon } from "@heroicons/react/16/solid";

const UserData = (user: User) => {
  //function editField(field: string) {}

  return (
    <div
      key={user.id}
      className="flex flex-col justify-center gap-3 w-full bg-black/30 p-10 rounded-xl text-white font-bold"
    >
      <div className="flex justify-between items-center px-5 py-2 bg-white/5 rounded-xl">
        <h2>Nombre de usuario:</h2>
        <p>{user.username}</p>
        <Button className="w-14" variant={"secondary"}>
          <PencilSquareIcon width={25} />
        </Button>
      </div>
      <div className="flex justify-between items-center px-5 py-2 bg-white/5 rounded-xl">
        <h2>Nombre:</h2>
        <p>{user.name}</p>
        <Button className="w-14" variant={"secondary"}>
          <PencilSquareIcon width={25} />
        </Button>
      </div>
      <div className="flex justify-between items-center px-5 py-2 bg-white/5 rounded-xl">
        <h2>Dirección email:</h2>
        <p>{user.email}</p>
        <Button className="w-14" variant={"secondary"}>
          <PencilSquareIcon width={25} />
        </Button>
      </div>
    </div>
  );
};

export default UserData;
