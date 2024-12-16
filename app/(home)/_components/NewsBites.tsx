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
        <div className="card shadow-none">
            <h1 className=" cursor-pointer text-sm py-2">
                {item.title.slice(0, 50)}...
            </h1>
        </div>
    );
};

export default NewsBites;
