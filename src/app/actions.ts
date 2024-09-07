"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CreateBlinkController } from "~/interface-controllers/blink/create-blink.controller";

export async function CreateBlink(prevstate: unknown, formData: FormData) {
  const { userId } = auth();
  if (!userId) {
    console.log("UNAUTHORIZED");
    redirect("/");
  }

  const data = Object.fromEntries(formData.entries());

  console.log(data);

  try {
    await CreateBlinkController(data, userId);
  } catch (error) {
    return {
      success: false,
      message:
        "An error happened while creating a todo. The developers have been notified. Please try again later.",
    };
  }

  revalidatePath("/");
  return { success: true, message: "Blink created successfully" };
}
