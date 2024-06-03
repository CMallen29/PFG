import { getUserById, deleteUsers, changeUsers } from "@/model/user.data";
import Table from "./Table";

async function AdminInfo() {
  const user = await getUserById();

  if (user.admin) {
    const deleteData = await deleteUsers();
    const changeData = await changeUsers();

    return (
      <div className=" bg-greenUnify-600 min-w-fit w-full min-h-fit h-full rounded-xl text-white">
        <h2 className="text-2xl font-bold  mx-2 p-2">
          Panel de administración
        </h2>
        <div className="items-center bg-greenUnify-800 p-4">
          <h3 className="text-xl font-bold  mx-2 p-2">Delete users</h3>
          <div>
            <Table data={deleteData} />
          </div>
        </div>
        <div className="items-center bg-greenUnify-800 p-4">
          <h3 className="text-xl font-bold  mx-2 p-2">Change users</h3>
        </div>
        <div>
          <Table data={changeData} />
        </div>
      </div>
    );
  }
}

export default AdminInfo;
