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
        throw new Error(`Failed to create post: ${error.message}`);
    }
    revalidatePath("/");
}

export async function deletePost(postId: string, userId:string) {
    connectToDB();
    try {
        const post = await Post.findById(postId);


        if (!post) {
            throw new Error("Post not found");
        }

        // check if the user is the author of the post
        if (post.author.toString() !== userId) {
            throw new Error("You are not authorized to delete this post");
        }
        await Post.findByIdAndDelete(postId);

        revalidatePath("/");
    } catch (error: any) {
        throw new Error(`Failed to delete post: ${error.message}`);
    }
}

export async function fetchPosts() {
    connectToDB();

    const postsQuery = Post.find({})
        .sort({ createdAt: -1 })
        .populate("author", "username name"); // 1 for ascending order

    const posts = await postsQuery.exec();
    // console.log(posts, "line 113");
    const plainPosts = posts.map((post) => post.toObject());

    return plainPosts;
}

export async function fetchSharedPosts(userId: string) {
    connectToDB();

    try {
        
        // Find the user by their ID and populate the sharedPosts field with Post data
         const user = await User.findById(userId).populate({
             path: "sharedPosts", // This will populate sharedPosts (assumed to be an array of Post IDs)
             populate: {
                 path: "author", // Populate the author field inside the shared post
                 select: "username name", // Specify the fields to fetch from the User model
             },
         });

        // If the user exists, return the shared posts
        if (user) {
            return user.sharedPosts;
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        console.error("Error fetching shared posts:", error);
        throw error;
    }
}

export async function fetchEndorsedPosts(userId: string) {
    connectToDB();

    try {
        // Find the user by their ID and populate the sharedPosts field with Post data
        const user = await User.findById(userId).populate({
            path: "endorsedPosts", // This will populate endorsedPosts (assumed to be an array of Post IDs)
            populate: {
                path: "author", // Populate the author field inside the endorsed post
                select: "username name", // Specify the fields to fetch from the User model
            },
        });

        // If the user exists, return the shared posts
        if (user) {
            return user.endorsedPosts;
        } else {
            throw new Error("User not found");
        }
    } catch (error) {
        console.error("Error fetching endorsed posts:", error);
        throw error;
    }
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

    // check if the user has already liked the post
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
    revalidatePath("/");
    
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
    revalidatePath("/");

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

export async function getPostWithUsernames(postId: string) {
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
}

export async function fetchPostById(postId: string) {
    try {
        // TODO: Populate Community
        const post = await Post.findById(postId).populate({
            path: "author",
            select: "username name", 
        });

        return post;
    } catch (err: any) {
        throw new Error(`Unable to fetch post: ${err.message}`);
    }
}
