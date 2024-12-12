import React, { useState, useEffect } from "react";
// import Image from "next/image";
import SentOptions from "./SentOptions";

const PopPost = ({
    item,
    onClik,
}: {
    item: {
        title: string;
        link: string;
        description: string;
        content: string;
    };
    onClik: () => void;
}) => {
    const [underlinedSentences, setUnderlinedSentences] = useState<number[]>([]);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [contextMenuPosition, setContextMenuPosition] = useState({ x: 0, y: 0 });

    const handleSentenceClick = (
        index: number,
        event: React.MouseEvent<HTMLElement>
    ) => {
        const updatedUnderlinedSentences = [...underlinedSentences];
        if (updatedUnderlinedSentences.includes(index)) {
            updatedUnderlinedSentences.splice(
                updatedUnderlinedSentences.indexOf(index),
                1
            );
        } else {
            updatedUnderlinedSentences.push(index);
        }
        setUnderlinedSentences(updatedUnderlinedSentences);

        setShowContextMenu((prev) => !prev);
        setContextMenuPosition({ x: event.clientX, y: event.clientY });
    };

    const handleMenuItemClick = (action: string) => {
        console.log("Selected Action:", action);
        setShowContextMenu(false);
    };

    useEffect(() => {
        const handleEscapeKeyPress = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClik();
            }
        };

        document.addEventListener("keydown", handleEscapeKeyPress);

        return () => {
            document.removeEventListener("keydown", handleEscapeKeyPress);
        };
    }, [item, onClik]);

    return (
        <div className="modal whitespace-pre-line inset-0 fixed ">
            <div className="overlay w-screen inset-0 fixed bg-gray-800 bg-opacity-80">
                <button
                    onClick={onClik}
                    className="bg-white p-2 rounded-md cursor-pointer text-black absolute right-80 top-14"
                >
                    Close
                </button>

                <div className="slate w-5/6 bg-slate-800 content-center mx-auto mt-4 h-4/5 p-4">
                    <div className="content mx-auto w-2/6 bg-slate-50 rounded px-4 pt-3 h-full overflow-auto">
                        {/* <img
                            src={item.image_url}
                            width={500}
                            height={80}
                            alt="logo"
                            style={{ objectFit: "cover" }}
                        /> */}
                        <p
                            className={`title pt-5 font-bold text-3xl ${
                                underlinedSentences.includes(-1) ? "underline" : ""
                            }`}
                            onClick={(event) => handleSentenceClick(-1, event)}
                        >
                            {item.title}
                        </p>
                        <p className="content pt-8 pb-4 leading-loose">
                            {item.content
                                .split(".")
                                .map((sentence, sentenceIndex) => (
                                    <span
                                        key={sentenceIndex}
                                        className={`${
                                            underlinedSentences.includes(
                                                sentenceIndex
                                            )
                                                ? "underline"
                                                : ""
                                        }`}
                                        onClick={(event) =>
                                            handleSentenceClick(sentenceIndex, event)
                                        }
                                    >
                                        {sentence +
                                            (sentenceIndex !==
                                            item.content.split(". ").length - 1
                                                ? "."
                                                : "")}
                                    </span>
                                ))}
                        </p>

                        {showContextMenu && ( // this part is clicking features
                            <SentOptions
                                cmp={contextMenuPosition}
                                handleClick={handleMenuItemClick}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopPost;

// {
//     props.item.content.split(". ").map((sentence, sentenceIndex) => (
//         <span
//             key={sentenceIndex}
//             className={`${
//                 underlinedSentences.includes(sentenceIndex) ? "underline" : ""
//             }`}
//             onClick={(event) => handleSentenceClick(sentenceIndex, event)}
//         >
//             {sentence.trim() +
//                 (sentenceIndex !== props.item.content.split(". ").length - 1 ? "." : "")}
//         </span>
//     ));
// }
