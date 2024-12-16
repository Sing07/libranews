import { ReactNode } from "react";
import Top from "./_components/TopBar";

export default function HomeLayout({ children, modal }: { children: ReactNode; modal: ReactNode }) {
    return (
        <div className="selection:bg-[hsl(300,65%,52%,20%]">
            <Top />
            {modal}
            {children}
        </div>
    );
}
