import Top from "@/app/(home)/_components/TopBar";
import UserPost from "@/app/(home)/_components/UserPost";
import { fetchPostById } from "@/lib/actions/post.actions";
import Image from "next/image";
import React from "react";

export default async function PostPage({ params }: { params: { id: string } }) {
    const { id } = await params;

    const post = await fetchPostById(id);
    const cleanPost = JSON.parse(JSON.stringify(post));

    return (
        <>
            {/* <div className="">
              <Image
                  src="/icon.png"
                  width={120}
                  height={120}
                  alt="profile picture"
                  className="rounded-full object-cover border-4 border-sky-200"
              />
          </div>
          <div className="pl-5 pt-6">
              <h1 className="text-2xl font-bold">Profile Name</h1>
              <p className="text-xs text-gray-600">111 friends</p>
            
          </div> */}
            <Top />
            PostPageww {id}
            <div className="flex justify-center">
                <div className="w-4/6 ">
                    <UserPost {...cleanPost} />
                </div>
            </div>
        </>
    );
}
