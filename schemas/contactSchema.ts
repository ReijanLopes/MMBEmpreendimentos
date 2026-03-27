// schemas/contactSchema.ts
import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Digite um nome válido"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(3, "Assunto muito curto"),
  message: z.string().min(10, "Mensagem muito curta"),
});

export type ContactSchema = z.infer<typeof contactSchema>;