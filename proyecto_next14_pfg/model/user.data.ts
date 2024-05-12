import { getServerSession } from "next-auth";
import { db } from "./database";
import { authOptions } from "@/lib/auth";

async function getUserById() {
  //Recogemos el uuid de la sesion
  const session = await getServerSession(authOptions);

  //Obtenemos los datos del usuario segun su uuid
  const uuid = session?.user.username;

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

export { getUserById };
