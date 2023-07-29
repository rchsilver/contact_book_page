import { z } from "zod";
import { loginShcema } from "../schemas/LoginSchema";

export type loginData = z.infer<typeof loginShcema>;
