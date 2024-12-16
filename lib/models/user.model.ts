import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: { type: String, required: true },
    username: { type: String, required: true },
    name: { type: String, required: true },
    image: String,
    bio: String,
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    followedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    followedCategories: [String],
    onboarded: {
        type: Boolean,
        default: false,
    },
    likedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    sharedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    endorsedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
