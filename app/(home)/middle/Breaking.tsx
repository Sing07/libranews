import React from "react";
import GNewsPost from "../_components/GNewsPost";
import { fetchPosts } from "@/lib/actions/post.actions";
import UserPosts from "../_components/UserPost";
import { currentUser } from "@clerk/nextjs/server";
import { fetchUser } from "@/lib/actions/user.actions";

export default async function Breaking() {
    // const apikey = "8de7b172bf846c381d2cb3c7c2f9dda2";
    // const category = "nation";
    // const url =
    //     "https://gnews.io/api/v4/top-headlines?category=" +
    //     category +
    //     "&lang=en&country=us&max=10&apikey=" +
    //     apikey;

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

    const category = "nation";
    const url =
        "https://gnews.io/api/v4/top-headlines?category=" +
        category +
        "&lang=en&country=us&max=10&apikey=" +
        process.env.GNEWS_APIKEY;

    let articles = await fetchPosts();
    const cleanarticles = JSON.parse(JSON.stringify(articles));
    // console.log(cleanarticles, "line 34");

    // let articles = [];
    // try {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     articles = data.articles;
    //     for (let i = 0; i < articles.length; i++) {
    //         console.log("****Here");
    //         console.log("\nTitle: " + articles[i]["title"]);
    //         console.log("Description: " + articles[i]["description"] + "\n");
    //     }
    // } catch (error) {
    //     console.error("Error fetching articles:", error);
    // }

    // const articles = await fetch(url)
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         const articles = data.articles;

    //         for (let i = 0; i < articles.length; i++) {
    //             // articles[i].title
    //             console.log("****Here")
    //             console.log("\nTitle: " + articles[i]["title"]);
    //             // articles[i].description
    //             console.log("Description: " + articles[i]["description"] + "\n");
    //             // You can replace {property} below with any of the article properties returned by the API.
    //             // articles[i].{property}
    //             // console.log(articles[i]['{property}']);

    //             // Delete this line to display all the articles returned by the request. Currently only the first article is displayed.
    //             // break;
    //         }
    //     });

    return (
        // <div className="">
        //     {/* <h1 className="text-3xl font-bold">Breaking</h1> */}
        //     {/* {articles.map((data: Article) => (
        //         <GNewsPost key={data.publishedAt} {...data} />
        //     ))} */}

        //     {articles.map((data) => (
        //         <GNewsPost key={data.createdAt} {...data} />
        //     ))}
        // </div>

        <div className="">
            {cleanarticles.length === 0 ? (
                <p>No posts found</p>
            ) : (
                cleanarticles.map((data: any) => (
                    <UserPosts
                        key={data._id}
                        {...data}
                        curentUserId={userIdString}
                    />
                ))
            )}
        </div>
    );
}
