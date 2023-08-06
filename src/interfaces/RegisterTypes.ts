import { z } from "zod";
import {
  registerShcema,
  updateUserSchema,
  updateUserSchemaReq,
} from "../schemas/RegisterSchema";

export type registerData = z.infer<typeof registerShcema>;

export type updateUser = z.infer<typeof updateUserSchema>;

export type updateUserReq = z.infer<typeof updateUserSchemaReq>;
