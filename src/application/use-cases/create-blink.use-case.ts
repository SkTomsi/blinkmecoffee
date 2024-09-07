"use server";

import type { CreateBlinkInput } from "~/entities/models/blink";
import { db } from "~/server/db";

export async function CreateBlinkUseCase(
  input: CreateBlinkInput,
  userId: string,
) {
  const newBlink = await db.blink.create({
    data: {
      name: input.name,
      shortIntro: input.shortIntro,
      description: input.description,
      userid: userId,
    },
  });

  return newBlink;
}
