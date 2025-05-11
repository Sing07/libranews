import { fetchPosts } from "@/lib/actions/post.actions";
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
            </div>
        </div>
    );
}
