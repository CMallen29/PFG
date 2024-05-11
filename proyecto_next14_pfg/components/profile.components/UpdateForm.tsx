import { sql } from '@vercel/postgres'; 
import * as z from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


const FormSchema = z.object({
    id: z.string(),
    username:z.string().min(1, "Usuario obligatorio").max(20, "Máximo 20 caracteres"),
    name: z.string().min(1, "Nombre obligatorio"),
    email: z.string().min(1, "Email obligatorio").email("Email incorrecto"),  
  });
  

  const UpdateUser = FormSchema.omit({ id: true });
  
  export type State = {
    errors?: {
      customerId?: string[];
      amount?: string[];
      status?: string[];
    };
    message?: string | null;
  };


export async function updateUser(
    id: string,
    formData: FormData,
  ) {
    const validatedFields = UpdateUser.safeParse({
      name: formData.get('name'),
      email: formData.get('email'),
      username: formData.get('username'),
    });
   
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: 'Missing Fields. Failed to Update Invoice.',
      };
    }
   
    const { name,email,username } = validatedFields.data;
    
    try {
      await sql`
        UPDATE users
        SET name=${name}, email ${email},username= ${username}
        WHERE id = ${id}
      `;
    } catch (error) {
      return { message: 'Database Error: Failed to Update User.' };
    }
   
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
  }



export const UpdateForm = () => {
  return (
    <div>UpdateForm</div>
  )
}
