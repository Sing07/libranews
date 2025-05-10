import { fetchPosts } from "@/lib/actions/post.actions";
import { Trophy } from "lucide-react";
import { Newspaper } from "lucide-react";
import { Cpu } from "lucide-react";
import { PartyPopper } from "lucide-react";
import { Earth } from "lucide-react";
import { Bitcoin } from "lucide-react";
import { ChartLine } from "lucide-react";
import { Flame } from "lucide-react";
import { Microscope } from "lucide-react";
import { Podcast } from "lucide-react";
export default async function Ticker({ text }: { text: string }) {

    const posts = await fetchPosts()
    console.log("1555", posts)

    const topThreeTitles = posts
        .slice(0, 3)
        .map((post) => post.title)
        .join(`    |    `);
    console.log("1888", topThreeTitles);
    console.log(`[${topThreeTitles}]`);



    return (
        <div className="w-full overflow-hidden whitespace-nowrap bg-yellow-100">
            <div className="flex animate-marquee min-w-full gap-4">
                <span className="whitespace-pre">{topThreeTitles}</span>
                <Trophy />
                <Newspaper />
                <Cpu />
                <PartyPopper />
                <Earth />
                <Bitcoin />
                <ChartLine />
                <Flame />
                <Microscope />
                <Podcast />
            </div>
        </div>
    );
}
