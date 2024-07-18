"use client"

import { usePathname, useRouter } from "next/navigation";

export default function Navbar(){

    const pathname = usePathname();
    const router = useRouter();

    return (
        <nav className="p-1 bg-gray-150 rounded-xl mb-5 overflow-hidden">
            <div className="flex gap-1 [&>*]:cursor-pointer [&>*]:rounded-lg [&>*]:px-3 [&>*]:py-1 ">
                <div className={`${pathname === "/primitives" ? "bg-white shadow-md" : ""}`} onClick={() => router.push("/primitives")}>Primitives</div>
                <div className={`${pathname === "/texts" ? "bg-white shadow-md" : ""}`} onClick={() => router.push("/texts")}>Textes</div>
                <div className={`${pathname === "/config" && "bg-white shadow-md"}`}onClick={() => router.push("/config")}>Configuration</div>
            </div>
        </nav>
    );
}