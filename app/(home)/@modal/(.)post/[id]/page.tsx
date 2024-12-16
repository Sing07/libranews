import { Modal } from "@/app/(home)/_components/Modal";
import UserPost from "@/app/(home)/_components/UserPost";
import MightAlsoLike from "@/app/(home)/right/MightAlsoLike";
import OtherNews from "@/app/(home)/right/OtherNews";
import { fetchPostById } from "@/lib/actions/post.actions";
import React from "react";

type paramsType = Promise<{ id: string }>;

export default async function PostPage({ params }: { params: paramsType }) {
    const { id } = await params;

    const post = await fetchPostById(id);
    console.log(post, "line 10");
    const cleanPost = JSON.parse(JSON.stringify(post));
    console.log(cleanPost, "line 12");

    return (
        <Modal>
            {/* PostPageww {id} */}
            <div className="flex justify-center gap-4 pt-10">
                <div className="lg:w-2/6 ">
                    <span className="bg-red-400 text-xs font-bold p-2 rounded-full m-4">
                        Looking at this current post/news
                    </span>

                    <UserPost {...cleanPost} />
                </div>
                <div className="more-news lg:w-3/12">
                    <span className="bg-red-400 text-xs font-bold p-2 rounded-full m-4">
                        Other post/news reccomendation
                    </span>

                    <div>
                        <OtherNews />
                        <MightAlsoLike />
                    </div>
                </div>
                <div className="compare-news lg:w-2/6">
                    <span className="bg-red-400 text-xs font-bold p-2 rounded-full m-4">
                        Can open another post/news here to compare
                    </span>
                    <UserPost {...cleanPost} />
                </div>
            </div>
        </Modal>
    );
}
