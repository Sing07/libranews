import { currentUser } from "@clerk/nextjs/server";
import Left from "./left/Left";
import Middle from "./middle/Middle";
import Right from "./right/Right";
import { fetchUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function Home() {
    const user = await currentUser();
    // prompt to sign-up
    if (!user)
        return (
            <main className="min-h-screen flex-col items-center justify-center">
                <div className="flex mt-1 max-w-screen-2xl mx-auto justify-center max-lg:justify-center px-2">
                    <div className="w-1/5 lg:min-w-28 h-full top-[91px] max-lg:hidden">
                        <Left />
                    </div>
                    <div className="w-2/5 h-full max-lg:w-full">
                        <Middle searchQuery="" />
                    </div>
                    <div className="w-1/5 lg:min-w-28 h-full top-[91px] max-lg:hidden">
                        <Right />
                    </div>
                </div>
            </main>
        );

    const userInfo = await fetchUser(user.id);
    // console.log(userInfo, "user info 28");
    if (!userInfo?.onboarded) redirect("/onboarding");
    return (
        <main className="min-h-screen flex-col items-center justify-center">
            <div className="flex mt-1 max-w-screen-2xl mx-auto justify-center max-lg:justify-center px-2">
                <div className="w-1/5 lg:min-w-28 h-full sticky top-[91px] max-lg:hidden">
                    <Left userId={userInfo._id} />
                </div>
                <div className="w-2/5 h-full max-lg:w-full">
                    <Middle searchQuery="" />
                </div>
                <div className="w-1/5 lg:min-w-28 h-full sticky top-[91px] max-lg:hidden">
                    <Right />
                </div>
            </div>
        </main>
    );
}
