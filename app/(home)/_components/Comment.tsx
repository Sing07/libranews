import Image from "next/image";
import React from "react";

export default function Comment() {
    return (
        <div className="flex bg-gray-200 my-1 p-1 rounded-sm">
            <div className="flex overflow-hidden rounded-full object-cover shadow-md shadow-gray-900 ">
                <Image
                    src="/icon.png"
                    width={40}
                    height={40}
                    alt="logo"
                />
            </div>
            <div className="ml-3 text-sm">
                <span className="font-bold">username</span>
                <p>Sample Comment....</p>
            </div>
        </div>
    );
}
