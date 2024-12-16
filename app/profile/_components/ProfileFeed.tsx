import React from "react";
import PostInput from "../../(home)/_components/PostInput";
import { currentUser } from "@clerk/nextjs/server";
import { fetchUser } from "@/lib/actions/user.actions";
import { fetchPosts } from "@/lib/actions/post.actions";
import UserPosts from "@/app/(home)/_components/UserPost";

export default async function ProfileFeed() {
    const user = await currentUser();

    if (!user) return null;

    const userInfo = await fetchUser(user.id);
    // console.log(userInfo, "line12");
    // console.log(userInfo._id, "line13");
    // console.log(userInfo._id.toString(), "line14");
    const userIdString = userInfo._id.toString();
    console.log(userIdString, "line 18");

    const articles = await fetchPosts();
    const cleanarticles = JSON.parse(JSON.stringify(articles));

    return (
        <div className="bg-slate-300 w-full max-w-5xl h-60">
            <section>Feed & Posts</section>

            <PostInput userId={userIdString} />
            {cleanarticles.length === 0 ? (
                <p>No posts found</p>
            ) : (
                cleanarticles.map((data: any) => (
                    <UserPosts
                        key={data._id}
                        {...data}
                        curentUserId={userIdString}
                    />
                ))
            )}
        </div>
    );
}