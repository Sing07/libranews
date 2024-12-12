import Image from "next/image";
import React from "react";

export default function Profile() {
    return (
        <>
            <div className=" w-full bg-slate-200">
                <div className="flex w-full h-96 overflow-hidden justify-center ">
                    <Image
                        src="/obama.jpeg"
                        alt="Cover"
                        layout="fixed"
                        width={1020}
                        height={900}
                        className="object-cover"
                    />
                </div>

                <div className="picture-bio flex px-[6rem]">
                    <div className="flex overflow-hidden rounded-full shadow-md shadow-gray-900 ">
                        <Image
                            src="/icon.png"
                            width={50}
                            height={50}
                            alt="logo"
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <div className="ml-3 "></div>
                </div>

                <div className="w-full p-5 box-border text-center">
                    <h1 className="text-2xl font-bold">Profile Name</h1>
                    <p className="text-gray-600">Some profile information...</p>
                </div>
            </div>
            <div className="text-center">
                <p>he</p>
                <hr className="border-t border-gray-300" />
                <p>he</p>
            </div>
        </>
    );
}
