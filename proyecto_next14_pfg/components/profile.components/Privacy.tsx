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
import { User } from "next-auth";

const formSchema = z.object({
  username: z
    .string()
    .min(1, "Usuario obligatorio")
    .max(20, "Máximo 20 caracteres"),
  name: z.string().min(1, "Nombre obligatorio"),
  email: z.string().min(1, "Email obligatorio").email("Email incorrecto"),
});

const Privacy = async (user: User) => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      name: "",
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // console.log(values);
    const response = await fetch("/api/updateUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        name: values.name,
        email: values.email,
      }),
    });

    if (response.ok) {
      router.push("/profile");
      console.log("Usuario modificado");
    } else {
      console.error("Error al actualizar el usuario");
    }
  };

  return (
    
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre de usuario</FormLabel>
              <FormControl>
                <Input placeholder={user.username} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder={user.name+""} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder={user.email+""} {...field} />
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

export default Privacy;
