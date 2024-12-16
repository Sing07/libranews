"use client";

import { addCommentToPost, endorsePost, likePost, sharePost } from "@/lib/actions/post.actions";
import { Handshake, ThumbsUp } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { Forward } from "lucide-react";
import { useState } from "react";

export default function MetricV2({
    postId,
    userId,
    initialLikesCount,
}: {
    postId: string;
    userId: string;
    initialLikesCount: number;
}) {
    const [likesCount, setLikesCount] = useState(initialLikesCount); // Initial like count
    const [isLiked, setIsLiked] = useState(false); // Initial like status from props

    async function handleLike() {
        const { likeCount, isLiked } = await likePost(postId, userId);

        setLikesCount(likeCount);
    }

    async function handleComment() {
        await addCommentToPost(postId, userId, "coment");

    }
    async function handleEndorse() {
        await endorsePost(postId, userId);
    }
    async function handleShare() {
        await sharePost(postId, userId);
    }

    return (
        <div className="flex flex-wrap border mt-2 interactiveSection text-xs p-1">
            <div>
                <div className="flex items-center gap-2">
                    <p className=" w-16">Accuracy</p>
                    <span className="flex w-20 h-1 bg-gray-400"></span>
                </div>
                <div className="flex items-center gap-2">
                    <p className=" w-16">Objectivity</p>
                    <span className="flex w-20 h-1 bg-gray-400"></span>
                </div>
            </div>
            <div className=" ml-6 mr-8">
                <div className="flex items-center gap-2">
                    <p className=" w-16">Timeliness</p>
                    <span className="flex w-20 h-1 bg-gray-400"></span>
                </div>
                <div className="flex items-center gap-2">
                    <p className=" w-16">Relevance</p>
                    <span className="flex w-20 h-1 bg-gray-400"></span>
                </div>
            </div>

            <div className="flex items-center gap-3 justify-center pl-4">
                <button onClick={handleLike}>
                    Like
                    <ThumbsUp color={isLiked ? "#3e9392" : "#000000"} />
                    {likesCount}
                </button>
                <button onClick={handleComment}>
                    Comment
                    <MessageSquare />
                </button>
                <button onClick={handleEndorse}>
                    Endorse
                    <Handshake />
                </button>

                <button onClick={handleShare}>
                    Share
                    <Forward />
                </button>
            </div>
        </div>
    );
}
