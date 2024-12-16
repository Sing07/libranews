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
import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";

const Top = () => {
    return (
        <>
            <div className="flex items-center justify-between content-start bg-cyan-400 py-2 sticky top-0">
                <Link href="/"> 
                <h1 className="ml-2 font-bold flex items-center gap-1">
                    Libra News
                    <Image
                        src={logo}
                        alt="user_logo"
                        width={30}
                        height={30}
                        className="rounded-full object-cover"
                        />
                </h1>
                        </Link>
                <input
                    className=" rounded-md mr-20"
                    size={30}
                    type="text"
                    placeholder=" search"
                />

                <span className="px-5">
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
