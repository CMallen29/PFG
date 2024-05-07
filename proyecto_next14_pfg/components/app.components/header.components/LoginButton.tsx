import { UserCircleIcon, UserIcon } from "@heroicons/react/16/solid";
import { Button } from "../../login.components/ui/button";
import Link from "next/link";

const GuestAccount = () => {
  return (
    <>
      <Button variant={"unify"}>
        <UserCircleIcon width={"25"} />
        <Link className="p-2 " href="/login">
          Iniciar Sesión
        </Link>
      </Button>
    </>
  );
};

export default GuestAccount;
