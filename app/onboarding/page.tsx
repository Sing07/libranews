import AccountProfile from "@/components/forms/AccountProfileForm";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

type UserInfo = {
    _id: string;
    username: string;
    name: string;
    bio?: string;
    image?: string;
};

export default async function Page() {
    const user = await currentUser();
    if (!user) return null;

    const userInfo = await fetchUser(user.id);
    if (userInfo?.onboarded) redirect("/");

    // const userInfo: UserInfo | undefined = getUserInfo(); // Type it properly

    // this is give error becuase it has no nullable || check
    // const userData = {
    //     id: user!.id,
    //     objectId: userInfo?._id,
    //     username: userInfo ? userInfo?.username : user.username,
    //     name: userInfo ? userInfo?.name : user.firstName ?? "",
    //     bio: userInfo ? userInfo?.bio : "",
    //     image: userInfo ? userInfo?.image : user.imageUrl,
    // };

    const userData = {
        id: user.id,
        objectId: userInfo?._id || "",
        username: userInfo?.username || user.username || "",
        name: userInfo?.name || user.firstName || "",
        bio: userInfo?.bio || "",
        image: userInfo?.image || user.imageUrl || "",
    };

    return (
        <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
            <h1 className="font-extrabold text-3xl">Onboarding</h1>
            <p className="mt-3 text-base-regular text-light-2">
                Complete your profile now, to use LibraNews
            </p>

            <section className="mt-9 bg-slate-600 p-10 rounded-sm">
                <AccountProfile user={userData} btnTitle="Continue" />
            </section>
        </main>
    );
}
