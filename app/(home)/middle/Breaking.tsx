import React from "react";
import GNewsPost from "../_components/GNewsPost";
import { fetchPosts } from "@/lib/actions/post.actions";
import UserPosts from "../_components/UserPost";
import { currentUser } from "@clerk/nextjs/server";
import { fetchUser } from "@/lib/actions/user.actions";
import { saved_articles } from "./placeholderarticles";


export default async function Breaking({ searchQuery }: { searchQuery: string }) {
    const user = await currentUser();

    if (!user) return null;

    const userInfo = await fetchUser(user.id);
    // console.log(userInfo, "line12");
    // console.log(userInfo._id, "line13");
    // console.log(userInfo._id.toString(), "line14");
    const userIdString = userInfo._id.toString();

    type Article = {
        title: string;
        description: string;
        content: string;
        url: string;
        image: string;
        publishedAt: string;
        source: { name: string; url: string };
    };

    // const category = "nation";
    
    // let url =
    // "https://gnews.io/api/v4/top-headlines?category=" +
    // category +
    // "&lang=en&country=us&max=10&apikey=" +
    // process.env.GNEWS_APIKEY;
    
    // if (searchQuery == '') {
    //     console.log("searchQuery is empty line 31");
    // } else {
    //     console.log("line 33 searchQuery is:", searchQuery);
    //     url =
    //         "https://gnews.io/api/v4/top-headlines?category=" +
    //         category +
    //         "&lang=en&country=us&max=10&apikey=" +
    //         process.env.GNEWS_APIKEY + "&q=" + searchQuery;
    // }


    const posts = await fetchPosts();
    const cleanarticles = JSON.parse(JSON.stringify(posts));
    // console.log(cleanarticles, "line 34");

    // let articles = [];

    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();

    //     if (data && Array.isArray(data.articles)) {
    //         articles = data.articles;
    //     }
    // } catch (error) {
    //     console.error("Error fetching articles:", error);
    // }

    const articles = saved_articles.articles

    return (
        <div>
            {cleanarticles.length === 0 ? (
                <p>No posts found</p>
            ) : (
                cleanarticles.map((data: any) => (
                    <UserPosts key={data._id} {...data} curentUserId={userIdString} />
                ))
            )}
            {articles.map((data: Article, index: any) => (
                <GNewsPost key={index} {...data} />
            ))}
        </div>
    );
}
