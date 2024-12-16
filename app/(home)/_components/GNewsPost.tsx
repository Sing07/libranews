"use client";

import React from "react";
import Image from "next/image";
import MetricV2 from "./utility/MetricV2";
import { formatDistanceToNowStrict } from "date-fns";
import Link from "next/link";

export default function GNewsPost ({
    title,
    description,
    content,
    url,
    image,
    publishedAt,
    source,
}: {
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    publishedAt: string;
    source: {
        name: string;
        url: string;
    };
}) {
    return (
        <div className="card bg-stone-300">
            <div className="picture-bio flex items-center pb-2">
                <div className="flex overflow-hidden rounded-full shadow-md shadow-gray-900 ">
                    <Image
                        src="/icon.png"
                        width={50}
                        height={50}
                        alt="logo"
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="ml-3 ">
                    <span className=" font-bold">{source.name}</span>
                    <span className=" block font-light text-sm">
                        {formatDistanceToNowStrict(new Date(publishedAt), {
                            addSuffix: true,
                        })}
                    </span>
                </div>
            </div>

            <Link href={url}>
                <div className="flex border w-full py-3">
                    <div className="flex overflow-hidden rounded-md">
                        {image ? (
                            <Image
                                src={image}
                                width={400}
                                height={400}
                                alt="Article image"
                                className="object-cover"
                            />
                        ) : (
                            <div
                                style={{
                                    width: 250,
                                    height: 250,
                                    backgroundColor: "#ccc",
                                }}
                            />
                        )}
                    </div>

                    <div className="w-full">
                        <h1 className="h-15 ml-4 mb-1 font-semibold bold text-xl tracking-tighter">
                            {title}
                        </h1>
                        <p className="font-light text-sm ml-4">{description}</p>

                        <div className="flex justify-between px-4 pt-4 text-xs ">
                            <p className="mt-3 font-light">
                                {new Date(publishedAt).toLocaleString()}
                            </p>

                            <p className="mt-3">2,493 impressions | 547 Read</p>
                        </div>
                    </div>
                </div>
            </Link>

            {/* <MetricV2 /> */}
        </div>
    );
};

