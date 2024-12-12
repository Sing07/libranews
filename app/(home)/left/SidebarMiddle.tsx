import React from "react";
import { newsGenres } from "@/data/newsGenres";


const SidebarMiddle = () => {
    return (
        <div className="card">
            <h1 className="font-bold mb-2">Genre</h1>
            <div className="flex flex-wrap gap-1 items-center">
                {Object.values(newsGenres).map((genre, index) => (
                    <React.Fragment key={genre}>
                        <span className="ml-2 py-1 text-sm" key={`genre-${index}`}>
                            {genre}
                        </span>
                        {index < Object.values(newsGenres).length - 1 && (
                            <div
                                className="w-2 h-2 rounded-full bg-gray-400"
                                key={`circle-${index}`}
                            ></div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default SidebarMiddle;
