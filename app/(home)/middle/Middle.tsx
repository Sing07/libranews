import React from "react";
import AccountPost from "../_components/AccountPost";
import { modifiedPosts } from "@/public/dummy";
import PostV2 from "../_components/PostV2";
import PartnerPost from "../_components/PartnerPost";
import Breaking from "./Breaking";

export default function Middle() {
    return (
        <div className="border border-black">
            <Breaking />
            <AccountPost />
            <PartnerPost
                title = 'US debt ceiling: Joe Biden and Kevin McCarthy seek to break impasse'
                profilePic="/bbc.jpeg"
                postPic="/biden.jpeg"
            />
            <PartnerPost
                title="Trump says there 'must be a heavy price to pay' for Comey, Democrats after release of Durham report"
                profilePic="/fox.jpeg"
                postPic="/trump.jpeg"
            />
            {modifiedPosts.map((i) => (
                <PostV2 item={i} key={i.title} />
            ))}
        </div>
    );
}
