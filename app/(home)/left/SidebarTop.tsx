import React from "react";
import { House } from "lucide-react";
import { Search } from "lucide-react";

const SidebarTop = () => {
    return (
        <div className="card">
            <div>
                <h1 className=" flex gap-3 ml-2 py-1 ">
                    <House />
                    Home
                </h1>
                <h1 className=" flex gap-3 ml-2 py-1">
                    <Search />
                    Search
                </h1>
            </div>
        </div>
    );
};

export default SidebarTop;
