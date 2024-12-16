import React from "react";
import Filter from "./Filter";
import Happening from "./Happening";
import Suggestions from "./MightAlsoLike";
import PostInput from "../_components/PostInput";
import { currentUser } from "@clerk/nextjs/server";
import { fetchUser } from "@/lib/actions/user.actions";

export default async function Right() {
    const user = await currentUser();

    if (!user) return (
        <div className="border border-black space-y-4">

            <Happening />
            <Suggestions />
        </div>
    );

    const userInfo = await fetchUser(user.id);

    const userIdString = userInfo._id.toString();

    return (
        <div className="border border-black space-y-4 ">
            <PostInput userId={userIdString} />
            <Happening />
            <Suggestions />
        </div>
    );
}
