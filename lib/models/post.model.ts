import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String },
    caption: { type: String },
    description: { type: String },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    views: {
        type: Number,
        default: 0,
    },
    image: { type: String },
    category: [{ type: String }], // E.g., Politics, Technology, Sports
    tags: [{ type: String }], // E.g., ['breaking-news', 'election', 'technology']
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    likesCount: {
        type: Number,
        default: 0,
    },
    endorsements: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    shares: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    sharesCount: {
        type: Number,
        default: 0,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
    commentsCount: {
        type: Number,
        default: 0,
    },
    isVerified: {
        type: Boolean,
        default: false,
    }, // Indicates whether the post is verified by moderators
});

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;
