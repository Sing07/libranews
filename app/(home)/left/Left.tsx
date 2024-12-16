import React from "react";
import SidebarTop from "./SidebarTop";
import SidebarMiddle from "./SidebarMiddle";
import SidebarBottom from "./SidebarBottom";

export default async function Left({userId} : {userId: string}) {
    
    return (
        <div className="border border-black space-y-4">
            <SidebarTop userId = {userId} />
            <SidebarMiddle />
            <SidebarBottom />
        </div>
    );
}

