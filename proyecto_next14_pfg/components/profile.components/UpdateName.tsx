"use client";

import { Button } from "../login.components/ui/button";
import { Input } from "../login.components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/login.components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  name: z.string().min(1, "Nombre obligatorio").max(20, "Máximo 20 caracteres"),
});

const UpdateName = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //Llamamos a updateUsername para modificar el nombre de usuario
    const response = await fetch("/api/updateUser/updateName", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
      }),
    });

    if (response.ok) {
      router.refresh();
      console.log("Nombre de usuario modificado correctamente");
    } else {
      console.error("Error al actualizar el nombre de usuario");
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white font-bold">Nuevo nombre</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant={"unify"} className="w-full" type="submit">
          MODIFICAR
        </Button>
      </form>
    </Form>
  );
};

export default UpdateName;
