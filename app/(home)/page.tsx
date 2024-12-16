
import { currentUser } from "@clerk/nextjs/server";
import Left from "./left/Left";
import Middle from "./middle/Middle";
import Right from "./right/Right";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function Home() {
        const user = await currentUser();
        // prompt to sign-up
        if (!user) return (
            <main className="min-h-screen flex-col items-center justify-between ">
                <div className="flex mt-1 max-w-full mx-auto">
                    <div className=" w-2/12 h-full">
                    </div>
                    <div className=" w-7/12 h-full ">
                        <Middle searchQuery="" />
                    </div>
                    <div className=" w-3/12 h-full ">
                        <Right />
                    </div>
                </div>
            </main>
        );

        const userInfo = await fetchUser(user.id);
        // console.log(userInfo, "user info 28");
        if (!userInfo?.onboarded) redirect("/onboarding");
    return (
        <main className="min-h-screen flex-col items-center justify-between ">
            <div className="flex mt-1 max-w-full mx-auto">
                <div className=" w-2/12 h-full sticky top-0 top-[51px]">
                    <Left userId={userInfo._id} />
                </div>
                <div className=" w-7/12 h-full ">
                    <Middle searchQuery=""/>
                </div>
                <div className=" w-3/12 h-full top-0 top-[51px]">
                    <Right />
                </div>
            </div>
        </main>
    );
}
