"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import PopPost from "./PopPost";
import { modifiedPosts } from "@/public/dummy";
import MetricV2 from "./utility/MetricV2";

const PartnerPost = ({
    title,
    profilePic,
    postPic,
}: {
    title: string;
    profilePic: string;
    postPic: string;
}) => {
    const [modal, setModal] = useState(false);

    function handleModal() {
        setModal((prev) => !prev);
    }

    return (
        <div className="card">
            {modal && <PopPost item={modifiedPosts[0]} onClik={handleModal} />}
            <div className="flex-col">
                <div className="bottom">
                    <div className="flex border w-full" onClick={handleModal}>
                        <div className="flex overflow-hidden rounded-md">
                            {/* {console.log(modal, "partnetpost 50")} */}
                            <Image
                                src={postPic}
                                width={300}
                                height={300}
                                alt="logo"
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        <div className=" w-full">
                            <div className="title h-20">
                                <h1 className=" cursor-pointer ml-4 font-semibold bold text-2xl">
                                    {title}
                                </h1>
                            </div>

                            <div className="logo-brand-timestamp flex text-xs justify-between ml-4 mr-2 mt-2">
                                <div className="flex w-auto item-end">
                                    <div className="flex overflow-hidden rounded-full ">
                                        <Image
                                            src={profilePic}
                                            width={40}
                                            height={40}
                                            alt="logo"
                                            style={{ objectFit: "fill" }}
                                        />
                                    </div>
                                    <div className="ml-1 self-center">
                                        <span className=" font-light ml-2">
                                            BBC News • 6h
                                        </span>
                                    </div>
                                </div>

                                <p className=" text-right mt-3">
                                    2,493 impressions | 547 Read
                                </p>
                            </div>
                        </div>
                    </div>
                    <MetricV2 />
                </div>
            </div>
        </div>
    );
};

export default PartnerPost;
