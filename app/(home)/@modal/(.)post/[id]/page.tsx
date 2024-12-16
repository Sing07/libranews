import { Modal } from "@/app/(home)/_components/Modal";
import UserPost from "@/app/(home)/_components/UserPost";
import MightAlsoLike from "@/app/(home)/right/MightAlsoLike";
import { fetchPostById } from "@/lib/actions/post.actions";
import Image from "next/image";
import React from "react";

export default async function PostPage({ params }: { params: { id: string } }) {
    const { id } = await params;

    const post = await fetchPostById(id);
    console.log(post, "line 10");
    const cleanPost = JSON.parse(JSON.stringify(post));
    console.log(cleanPost, "line 12");

    return (
        <Modal>
            PostPageww {id}
            <div className="flex justify-center gap-4 pt-10">
                <div className="lg:w-2/6 ">
                    Looking at this current post/news
                    <UserPost {...cleanPost} />
                </div>
                <div className="more-news">
                    Other post/news reccomendation
                    <MightAlsoLike />
                </div>
                <div className="compare-news lg:w-2/6">
                    Can open another post/news here to compare
                    <UserPost {...cleanPost} />
                </div>
            </div>
        </Modal>
    );
}
