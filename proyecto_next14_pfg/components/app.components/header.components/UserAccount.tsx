"use client";

import { signOut } from "next-auth/react";
import { Button } from "../../login.components/ui/button";
import Link from "next/link";
import {
  ArrowRightStartOnRectangleIcon,
  UserIcon,
} from "@heroicons/react/16/solid";

const UserAccount = () => {
  return (
    <>
      <Link href={"/profile"}>
        <Button variant={"unify"}>
          <UserIcon width={"25"} />
          &nbsp;&nbsp; Mi perfil
        </Button>
      </Link>
      <Button
        onClick={() => {
          signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/`,
          });
        }}
        variant={"unifyOut"}
      >
        <ArrowRightStartOnRectangleIcon width={"25"} />
        &nbsp;&nbsp; Cerrar Sesión
      </Button>
    </>
  );
};

export default UserAccount;
