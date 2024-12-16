"use server";

import { revalidatePath } from "next/cache";

import { connectToDB } from "../mongoose";

import User from "../models/user.model";
import Post from "../models/post.model";

type Params = {
    text: string;
    author: string;
    communityId: string | null;
    path: string;
};

export async function createPost({
    author,
    caption,
    title,
    image,
    content,
    id,
}: {
    author: string;
    caption: string;
    title: string;
    image: string;
    content: string;
    id: string;
}) {
    try {
        connectToDB();

        await Post.create({
            author,
            id,
            caption,
            title,
            image,
            content,
        });

        // revalidatePath(path);
    } catch (error: any) {
        throw new Error(`Failed to create thread: ${error.message}`);
    }
    revalidatePath("/");
}

export async function fetchPosts() {
    connectToDB();

    //Calculate the number of posts to skip based on the page number and page size

    // Fetch the posts tat have no parents (top-level threads...)
    const postsQuery = Post.find({})
        .sort({ createdAt: -1 })
        .populate("author", "username"); // 1 for ascending order

    const posts = await postsQuery.exec();
    // console.log(posts, "line 113");
    const plainPosts = posts.map((post) => post.toObject());

    return plainPosts;
}

export async function likePost(postId: string, userId: string) {
    connectToDB();

    const post = await Post.findById(postId);
    const user = await User.findById(userId);

    // console.log(user.username, "line 72");  
    if (!post) {
        throw new Error("Post not found");
    }
    
    if (!user) {
        throw new Error("User not found");
    }

    // Check if the user has already liked the post
    const isLiked = post.likes.includes(userId);
    // let likeCount = post.likesCount;

    if (isLiked) {
        // If the post is already liked, handle unliking
        post.likes = post.likes.filter(
            (likeId: any) => likeId.toString() !== userId
        );
        user.likedPosts = user.likedPosts.filter(
            (likedPostId: any) => likedPostId.toString() !== postId
        );

        // decrement like count
        post.likesCount -= 1;
    } else {
        // if the post is not liked, add the user to the likes array
        post.likes.push(userId);
        user.likedPosts.push(postId);

        // increase the like count
        post.likesCount += 1;
    }

    // Save both the post and the user with the updated arrays
    await post.save();
    await user.save();

    // Return the updated like count and whether the post is liked
    return { likeCount: post.likesCount, isLiked: !isLiked };
}

export async function endorsePost(postId: string, userId: string) {
    connectToDB();

    const post = await Post.findById(postId);
    const user = await User.findById(userId);

    if (!post) throw new Error("Post not found");

    if (!user) throw new Error("User not found");


    // Check if the user has already endorsed the post
    const isEndorsed = post.endorsements.includes(userId);

    if (isEndorsed) {
        console.log("Already endorsed");
    } else {
        post.endorsements.push(userId);
        user.endorsedPosts.push(postId);
    }

    // Save both the post and the user with the updated arrays
    await post.save();
    await user.save();
}

export async function sharePost(postId: string, userId: string) {
    connectToDB();

    const post = await Post.findById(postId);
    const user = await User.findById(userId);

    if (!post) throw new Error("Post not found");

    if (!user) throw new Error("User not found");


    // Check if the user has already endorsed the post
    const isShared = post.shares.includes(userId);

    if (isShared) {
        console.log("Already shared");

    } else {
        post.shares.push(userId);
        user.sharedPosts.push(postId);
        post.sharesCount += 1;
    }

    // Save both the post and the user with the updated arrays
    await post.save();
    await user.save();
}

export async function addCommentToPost(
    postId: string,
    userId: string,
    commentText: string
) {
    connectToDB();

    const post = await Post.findById(postId);
    const user = await User.findById(userId);


    if (!post) throw new Error("Post not found");

    if (!user) throw new Error("User not found");



}

export async function getPostWithUsernames (postId:string){
    connectToDB();

    try {

        const post = await Post.findById(postId)
            .populate("likes", "name") // Populating 'likes' with only the 'username' field
            .populate("endorsements", "name") // Populating 'endorsements' with only the 'username' field
            .populate("shares", "name"); // Populating 'shares' with only the 'username' field

        if (!post) {
            throw new Error("Post not found");
        }

        // Returning the post with populated user details
        return post;
    } catch (error) {
        console.error("Error retrieving post with user details:", error);
        throw error;
    }
};

export async function fetchPostById(postId: string) {

    try {
        // TODO: Populate Community
        const post = await Post.findById(postId)

        return post;
    } catch (err: any) {
        throw new Error(`Unable to fetch thread: ${err.message}`);
    }
}