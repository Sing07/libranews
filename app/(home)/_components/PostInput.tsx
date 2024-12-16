"use client";

import PostForm from "@/components/forms/PostForm";
import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import React, { useState } from "react";

export default function PostInput({ userId }: { userId: string }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
    return (
        <>
            <div className="flex flex-col card">
                <div className="flex items-center gap-2">
                    <CircleUserRound size={28} />
                    <input
                        onClick={openModal}
                        className="rounded-full p-1 w-full focus:outline-none "
                        placeholder="What's on your mind?"
                    />
                </div>
                <div className="br-after-pp text-center py-3 px-4">
                    <hr className="border-t border-neutral-900" />
                </div>
                {/* <div className="flex justify-around text-sm pb-3">
                    <p>Live video</p>
                    <p>Photo</p>
                    <p>Live event</p>
                </div> */}
                <Button className="bg-slate-500" onClick={openModal}>
                    Create Post
                </Button>
                <PostForm user={userId} isOpen={modalIsOpen} onClose={closeModal} />
            </div>
        </>
    );
}
