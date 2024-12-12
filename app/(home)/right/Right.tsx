import React from "react";
import Filter from "./Filter";
import Happening from "./Happening";
import Suggestions from "./MightAlsoLike";

const Right = () => {
    return (
        <div className="border border-black space-y-4">
            <Filter />
            <Happening />
            <Suggestions />
        </div>
    );
};

export default Right;
