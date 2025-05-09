"use client";


import { Handshake, ThumbsUp } from "lucide-react";
import { MessageSquare } from "lucide-react";
import { Forward } from "lucide-react";


export default function MetricV1() {

    return (
        <div className="flex flex-wrap border mt-2 interactiveSection text-xs p-1">
            <div>
                <div className="flex items-center gap-2">
                    <p className=" w-16">Accuracy</p>
                    <span className="flex w-20 h-1 bg-gray-400"></span>
                </div>
                <div className="flex items-center gap-2">
                    <p className=" w-16">Objectivity</p>
                    <span className="flex w-20 h-1 bg-gray-400"></span>
                </div>
            </div>
            <div className=" ml-6 mr-8">
                <div className="flex items-center gap-2">
                    <p className=" w-16">Timeliness</p>
                    <span className="flex w-20 h-1 bg-gray-400"></span>
                </div>
                <div className="flex items-center gap-2">
                    <p className=" w-16">Relevance</p>
                    <span className="flex w-20 h-1 bg-gray-400"></span>
                </div>
            </div>

            <div className="flex items-center gap-3 justify-center pl-4">
                <button>
                    Like
                    <ThumbsUp />

                </button>
                <button>
                    Comment
                    <MessageSquare />
                </button>
                <button>
                    Endorse
                    <Handshake />
                </button>

                <button>
                    Share
                    <Forward />
                </button>
            </div>
        </div>
    );
}
