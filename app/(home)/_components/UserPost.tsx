import React from "react";
import Image from "next/image";
import MetricV2 from "./utility/MetricV2";
import { formatDistanceToNowStrict } from "date-fns";
import Link from "next/link";
import { getPostWithUsernames } from "@/lib/actions/post.actions";
import Comment from "./Comment";
import DeletePost from "./DeletePost";
import { currentUser } from "@clerk/nextjs/server";

const extractCaption = (content: string) => {
    return content.slice(0, 50); // Get the first 50 characters
};

export default async function UserPost({
    _id: postId,
    title,
    author,
    content,
    caption,
    image,
    createdAt,
    updatedAt,
    likesCount,
    curentUserId,
}: {
    _id: string;
    title: string;
    author: { username: string; _id: string };
    content: string;
    caption: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    likesCount: number;
    curentUserId: string;
}) {
    const description = extractCaption(content);
    const { username } = author;

    // const endorsements = await fetchEndorsements(postId);
    // const likes = await fetchLikesz(postId);
    // const shares = await fetchShares(postId);

    const postDetails = await getPostWithUsernames(postId);

    const likesUsernames = postDetails.likes
        .slice(0, 3)
        .map((user: any) => user.name);
    const endorsementsUsernames = postDetails.endorsements
        .slice(0, 3)
        .map((user: any) => user.name);
    const sharesUsernames = postDetails.shares
        .slice(0, 3)
        .map((user: any) => user.name);

    console.log(likesUsernames, "line 50");
    console.log(endorsementsUsernames, "line 51");
    console.log(sharesUsernames, "line 52");

    // console.log(postDetails, "line 42");

    return (
        <>
            <div className="card bg-stone-300">
                <div className="flex justify-around bg-gray-100 m-2">
                    <section>
                        {likesUsernames.length > 0 && (
                            <span className="font-light text-xs">
                                {likesUsernames.join(", ")}{" "}
                            </span>
                        )}
                        {likesUsernames.length > 0 && <span>liked this post</span>}
                    </section>
                    |
                    <section>
                        {endorsementsUsernames.length > 0 && (
                            <span className="font-light text-xs">
                                {endorsementsUsernames.join(", ")}{" "}
                            </span>
                        )}
                        {endorsementsUsernames.length > 0 && (
                            <span>endorses this post</span>
                        )}
                    </section>
                    |
                    <section>
                        {sharesUsernames.length > 0 && (
                            <span className="font-light text-xs">
                                {sharesUsernames.join(", ")}{" "}
                            </span>
                        )}
                        {sharesUsernames.length > 0 && <span>shared this post</span>}
                    </section>
                </div>
                <DeletePost postId={postId} userId={curentUserId} />
                <div className="picture-bio flex items-center pb-2 pl-2">
                    <div className="flex overflow-hidden rounded-full shadow-md shadow-gray-900 ">
                        <Image
                            src="/icon.png"
                            width={50}
                            height={50}
                            alt="logo"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="ml-3 ">
                        <span className="user-name font-bold">{username}</span>
                        <span className=" block font-light text-sm">
                            {formatDistanceToNowStrict(new Date(createdAt), {
                                addSuffix: true,
                            })}
                        </span>
                    </div>
                </div>

                <span className="caption py-2 text-sm font-light pl-4">
                    {caption}
                </span>

                <Link href={`/post/${postId}`}>
                    <div className="flex border w-full py-3 bg-slate-200 rounded-md">
                        <div className="flex overflow-hidden  pl-2">
                            {image ? (
                                <Image
                                    src={image}
                                    width={400}
                                    height={400}
                                    alt="Article image"
                                    className="object-cover"
                                />
                            ) : (
                                <div
                                    style={{
                                        width: 100,
                                        height: 100,
                                        backgroundColor: "#ccc",
                                    }}
                                />
                            )}
                        </div>

                        <div className="w-full">
                            <h1 className="h-15 ml-4 mb-1 font-semibold bold text-xl tracking-tighter">
                                {title}
                            </h1>
                            <p className="font-light text-sm ml-4">{description}</p>

                            <div className="flex justify-between px-4 pt-4 text-xs ">
                                <p className="mt-3 font-light">
                                    {new Date(createdAt).toLocaleString()}
                                </p>

                                <p className="mt-3">2,493 impressions | 547 Read</p>
                            </div>
                        </div>
                    </div>
                </Link>

                <MetricV2
                    postId={postId}
                    userId={curentUserId}
                    initialLikesCount={likesCount}
                />

                <Comment />
                <Comment />
                <Comment />
            </div>
        </>
    );
}
