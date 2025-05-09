import React from "react";
import { CircleUserRound, House } from "lucide-react";
import { Search } from "lucide-react";
import Link from "next/link";
import SearchInput from "../_components/SearchInput";

export default function SidebarTop({ userId }: { userId: string }) {
    // console.log(userId, "line 7"); // returns new ObjectId(, idk why it works
    return (
        <div className="card">
            <div>
                <Link href={`/profile/${userId}`}>
                    <h1 className=" flex gap-3 ml-2 py-1 px-2">
                        <CircleUserRound />
                        Profile
                    </h1>
                </Link>
                <Link href="/">
                    <h1 className=" flex gap-3 ml-2 py-1 px-2">
                        <House />
                        Home
                    </h1>
                </Link>
                <div className="gap-3 ml-2 py-1 px-2">
                    <SearchInput />
                </div>
            </div>
        </div>
    );
}
