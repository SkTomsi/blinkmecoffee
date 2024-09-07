"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { CreateBlinkController } from "~/interface-controllers/blink/create-blink.controller";

export async function CreateBlink(prevstate: unknown, formData: FormData) {
  const { userId } = auth();

  const data = Object.fromEntries(formData.entries());

  if (!userId) {
    console.log("UNAUTHORIZED");
    redirect("/");
  }

  try {
    await CreateBlinkController(data, userId);
    revalidatePath("/");
    return { success: true, message: "Blink created successfully" };
  } catch (error) {
    return {
      success: false,
      message:
        "An error happened while creating a todo. The developers have been notified. Please try again later.",
    };
  }
}
