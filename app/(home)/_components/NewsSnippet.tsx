"use client";
import { BookImage } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function NewsSnippet({
    _id,
    title,
    content,
}: {
    _id: string;
    title: string;
    content: string;
}) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const handleClick = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("compare", _id);
        // router.push(`${pathname}?${params.toString()}`);
        router.replace(`${pathname}?${params.toString()}`); // this prevents new modal popup
    };

    return (
        <div
            onClick={handleClick}
            className="cursor-pointer hover:bg-gray-100 bg-slate-200 px-1 rounded-xl"
        >
            <div className="flex">
                <BookImage className="bg-slate-400 mx-2 rounded-lg" size = {50} strokeWidth={2} />
                <p className="font-bold">{title}</p>
            </div>
            <p className="">{content}</p>
        </div>
    );
}
