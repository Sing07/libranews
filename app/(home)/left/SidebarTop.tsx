import React from "react";
import { CircleUserRound, House } from "lucide-react";
import { Search } from "lucide-react";
import Link from "next/link";

export default function SidebarTop({userId} : {userId: string}) {
    // console.log(userId, "line 7"); // returns new ObjectId(, idk why it works
    return (
        <div className="card stickty top-0">
            <div>
                <Link href={`/profile/${userId}`}>
                    <h1 className=" flex gap-3 ml-2 py-1 ">
                        <CircleUserRound />
                        Profile
                    </h1>
                </Link>
                <Link href="/">
                <h1 className=" flex gap-3 ml-2 py-1 ">
                    <House />
                    Home
                </h1>
                </Link>
                <h1 className=" flex gap-3 ml-2 py-1">
                    <Search />
                    Search
                </h1>
            </div>
        </div>
    );
}
