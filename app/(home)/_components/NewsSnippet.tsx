"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function NewsSnippet({ _id, title }: { _id: string; title: string }) {
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
            className="cursor-pointer hover:bg-gray-100 p-2 rounded-xl"
        >
            <p className="font-bold bg-slate-300 rounded-xl p-2">{title}</p>
        </div>
    );
}
