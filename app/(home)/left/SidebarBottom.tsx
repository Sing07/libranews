import React from "react";
import { modifiedPosts } from "@/public/dummy";
import NewsBites from "../_components/NewsBites";

const SidebarBottom = () => {
    return (
        <div className="card">
            <div>
                <h1 className="font-bold flex gap-3 ml-2 py-1 ">News Bites</h1>
                {modifiedPosts.map((i) => (
                    <NewsBites item={i} key={i.title} />
                ))}
            </div>
        </div>
    );
};

export default SidebarBottom;
