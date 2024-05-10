import Link from "next/link";
import SearchBar from "./SearchBar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import UserAccount from "./UserAccount";

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="w-full flex items-center justify-between p-8">
      <Link href="/">Logo (HOME)</Link>
      <div className="w-1/4">
        <SearchBar placeholder={"Busca el nombre de un pokemon"} />
      </div>
      <div>
        {session?.user ? (
          <UserAccount />
        ) : (
          <Link href="/login">Iniciar Sesion</Link>
        )}
        <Link href="/explore">Explorar</Link>
      </div>
    </div>
  );
};

export default Header;
