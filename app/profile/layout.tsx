import { ReactNode } from "react";
import React from "react";
import Top from "../(home)/_components/TopBar";

export default function ProfileLayout({ children }: { children: ReactNode }) {
    return (
        <div className="selection:bg-[hsl(300,65%,52%,20%]">
            <Top />
            {children}
        </div>
    );
}
