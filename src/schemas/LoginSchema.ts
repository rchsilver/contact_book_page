import { z } from "zod";

const loginShcema = z.object({
  email: z.string().email("Formato de e-mail inválido!"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export { loginShcema };
