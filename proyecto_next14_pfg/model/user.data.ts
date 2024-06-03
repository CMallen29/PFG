import { getServerSession } from "next-auth";
import { db } from "./database";
import { authOptions } from "@/lib/auth";

async function getUserById() {
  //Recogemos el uuid de la sesion
  const session = await getServerSession(authOptions);

  //Obtenemos los datos del usuario segun su uuid
  const uuid = session?.user.uuid;

  try {
    const user = await db.users.findUnique({
      where: {
        id: uuid,
      },
    });

    if (!user) {
      throw new Error("User not found.");
    }

    return user;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

async function deleteUsers() {
  try {
    const deleteData = await db.delete_users.findMany();

    if (!deleteData) {
      throw new Error("Data not found.");
    }

    return deleteData;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}


async function changeUsers() {
  try {
    const changeData = await db.change_users.findMany();

    if (!changeData) {
      throw new Error("Data not found.");
    }

    return changeData;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export { getUserById, deleteUsers, changeUsers };
