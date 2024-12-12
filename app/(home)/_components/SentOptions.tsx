import React from "react";

const SentOptions = ({
    cmp,
    handleClick,
}: {
    cmp: { x: number; y: number };
    handleClick: (a: string) => void;
}) => {
    return (
        <div
            className="context-menu fixed bg-white rounded-lg shadow-lg p-2 left-1/2 transform -translate-x-1/2 transition-opacity duration-300"
            style={{ left: cmp.x, top: cmp.y }}
        >
            <ul>
                <li
                    className="cursor-pointer hover:bg-gray-400 rounded-lg"
                    onClick={() => handleClick("Option 1")}
                >
                    Option 1
                </li>
                <li
                    className="cursor-pointer hover:bg-gray-400 rounded-lg"
                    onClick={() => handleClick("Option 2")}
                >
                    Option 2
                </li>
                <li
                    className="cursor-pointer hover:bg-gray-400 rounded-lg"
                    onClick={() => handleClick("Option 3")}
                >
                    Option 3
                </li>
            </ul>
        </div>
    );
};

export default SentOptions;
