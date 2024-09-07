import { CreateBlinkUseCase } from "~/application/use-cases/create-blink.use-case";
import { CreateBlinkSchema } from "~/entities/models/blink";

export async function CreateBlinkController(input: unknown, userId: string) {
  const { data, error } = CreateBlinkSchema.safeParse(input);

  if (error) {
    console.log(error);
    return error;
  }

  const blink = await CreateBlinkUseCase(data, userId);

  console.log(blink);
  return blink;
}
