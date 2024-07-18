"use client"
import Navbar from "@/src/components/ui/Navbar";

export default function Home() {
    return (
    <main className="flex flex-col items-center p-10 w-full gap-2 ">
            <Navbar />
            <div className="[&>*]:font-medium space-y-6 border-l-4 border-l-black pl-6 py-1">
                <h1 className="text-t-4xl">Title 4XL (text-t-4xl)</h1>
                <h2 className="text-t-3xl">Title 3XL (text-t-3xl)</h2>
                <h3 className="text-t-2xl">Title 2XL (text-t-2xl)</h3>
                <h4 className="text-t-xl">Title XL (text-t-xl)</h4>
                <h5 className="text-t-md">Title MD (text-t-md)</h5>
                <h6 className="text-t-base">Title BASE (text-t-base)</h6>
                <p className="text-b-lg">Body LG (text-b-lg)</p>
                <p className="text-b-md">Body MD (text-b-md)</p>
                <p className="text-b-base">Body BASE (text-b-base)</p>
                <p className="text-b-caption">Body CAPTION (text-b-caption)</p>
            </div>
        </main>
    );
}