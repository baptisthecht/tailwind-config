"use client";
import { useAppContext } from "@/contexts/AppContext";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "./sheet";

export default function SideSheet() {
  const { isOpen, setIsOpen, actualColor } = useAppContext();
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Apercu de la couleur {actualColor?.name}</SheetTitle>
          <SheetDescription className="flex flex-col gap-4">
            <div>
                <p> <b>name :</b> {actualColor?.name}</p>
              <p> <b>type :</b> {actualColor?.type}</p>
            </div>
            <div className="hidden border-webgerest border-webresto border-webstock border-ihoraire border-ifact border-webemop border-winmc border-imapia border-webta border-webcz border-ialert border-gray-50 border-gray-100 border-gray-150 border-gray-200 border-gray-250 border-gray-300 border-gray-450 border-gray-550 border-gray-600 border-gray-650 border-gray-700 border-gray-800 border-gray-900 border-gray-1000 border-stats-1 border-stats-2 border-stats-3 border-stats-4 border-stats-5 border-stats-6 text-webgerest text-webresto text-webstock text-ihoraire text-ifact text-webemop text-winmc text-imapia text-webta text-webcz text-ialert text-gray-50 text-gray-100 text-gray-150 text-gray-200 text-gray-250 text-gray-300 text-gray-450 text-gray-550 text-gray-600 text-gray-650 text-gray-700 text-gray-800 text-gray-900 text-gray-1000 text-stats-1 text-stats-2 text-stats-3 text-stats-4 text-stats-5 text-stats-6 shadow-webgerest shadow-webresto shadow-webstock shadow-ihoraire shadow-ifact shadow-webemop shadow-winmc shadow-imapia shadow-webta shadow-webcz shadow-ialert shadow-gray-50 shadow-gray-100 shadow-gray-150 shadow-gray-200 shadow-gray-250 shadow-gray-300 shadow-gray-450 shadow-gray-550 shadow-gray-600 shadow-gray-650 shadow-gray-700 shadow-gray-800 shadow-gray-900 shadow-gray-1000 shadow-stats-1 shadow-stats-2 shadow-stats-3 shadow-stats-4 shadow-stats-5 shadow-stats-6"> </div>
              <p> <b>background :</b> {actualColor?.className}</p>
            <div className={`h-20 w-full rounded-lg ${actualColor?.className} flex items-center justify-center font-bold text-white text-t-xl`}>BACKGROUND</div>
            <p> <b>border : </b>border-{actualColor?.className.slice(3)}</p>
            <div className={`h-20 w-full rounded-lg border-${actualColor?.className.slice(3)} border-4 flex items-center justify-center font-bold text-${actualColor?.className.slice(3)} text-t-xl`}>BORDER</div>
              <p> <b>text : </b>text-{actualColor?.className.slice(3)}</p>
            <div className={`h-20 w-full rounded-lg flex items-center justify-center font-bold text-${actualColor?.className.slice(3)} text-t-xl`}>TEXT</div>
            <p> <b>shadow : </b>shadow-{actualColor?.className.slice(3)}</p>
            <div className={`h-20 w-full rounded-lg flex items-center justify-center font-bold shadow-md shadow-${actualColor?.className.slice(3)} text-${actualColor?.className.slice(3)} text-t-xl`}>SHADOW</div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
