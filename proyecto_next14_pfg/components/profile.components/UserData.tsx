import { getUserById } from "@/model/user.data";
import UpdateName from "./UpdateName";
import UpdateUsername from "./UpdateUserame";
import UpdateEmail from "./UpdateEmail";

const UserData = async () => {
  //function editField(field: string) {}
  const user = await getUserById();

  return (
    <div
      key={user.id}
      className="grid grid-cols-3 justify-center gap-3 w-full bg-black/30 p-10 rounded-xl text-white font-bold"
    >
      <div className="justify-between items-center px-5 py-2 bg-white/5 rounded-xl">
        <div className="flex justify-between p-2">
          <h2>Nombre de usuario:</h2>
          <span>{user.username}</span>
        </div>
        <UpdateUsername />
      </div>
      <div className="justify-between items-center px-5 py-2 bg-white/5 rounded-xl">
        <div className="flex justify-between p-2">
          <h2>Nombre:</h2>
          <p>{user.name}</p>
        </div>
        <UpdateName />
      </div>
      <div className="justify-between items-center px-5 py-2 bg-white/5 rounded-xl">
        <div className="flex justify-between p-2">
          <h2>Dirección email:</h2>
          <p>{user.email}</p>
        </div>
        <UpdateEmail />
      </div>
    </div>
  );
};

export default UserData;
