import { CreateBlinkUseCase } from "~/use-cases/create-blink.use-case";
import { CreateBlinkSchema } from "~/entities/models/blink";

export async function CreateBlinkController(input: unknown, userId: string) {
  const { data, error } = CreateBlinkSchema.safeParse(input);

  if (error) {
    console.log(error);
    return error;
  }

  const blink = await CreateBlinkUseCase(data, userId);

  return blink;
}
