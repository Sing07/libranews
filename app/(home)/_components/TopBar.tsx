import React from "react";

import { Trophy } from "lucide-react";
import { Newspaper } from "lucide-react";
import { Cpu } from "lucide-react";
import { PartyPopper } from "lucide-react";
import { Earth } from "lucide-react";
import { Bitcoin } from "lucide-react";
import { ChartLine } from "lucide-react";
import { Flame } from "lucide-react";
import { Microscope } from "lucide-react";
import { Podcast } from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Top = () => {
    return (
        <>
            <div className="flex items-center justify-between content-start bg-cyan-400 py-2 sticky top-0">
                <span className="ml-2 font-bold">Libra News</span>
                <input
                    className=" rounded-md ml-10"
                    size={70}
                    type="text"
                    placeholder=" search"
                />

                <span className="mr-2">
                    <SignedOut>
                        <SignInButton>Login</SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </span>
            </div>
            <div className="flex items-center dynamic-topic w-full bg-cyan-100 h-10 border-2 border-slate-900">
                <Trophy />
                <Newspaper />
                <Cpu />
                <PartyPopper />
                <Earth />
                <Bitcoin />
                <ChartLine />
                <Flame />
                <Microscope />
                <Podcast />
            </div>
        </>
    );
};

export default Top;
