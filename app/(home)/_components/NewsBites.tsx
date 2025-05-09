import React from "react";

const NewsBites = ({
    item,
}: {
    item: {
        title: string;
        link: string;
        description: string;
    };
}) => {
    return (
        <div className="card shadow-none my-1">
            <h1 className=" cursor-pointer text-sm font-semibold">
                {item.title.slice(0, 50)}...
            </h1>
        </div>
    );
};

export default NewsBites;
