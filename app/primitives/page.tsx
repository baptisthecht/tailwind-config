import Navbar from "@/src/components/ui/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center p-10 w-full">
    <Navbar />
      <h1 className="text-xl font-semibold uppercase">Brand</h1>
      <section className="p-4 grid grid-cols-11 gap-4 [&>*]:size-32 [&>*]:shadow [&>*]:rounded-lg [&>*]:flex [&>*]:items-end [&>*]:justify-center [&>*]:p-4 [&>*]:text-white [&>*]:font-bold">
        <div className="bg-webgerest">WEBGEREST</div>
        <div className="bg-webresto">WEBRESTO</div>
        <div className="bg-webstock">WEBSTOCK</div>
        <div className="bg-ihoraire">IHORAIRE</div>
        <div className="bg-ifact">IFACT</div>
        <div className="bg-webemop">WEBEMOP</div>
        <div className="bg-winmc">WINMC</div>
        <div className="bg-imapia">IMAPIA</div>
        <div className="bg-webta">WEBTA</div>
        <div className="bg-webcz">WEBCZ</div>
        <div className="bg-ialert">IALERT</div>
      </section>
          <h1 className="text-xl font-semibold uppercase">Grays</h1>
      <section className="p-4 grid grid-cols-15 gap-4 [&>*]:shadow [&>*]:size-32 [&>*]:w-[5.6rem] [&>*]:rounded-lg [&>*]:flex [&>*]:text-center [&>*]:items-end [&>*]:justify-center [&>*]:p-4 [&>*]:text-black [&>*]:font-bold">
           <div className="bg-gray-0">0</div>
        <div className="bg-gray-50">50</div>
        <div className="bg-gray-100">100</div>
        <div className="bg-gray-150">150</div>
        <div className="bg-gray-200">200</div>
        <div className="bg-gray-250">250</div>
        <div className="bg-gray-300">300</div>
        <div className="bg-gray-450">450</div>
        <div className="bg-gray-550">550</div>
        <div className="bg-gray-600">600</div>
        <div className="bg-gray-650">650</div>
        <div className="bg-gray-700">700</div>
        <div className="bg-gray-800">800</div>
        <div className="bg-gray-900">900</div>
        <div className="bg-gray-1000">1000</div>
      </section>
  
           <h1 className="text-xl font-semibold uppercase">Stats</h1>
      <section className="p-4 grid grid-cols-6 gap-4 [&>*]:shadow [&>*]:size-32 [&>*]:w-[15.5rem] [&>*]:rounded-lg [&>*]:flex [&>*]:text-center [&>*]:items-end [&>*]:justify-center [&>*]:p-4 [&>*]:text-white [&>*]:font-bold">
        <div className="bg-stats-1">STATS 1</div>
        <div className="bg-stats-2">STATS 2</div>
        <div className="bg-stats-3">STATS 4</div>
        <div className="bg-stats-4">STATS 4</div>
        <div className="bg-stats-5">STATS 5</div>
        <div className="bg-stats-6">STATS 6</div>
      </section>
    </main>
  );
}
