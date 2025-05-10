import { fetchPosts } from "@/lib/actions/post.actions";
import NewsBob from "./NewsBob";

import NewsSnippet from "./NewsSnippet";
import { currentUser } from "@clerk/nextjs/server";
import { fetchUser } from "@/lib/actions/user.actions";

export default async function SimilarNews() {
    const posts = await fetchPosts();
    const cleanarticles = JSON.parse(JSON.stringify(posts));

    const user = await currentUser();
    
        if (!user) return null;
    
        const userInfo = await fetchUser(user.id);
        // console.log(userInfo, "line12");
        // console.log(userInfo._id, "line13");
        // console.log(userInfo._id.toString(), "line14");
        const userIdString = userInfo._id.toString();

    return (
        <div className="card my-5">
            <h1 className="text-xl font-bold py-2 pl-4">Similar News</h1>

            <div className="space-y-4">
                {cleanarticles.map((data: any) => {
                    return <NewsSnippet key={data._id} {...data} curentUserId={userIdString} />
                })}

                {/* <UserPosts key={data._id} {...data} curentUserId={userIdString} /> */}
                
                {/* <NewsBob />
                <NewsBob />
                <NewsBob /> */}
            </div>

            <button className="transition-all px-4 pt-6 rounded-full text-blue-600 hover:bg-gray-100 hover:shadow-md focus:outlin-none duration-200 ease-in-out">
                Show more
            </button>
        </div>
    );
}
