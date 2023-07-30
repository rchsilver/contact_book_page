import { z } from "zod";

const registerShcema = z.object({
  fullName: z.string(),
  email: z.string().email("Formato de e-mail inválido!"),
  phone: z.string(),
  password: z.string().nonempty("Senha é obrigatória"),
});

export { registerShcema };
