import React from "react";
import ProfileFeed from "../_components/ProfileFeed";
import ProfileInfo from "../_components/ProfileInfo";
import ProfileStats from "../_components/ProfileStats";
import Image from "next/image";
import { CircleUserRound } from "lucide-react";

export default function page() {
    return (
        <>
            <div className="w-full bg-slate-400 ">
                <div className="flex w-[full]  overflow-hidden justify-center ">
                    <div className="picture-bio flex flex-col px-6">
                        <div>
                            <Image
                                src="/obama.jpeg"
                                alt="Cover"
                                layout="fixed"
                                width={1000}
                                height={200}
                                className="object-cover rounded-md"
                            />
                        </div>

                        <div className="flex pl-4 -mt-5 py-3">
                            <div className="">
                                <Image
                                    src="/icon.png"
                                    width={120}
                                    height={120}
                                    alt="profile picture"
                                    className="rounded-full object-cover border-4 border-sky-200"
                                />
                            </div>
                            <div className="pl-5 pt-6">
                                <h1 className="text-2xl font-bold">Profile Name</h1>
                                <p className="text-xs text-gray-600">111 friends</p>
                                <div className="favs flex mt-2 ">
                                    <CircleUserRound className="-ml-2" />
                                    <CircleUserRound className="-ml-2" />
                                    <CircleUserRound className="-ml-2" />
                                    <CircleUserRound className="-ml-2" />
                                    <CircleUserRound className="-ml-2" />
                                </div>
                            </div>
                        </div>
                        <div className="br-after-pp text-center px-4">
                            <hr className="border-t border-neutral-900" />
                        </div>
                        <div className="flex p-4 gap-6 text-s text-gray-200">
                            <p>Post</p>
                            <p>About</p>
                            <p>Friends</p>
                            <p>Photos</p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <ProfileInfo />
                    <ProfileFeed />
                    <ProfileStats />
                </div>
            </div>
        </>
    );
}
