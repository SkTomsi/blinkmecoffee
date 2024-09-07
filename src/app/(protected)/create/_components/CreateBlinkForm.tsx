"use client";

import Image from "next/image";
import { useState } from "react";
import { useFormState } from "react-dom";
import { CreateBlink } from "~/app/actions";
import { SubmitButton } from "~/components/shared/ActionButtons";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { UploadDropzone } from "~/lib/uploadthing";

const initialState = {
  success: false,
  message: "",
};

export default function CreateBlinkForm() {
  const [formState, formAction] = useFormState(CreateBlink, initialState);
  const [coverImageUrl, setCoverImageUrl] = useState<string | null | undefined>(
    "",
  );

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
              name="shortIntro"
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
          <input
            type="hidden"
            name="coverImageUrl"
            value={coverImageUrl ?? undefined}
          />
        </div>
        {coverImageUrl ? (
          <Image
            src={coverImageUrl}
            alt="uploaded image"
            width={1200}
            height={400}
            className="h-80 w-full rounded-lg object-contain"
          />
        ) : (
          <UploadDropzone
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
              setCoverImageUrl(res[0]?.url);
            }}
            onUploadProgress={(progress) => {
              console.log("progress", progress);
            }}
            onUploadError={(error: Error) => {
              console.log("error", error);
            }}
          />
        )}
        <SubmitButton text="Create" />
      </form>
    </>
  );
}
