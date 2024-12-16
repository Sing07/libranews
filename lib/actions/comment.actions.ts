"use server";

import { revalidatePath } from "next/cache";

import { connectToDB } from "../mongoose";

import User from "../models/user.model";
import Post from "../models/post.model";

import mongoose from "mongoose";
import Comment from "../models/comment.model";


// Create a new comment
export const createComment = async (
    {content,
    author,
    post} : {
        content: string
        author: string
        post: string
    }
) => {
    // connectToDB();
    const newComment = new Comment({
        content,
        author,
        post,
    });
    return await newComment.save();
};

// Get comments by post ID
export const getCommentsByPost = async (postId: mongoose.Types.ObjectId) => {
    // connectToDB();
    return await Comment.find({ post: postId })
        .populate("author")
        .populate("post")
        .exec();
};

// Update a comment by ID
export const updateComment = async (
    commentId: mongoose.Types.ObjectId,
    content: string
) => {
    // connectToDB();
    return await Comment.findByIdAndUpdate(
        commentId,
        { content },
        { new: true }
    ).exec();
};

// Delete a comment by ID
export const deleteComment = async (commentId: mongoose.Types.ObjectId) => {
    // connectToDB();
    return await Comment.findByIdAndDelete(commentId).exec();
};
