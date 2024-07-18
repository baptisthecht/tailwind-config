import Navbar from "@/src/components/ui/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-10 w-full">
      <Navbar />
      <h1 className="text-t-md font-semibold uppercase mb-8 mt-4">Configuration pour le client : {process.env.CLIENT_NAME}</h1>
      <section className="p-4 w-full flex gap-4 [&>*]:h-16 [&>*]:w-full [&>*]:shadow [&>*]:rounded-lg [&>*]:flex [&>*]:items-end [&>*]:justify-center [&>*]:p-4 [&>*]:text-white [&>*]:font-bold [&>*]:text-xl">
        <div className="bg-primary">COULEUR PRIMAIRE</div>
        <div className="bg-secondary">COULEUR SECONDAIRE</div>
      </section>
    </main>
  );
}
