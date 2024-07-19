import Navbar from "@/src/components/ui/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-10 w-full">
      <Navbar />
      <h1 className="text-t-md font-semibold uppercase mb-8 mt-4">Configuration pour le client : {process.env.CLIENT_NAME}</h1>
      <section className="p-4 w-full flex gap-4 [&>*]:h-16 [&>*]:w-full [&>*]:shadow [&>*]:rounded-lg [&>*]:flex [&>*]:items-end [&>*]:justify-center [&>*]:p-4  [&>*]:font-bold [&>*]:text-xl">
        <div className="bg-brand text-white">COULEUR BRAND</div>
        <div className="bg-primary text-primary-foreground">COULEUR PRIMAIRE</div>
        <div className="bg-secondary text-secondary-foreground">COULEUR SECONDAIRE</div>
      </section>      
      <section className="p-4 w-full flex gap-4 [&>*]:h-16 [&>*]:w-full [&>*]:shadow [&>*]:rounded-lg [&>*]:flex [&>*]:items-end [&>*]:justify-center [&>*]:p-4  [&>*]:font-bold [&>*]:text-xl">
        <div className="bg-muted text-muted-foreground">COULEUR MUTED</div>
        <div className="bg-destructive text-destructive-foreground">COULEUR DESTRUCTIVE</div>
        <div className="bg-accent text-accent-foreground">COULEUR ACCENT</div>
      </section>
      <section className="p-4 w-full flex gap-4 [&>*]:h-16 [&>*]:w-full [&>*]:shadow [&>*]:rounded-lg [&>*]:flex [&>*]:items-end [&>*]:justify-center [&>*]:p-4  [&>*]:font-bold [&>*]:text-xl">
        <div className="bg-popover text-popover-foreground">COULEUR POPOVER</div>
        <div className="bg-card text-card-foreground">COULEUR CARD</div>
      </section>
    </main>
  );
}
