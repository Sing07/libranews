import React from "react";
import PostInput from "../../(home)/_components/PostInput";
import { currentUser } from "@clerk/nextjs/server";
import { fetchUser } from "@/lib/actions/user.actions";
import {
    fetchEndorsedPosts,
    fetchLikedPosts,
    fetchPosts,
    fetchSharedPosts,
} from "@/lib/actions/post.actions";
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

    const likedPosts = await fetchLikedPosts(userInfo._id);
    const sharedPosts = await fetchSharedPosts(userInfo._id);
    const endorsedPosts = await fetchEndorsedPosts(userInfo._id);
    // console.log(sharedPosts, "line 22");
    // console.log(endorsedPosts, "line 23");

    const articles = await fetchPosts();
    // const cleanarticles = JSON.parse(JSON.stringify(articles));

    const combinedPosts = [...articles, ...likedPosts, ...sharedPosts, ...endorsedPosts];
    const uniquePostsMap = new Map();
    for (const post of combinedPosts) {
        uniquePostsMap.set(post._id.toString(), post);
    }

    const dedupedPosts = Array.from(uniquePostsMap.values());
    const cleanarticles = JSON.parse(JSON.stringify(dedupedPosts));

    return (
        <div className="space-y-1">
            <PostInput userId={userIdString} />

            {/* {sharedPosts.length === 0 ? (
                <p>No posts found</p>
            ) : (
                sharedPosts.map((data: any) => (
                    <UserPosts
                        key={data._id}
                        {...data}
                        curentUserId={userIdString}
                    />
                ))
            )} */}

            {/* {endorsedPosts.length === 0 ? (
                <p>No posts found</p>
            ) : (
                endorsedPosts.map((data: any) => (
                    <UserPosts
                        key={data._id}
                        {...data}
                        curentUserId={userIdString}
                    />
                ))
            )}
                */}

            {cleanarticles.length === 0 ? (
                <p>No posts found</p>
            ) : (
                cleanarticles.map((data: any) => (
                    <UserPosts key={data._id} {...data} curentUserId={userIdString} />
                ))
            )}
        </div>
    );
}
