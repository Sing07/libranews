"use client";

import React from "react";
import { useState } from "react";
import Pop2 from "./Pop2";
import MetricV2 from "./utility/MetricV2";
// import Image from "next/image";

const PostV2 = ({
    item,
}: {
    item: {
        title: string;
        link: string;
        description: string;
        content: string
    };
}) => {
    const [modal, setModal] = useState(false);

    function handleModal() {
        setModal((prev) => !prev);
    }

    return (
        <div className="card">
            {modal && <Pop2 item={item} onClik={handleModal} />}

            <div className="flex-col">
                <div className="bottom">
                    <div className="flex border w-full" onClick={handleModal}>
                        <div className="flex overflow-hidden rounded-md">
                            {/* {console.log(modal, "partnetpost 50")} */}
                            {/* <Image src={item.} /> */}
                        </div>

                        <div className=" w-full">
                            <div className="title h-20">
                                <h1 className=" cursor-pointer ml-4 font-semibold bold text-2xl">
                                    {item.title}
                                </h1>
                            </div>

                            <div className="logo-brand-timestamp flex text-xs justify-between ml-4 mr-2 mt-2">
                                <div className="flex w-auto item-end">
                                    <div className="flex overflow-hidden rounded-full ">
                                        {/* <img
                                            src={props.profilePic}
                                            width={40}
                                            height={40}
                                            alt="logo"
                                            style={{ objectFit: "fill" }}
                                        /> */}
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

export default PostV2;
