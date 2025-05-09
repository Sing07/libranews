"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import PopPost from "./PopPost";
import { modifiedPosts } from "@/public/dummy";
import MetricV1 from "./utility/MetricV1";
// import MetricV2 from "./utility/MetricV2";

const AccountPost = () => {
    const [modal, setModal] = useState(false);

    function handleModal() {
        setModal((prev) => !prev);
    }

    return (
        <div className="card bg-amber-100 ">
            <span className="font-semibold bg-red-200 rounded-lg px-2 margin">Sample Account Post</span>
            {modal && <PopPost item={modifiedPosts[1]} onClik={handleModal} />}
            <div className="flex-col">
                <div className="top">
                    <div className="flex">
                        <div className="flex overflow-hidden rounded-full ">
                            <Image
                                src="/obama-bio.jpeg"
                                width={70}
                                height={80}
                                alt="logo"
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="ml-3 ">
                            <span className=" font-bold">Barack Obama</span>
                            <span className=" block font-light">
                                44th Ex-POTUS • Politician
                            </span>
                            <span className=" block font-light text-sm">
                                6h Timestamp
                            </span>
                        </div>
                    </div>

                    <div className="px-1 py border-none overflow-auto outline-none">
                        <textarea
                            disabled
                            value="Hours earlier, former president Donald Trump urged Republican legislators to trigger the first-ever US debt default by refusing to lift the limit if Democrats do not agree to spending cuts.President Joe Biden has also threatened to call off his trip to Asia,"
                            name="caption"
                            overflow-y="hidden"
                            box-sizing="border-box"
                            style={{ resize: "none" }}
                        ></textarea>
                    </div>
                </div>

                <div className="bottom">
                    <div className="flex border" onClick={handleModal}>
                        <div className="flex overflow-hidden rounded-md">
                            {/* {console.log(modal)} */}
                            <Image
                                src="/obama.jpeg"
                                width={200}
                                height={300}
                                alt="logo"
                                style={{ objectFit: "cover" }}
                            />
                        </div>

                        <div className="border">
                            <h1 className=" cursor-pointer ml-2 font-semibold bold">
                                How Federal Judge&apos;s Ruling on Obamacare Could Change
                                Health Insurance
                            </h1>
                            <div className="flex text-xs justify-between ml-2 mr-2 ">
                                <p className=" text-left mt-6">
                                    2,493 impressions | 547 Read
                                </p>
                                <p className=" text-right mt-6">
                                    2,493 impressions | 547 Read
                                </p>
                            </div>
                        </div>
                    </div>

                    <MetricV1 />
                </div>
            </div>
        </div>
    );
};

export default AccountPost;
