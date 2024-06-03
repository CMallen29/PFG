"use client";

import { Button } from "../login.components/ui/button";
import * as React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { UserMinusIcon } from "@heroicons/react/16/solid";
import { signOut } from "next-auth/react";

function DeleteUser() {
  const [isOpen, setIsOpen] = React.useState(false);

  const onSubmit = async () => {
    //Llamamos a updateUsername para modificar el nombre de usuario

    const response = await fetch("/api/deleteUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      signOut({
        callbackUrl: `${window.location.origin}/`,
      });
      console.log("Usuario eliminado correctamente");
    } else {
      console.error("Error al eliminar el usuario");
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-1/3 space-y-6 m-2">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h3 className="text-lg font-semibold">Eliminar la cuenta</h3>
          <CollapsibleTrigger asChild>
            <Button variant="unifyOut" size="sm">
              <UserMinusIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            Esto eliminará todos tus datos de manera irreversible. ¿Continuar?
          </div>
          <Button variant={"unifyOut"} className="w-full" type="submit">
            CONFIRMAR
          </Button>
        </CollapsibleContent>
      </Collapsible>
    </form>
  );
}

export default DeleteUser;
