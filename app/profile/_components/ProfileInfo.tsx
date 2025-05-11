import { CircleUserRound } from "lucide-react";
import React from "react";

export default function ProfileInfo() {
    return (
        <div >
            <div className="political-spectrum">
                <h1 className="text-xl font-bold">About me</h1>
                <h2>(Optional Bios)</h2>
                <h2>Stance:</h2>
                <h2>Political ideology:</h2>
                <h2>News Bias:</h2>
            </div>

            <h1 className="text-xl font-bold mt-8">Follows</h1>
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
