import Navbar from "@/src/components/ui/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-10 w-full">
    <Navbar />
      <h1 className="text-xl font-semibold uppercase">Configuration</h1>
      PRIMARY
      <div className="size-20 bg-primary"></div>
      SECONDARY
      <div className="size-20 bg-secondary"></div>
    </main>
  );
}
