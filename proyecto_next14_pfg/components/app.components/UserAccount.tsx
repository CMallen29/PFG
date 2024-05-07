"use client";

import { signOut } from "next-auth/react";
import { Button } from "../login.components/ui/button";
import Link from "next/link";

const UserAccount = () => {
  return (
    <>
      <Link href={"/profile"}>Mi perfil</Link>
      <Button onClick={()=>{signOut({
        redirect: true,
        callbackUrl: `${window.location.origin}/`
      })}} variant={"destructive"}>Cerrar Sesión</Button>

    </>
  )
};

export default UserAccount;
