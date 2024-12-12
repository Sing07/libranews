import React from "react";
import { CircleUserRound, House } from "lucide-react";
import { Search } from "lucide-react";
import Link from "next/link";

const SidebarTop = () => {
    return (
        <div className="card">
            <div>
                <Link href="/profile">
                    <h1 className=" flex gap-3 ml-2 py-1 ">
                        <CircleUserRound />
                        Profile
                    </h1>
                </Link>
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
