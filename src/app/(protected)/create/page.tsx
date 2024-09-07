import CreateBlinkForm from "./_components/CreateBlinkForm";

export default function CreateBlink() {
  return (
    <main className="mx-auto h-full max-w-[800px]">
      <h1 className="mt-[50px] text-3xl font-bold tracking-tighter">
        Create My Blink
      </h1>
      <CreateBlinkForm />
    </main>
  );
}
