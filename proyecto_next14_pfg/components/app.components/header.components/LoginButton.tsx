import { UserCircleIcon, UserIcon } from "@heroicons/react/16/solid";
import { Button } from "../../login.components/ui/button";
import Link from "next/link";

const GuestAccount = () => {
  return (
    <>
      <Link className="p-2 " href="/login">
        <Button variant={"unify"}>
          <UserCircleIcon width={"25"} />
          Iniciar Sesión
        </Button>
      </Link>
    </>
  );
};

export default GuestAccount;
