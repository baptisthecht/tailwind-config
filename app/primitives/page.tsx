"use client"
import SideSheet from "@/components/ui/side_sheet";
import { useAppContext } from "@/contexts/AppContext";
import Navbar from "@/src/components/ui/Navbar";

export default function Home() {

  const { isOpen, setIsOpen, actualColor, setActualColor } = useAppContext();

  return (
    <main className="flex flex-col items-center p-10 w-full">
    <Navbar />
      <h1 className="text-t-md font-semibold uppercase mb-8 mt-4">Brand</h1>
      <SideSheet />
      <section className="p-4 grid grid-cols-11 gap-4 [&>*]:size-32 [&>*]:cursor-pointer [&>*]:shadow [&>*]:rounded-lg [&>*]:flex [&>*]:items-end [&>*]:justify-center [&>*]:p-4 [&>*]:text-white [&>*]:font-bold">
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-webgerest",
          name: "WEBGEREST",
          type: 'brand'
        })}} className="bg-webgerest hover:shadow-lg">WEBGEREST</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-webresto",
          name: "WEBRESTO",
          type: 'brand'
        })}} className="bg-webresto hover:shadow-lg">WEBRESTO</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-webstock",
          name: "WEBSTOCK",
          type: 'brand'
        })}} className="bg-webstock hover:shadow-lg">WEBSTOCK</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-ihoraire",
          name: "IHORAIRE",
          type: 'brand'
        })}} className="bg-ihoraire hover:shadow-lg">IHORAIRE</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-ifact",
          name: "IFACT",
          type: 'brand'
        })}} className="bg-ifact hover:shadow-lg">IFACT</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-webemop",
          name: "WEBEMOP",
          type: 'brand'
        })}} className="bg-webemop hover:shadow-lg">WEBEMOP</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-winmc",
          name: "WINMC",
          type: 'brand'
        })}} className="bg-winmc hover:shadow-lg">WINMC</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-imapia",
          name: "IMAPIA",
          type: 'brand'
        })}} className="bg-imapia hover:shadow-lg">IMAPIA</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-webta",
          name: "WEBTA",
          type: 'brand'
        })}} className="bg-webta hover:shadow-lg">WEBTA</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
        className: "bg-webcz",
          name: "WEBCZ",
          type: 'brand'
        })}} className="bg-webcz hover:shadow-lg">WEBCZ</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-ialert",
          name: "IALERT",
          type: 'brand'
        })}} className="bg-ialert hover:shadow-lg">IALERT</div>
      </section>
      <h1 className="text-t-md font-semibold uppercase mb-8 mt-4">Grays</h1>
      <section className="p-4 grid grid-cols-15 gap-4 [&>*]:shadow [&>*]:size-32 [&>*]:cursor-pointer [&>*]:w-[5.6rem] [&>*]:rounded-lg [&>*]:flex [&>*]:text-center [&>*]:items-end [&>*]:justify-center [&>*]:p-4 [&>*]:text-black [&>*]:font-bold">
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-gray-50",
          name: "GRIS 50",
          type: 'gray'
        })}} className="bg-gray-0 hover:shadow-lg">0</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-gray-100",
          name: "GRIS 100",
          type: 'gray'
        })}} className="bg-gray-50 hover:shadow-lg">50</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-gray-150",
          name: "GRIS 150",
          type: 'gray'
        })}} className="bg-gray-100 hover:shadow-lg">100</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-gray-200",
          name: "GRIS 200",
          type: 'gray'
        })}} className="bg-gray-150 hover:shadow-lg">150</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-gray-250",
          name: "GRIS 250",
          type: 'gray'
        })}} className="bg-gray-200 hover:shadow-lg">200</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-gray-300",
          name: "GRIS 300",
          type: 'gray'
        })}} className="bg-gray-250 hover:shadow-lg">250</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-gray-450",
          name: "GRIS 450",
          type: 'gray'
        })}} className="bg-gray-300 hover:shadow-lg">300</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-gray-550",
          name: "GRIS 550",
          type: 'gray'
        })}} className="bg-gray-450 hover:shadow-lg">450</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-gray-600",
          name: "GRIS 600",
          type: 'gray'
        })}} className="bg-gray-550 hover:shadow-lg">550</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-gray-650",
          name: "GRIS 650",
          type: 'gray'
        })}} className="bg-gray-600 hover:shadow-lg">600</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-gray-700",
          name: "GRIS 700",
          type: 'gray'
        })}} className="bg-gray-650 hover:shadow-lg">650</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-gray-800",
          name: "GRIS 800",
          type: 'gray'
        })}} className="bg-gray-700 hover:shadow-lg">700</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-gray-900",
          name: "GRIS 900",
          type: 'gray'
        })}} className="bg-gray-800 hover:shadow-lg">800</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-gray-1000",
          name: "GRIS 1000",
          type: 'gray'
        })}} className="bg-gray-900 hover:shadow-lg">900</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-gray-1000",
          name: "GRIS 1000",
          type: 'gray'
        })}} className="bg-gray-1000 hover:shadow-lg">1000</div>
      </section>
      <h1 className="text-t-md font-semibold uppercase mb-8 mt-4">Stats</h1>
      <section className="p-4 grid grid-cols-6 gap-4 [&>*]:shadow [&>*]:size-32 [&>*]:cursor-pointer [&>*]:w-[15.5rem] [&>*]:rounded-lg [&>*]:flex [&>*]:text-center [&>*]:items-end [&>*]:justify-center [&>*]:p-4 [&>*]:text-white [&>*]:font-bold">
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-stats-1",
          name: "STATS 1",
          type: 'stats'
        })}} className="bg-stats-1 hover:shadow-lg">STATS 1</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-stats-2",
          name: "STATS 2",
          type: 'stats'
        })}} className="bg-stats-2 hover:shadow-lg">STATS 2</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-stats-3",
          name: "STATS 3",
          type: 'stats'
        })}} className="bg-stats-3 hover:shadow-lg">STATS 3</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-stats-4",
          name: "STATS 4",
          type: 'stats'
        })}} className="bg-stats-4 hover:shadow-lg">STATS 4</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-stats-5",
          name: "STATS 5",
          type: 'stats'
        })}} className="bg-stats-5 hover:shadow-lg">STATS 5</div>
        <div onClick={() => { setIsOpen(true); setActualColor({
          className: "bg-stats-6",
          name: "STATS 6",
          type: 'stats'
        })}} className="bg-stats-6 hover:shadow-lg">STATS 6</div>
      </section>
    </main>
  );
}
