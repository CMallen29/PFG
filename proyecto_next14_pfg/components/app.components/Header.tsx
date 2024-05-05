import Link from "next/link";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className="w-full flex items-center justify-between p-8">
      <Link href="/">Logo</Link>
      <div className="w-1/4">
        <SearchBar placeholder={"Introduce tu búsqueda"} />
      </div>
      <div>
        <Link href="/login">Iniciar Sesion</Link>
        <Link href="/explore">Explorar</Link>
      </div>
    </div>
  );
};

export default Header;
