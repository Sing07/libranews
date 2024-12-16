import { CircleUserRound } from "lucide-react";
import React from "react";

export default function ProfileInfo() {
    return (
        <div className="flex-shrink-0 bg-slate-300 w-72 sm:block hidden px-4 pt-2">
            <div className="political-spectrum">
                <h1 className="text-xl font-bold">Intro</h1>
                <h2>Stance:</h2>
                <h2>Supports:</h2>

                <h2>Bias:</h2>
            </div>

            <h1 className="text-xl font-bold mt-8">Favorites</h1>
            <div className="favs flex gap-2 mt-1">
                <CircleUserRound />
                <CircleUserRound />
                <CircleUserRound />
                <CircleUserRound />
                <CircleUserRound />
            </div>
        </div>
    );
}