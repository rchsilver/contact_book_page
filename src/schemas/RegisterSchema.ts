import { z } from "zod";

const registerShcema = z.object({
  fullName: z.string(),
  email: z.string().email("Formato de e-mail inválido!"),
  phone: z.string(),
  password: z.string().nonempty("Senha é obrigatória"),
});

const updateUserSchema = z.object({
  id: z.number(),
  fullName: z.string(),
  email: z.string().email("Formato de e-mail inválido!"),
  phone: z.string(),
  registrationDate: z.string().or(z.date()).optional(),
});

const updateUserSchemaReq = updateUserSchema.omit({
  id: true,
  registrationDate: true,
});

export { registerShcema, updateUserSchema, updateUserSchemaReq };
