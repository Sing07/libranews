import React from "react";
import { newsGenres } from "@/data/newsGenres";


const SidebarMiddle = () => {
    return (
        <div className="card">
            <h1 className="font-bold mb-2">Genre</h1>
            <div className="flex flex-wrap items-center">
                {Object.values(newsGenres).map((genre, index) => (
                    <React.Fragment key={genre}>
                        <span
                            className="ml-2 py-1 text-sm bg-slate-200 rounded-lg mt-1 p-2 cursor-pointer"
                            key={`genre-${index}`}
                        >
                            {genre}
                        </span>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default SidebarMiddle;
