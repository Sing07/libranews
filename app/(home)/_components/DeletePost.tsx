'use client'

import { deletePost } from "@/lib/actions/post.actions";
import { X } from "lucide-react";
import React from "react";

export default function DeletePost({postId, userId}: {postId: string; userId:string}) {

    async function handleDeletePost() {
        await deletePost(postId, userId);
    }
    return (
        <div dir="rtl">
            <div className="relative">
                <button onClick={handleDeletePost}>
                    <div className="absolute h-14 w-14 top-0 start-0 ...">
                        <X />
                    </div>
                </button>
            </div>
        </div>
    );
}
