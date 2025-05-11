import React from "react";
import SidebarTop from "./SidebarTop";
import SidebarMiddle from "./SidebarMiddle";
import SidebarBottom from "./SidebarBottom";

export default async function Left({userId} : {userId?: string}) {
    
    return (
        <div className="space-y-4 ml-3 ">
            <SidebarTop userId={userId} />
            <SidebarMiddle />
            <SidebarBottom />
        </div>
    );
}

