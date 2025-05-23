import React from "react";
import ProfileFeed from "../_components/ProfileFeed";
import ProfileInfo from "../_components/ProfileInfo";
import ProfileStats from "../_components/ProfileStats";
import Image from "next/image";
import { CircleUserRound } from "lucide-react";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";

type paramsType = Promise<{ id: string }>;

export default async function ProfilePage({ params }: { params: paramsType }) {
    const clerkUser = await currentUser();

    if (!clerkUser) return null;

    const userInfo = await fetchUser(clerkUser.id);

    return (
        <>
            <div className="w-full bg-slate-400">
                <div className="flex w-[full] overflow-hidden justify-center ">
                    <div className="picture-bio flex flex-col px-6">
                        <div>
                            <Image
                                src="/obama.jpeg"
                                alt="Cover"
                                layout="fixed"
                                width={700}
                                height={100}
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
                                <h1 className="text-2xl font-bold">{userInfo.name}</h1>
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
            </div>
            <div className="flex justify-center ">
                <div className="flex-shrink-0 bg-slate-300 w-72 sm:block hidden px-4 pt-2">
                    <ProfileInfo />
                </div>
                <div className="bg-slate-300 w-2/5 max-lg:w-full max-w-3xl">
                    <ProfileFeed />
                </div>
                <div className=" bg-slate-300 w-72 sm:block ">
                    <ProfileStats />
                </div>
            </div>
        </>
    );
}
