"use client"

import { ModeToggle } from "@/components/ui/darkmode-toggle";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar(){

    const pathname = usePathname();
    const router = useRouter();

    return (<div className="flex gap-8">
    
        <nav className="p-1 bg-secondary rounded-xl mb-5 overflow-hidden">
            <div className="flex gap-1 [&>*]:cursor-pointer [&>*]:rounded-lg [&>*]:px-3 [&>*]:py-1 ">
                <div className={`${pathname === "/primitives" ? "bg-secondary-foreground text-secondary shadow-md" : ""}`} onClick={() => router.push("/primitives")}>Primitives</div>
                <div className={`${pathname === "/texts" ? "bg-secondary-foreground text-secondary shadow-md" : ""}`} onClick={() => router.push("/texts")}>Textes</div>
                <div className={`${pathname === "/config" && "bg-secondary-foreground text-secondary shadow-md"}`}onClick={() => router.push("/config")}>Configuration</div>
            </div>
        </nav>
            <ModeToggle /></div>
    );
}