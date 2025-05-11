import { Modal } from "@/app/(home)/_components/Modal";
import UserPost from "@/app/(home)/_components/UserPost";
import MightAlsoLike from "@/app/(home)/right/MightAlsoLike";
import OtherNews from "@/app/(home)/_components/SimilarNews";
import { fetchPostById } from "@/lib/actions/post.actions";
import React from "react";

type paramsType = Promise<{ id: string }>;

export default async function PostPage({
    params,
    searchParams,
}: {
    params: { id: string };
    searchParams: { compare?: string };
}) {
    const { id } = await params;

    // const post = await fetchPostById(id);
    const mainPost = await fetchPostById(params.id);
    const comparePost = searchParams.compare
        ? await fetchPostById(searchParams.compare)
        : null;
    console.log(mainPost, "line 10");
    const cleanPost = JSON.parse(JSON.stringify(mainPost));
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
                        {/* <MightAlsoLike /> */}
                    </div>
                </div>
                <div className="compare-news lg:w-2/6">
                    <span className="bg-red-400 text-xs font-bold p-2 rounded-full m-4">
                        Can open another post/news here to compare
                    </span>
                    {/* <UserPost {...cleanPost} /> */}
                    {comparePost ? (
                        <>
                            <UserPost {...JSON.parse(JSON.stringify(comparePost))} />
                            {/* <form>
                                <button
                                    formAction="?compare="
                                    className="mt-2 ml-4 text-xs text-blue-500 hover:underline"
                                >
                                    Clear Comparison
                                </button>
                            </form> */}
                        </>
                    ) : (
                        <div className="text-sm text-gray-500 m-4">
                            Click a snippet to compare
                        </div>
                    )}
                </div>
            </div>
        </Modal>
    );
}
