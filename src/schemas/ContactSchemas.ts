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

const contactUpdateSchema = contactShcema
  .omit({
    id: true,
    registrationDate: true,
  })
  .partial();

const contactsSchema = contactShcema.array();

const contactUdpateShcemaOmit = z.object({
  fullName: z.string(),
  email: z.string(),
  phone: z.string(),
});

const contactSchemaRequestUpdate = contactUdpateShcemaOmit.partial();

export {
  contactShcema,
  contactsSchema,
  contactRequestSchema,
  contactUpdateSchema,
  contactSchemaRequestUpdate,
};
