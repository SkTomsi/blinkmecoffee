import { z } from "zod";

export const CreateBlinkSchema = z.object({
  name: z.string().min(1).max(255),
  shortIntro: z.string().max(255).optional(),
  description: z.string().max(255),
});

export type CreateBlinkInput = z.infer<typeof CreateBlinkSchema>;
