import { z } from "zod";

const contactShcema = z.object({
  id: z.number(),
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string(),
  registrationDate: z.date(),
});

const contactRequestSchema = contactShcema.omit({
  id: true,
  registrationDate: true,
});

const contactsSchema = contactShcema.array();

export { contactShcema, contactsSchema, contactRequestSchema };
