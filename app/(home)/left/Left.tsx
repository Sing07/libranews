import React from "react";
import SidebarTop from "./SidebarTop";
import SidebarMiddle from "./SidebarMiddle";
import SidebarBottom from "./SidebarBottom";

const Left = () => {
    return (
        <div className="border border-black space-y-4">
            <SidebarTop />
            <SidebarMiddle />
            <SidebarBottom />
        </div>
    );
};

export default Left;
