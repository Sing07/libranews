import { ReactNode } from "react";
import Top from "./_components/TopBar";

export default function MarketingLayout({ children }: { children: ReactNode }) {
    return (
        <div className="selection:bg-[hsl(300,65%,52%,20%]">
            <Top />
            {children}
            <p>wefasbswef</p>
        </div>
    );
}
