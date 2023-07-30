import { z } from "zod";
import {
  contactRequestSchema,
  contactShcema,
  contactsSchema,
} from "../schemas/ContactSchemas";

export type TContact = z.infer<typeof contactShcema>;

export type TContactRequest = z.infer<typeof contactRequestSchema>;

export type TContacts = z.infer<typeof contactsSchema>;
