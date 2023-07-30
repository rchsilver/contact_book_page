import { z } from "zod";
import { registerShcema } from "../schemas/RegisterSchema";

export type registerData = z.infer<typeof registerShcema>;
