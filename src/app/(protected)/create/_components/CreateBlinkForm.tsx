"use client";

import { useFormState } from "react-dom";
import { CreateBlink } from "~/app/actions";
import { SubmitButton } from "~/components/shared/ActionButtons";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

const initialState = {
  success: false,
  message: "",
};

export default function CreateBlinkForm() {
  const [formState, formAction] = useFormState(CreateBlink, initialState);

  console.log(formState);

  return (
    <>
      <form action={formAction}>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              name="name"
              required
              placeholder="Enter Folder Name"
              className="col-span-3"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="name" className="text-right">
              Short intro
            </Label>
            <Input
              id="short intro"
              name="short intro"
              required
              placeholder="Add your emoji"
              className="col-span-3"
            />
          </div>

          <div className="flex flex-col items-start gap-2">
            <Label htmlFor="username" className="text-right">
              Description
              <span className="text-xs text-muted-foreground"> (optional)</span>
            </Label>
            <Input
              id="description"
              name="description"
              className="col-span-3"
              placeholder="Enter Description"
            />
          </div>
        </div>
        <SubmitButton text="Create" />
      </form>
    </>
  );
}
