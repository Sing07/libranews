import mongoose from "mongoose";
import User from "./models/user.model";
import Post from "./models/post.model";
// import User from "./models/User.js";
// import Post from "./models/Post.js";

export const seedUsersAndPosts = async () => {
    const existing = await User.findOne({ id: "user1" });
    if (existing) {
        console.log("Seed data already exists. Skipping.");
        return;
    }

    console.log("14 seeding")

    // Step 1: Create ObjectIds manually
    const user1Id = new mongoose.Types.ObjectId();
    const user2Id = new mongoose.Types.ObjectId();
    const user3Id = new mongoose.Types.ObjectId();

    const post1Id = new mongoose.Types.ObjectId();
    const post2Id = new mongoose.Types.ObjectId();
    const post3Id = new mongoose.Types.ObjectId();

    // Step 2: Seed users
    await User.insertMany([
        {
            _id: user1Id,
            id: "user1",
            username: "john_doe",
            name: "John Doe",
            image: "https://example.com/avatar1.png",
            bio: "Tech enthusiast and blogger",
            followedCategories: ["Technology", "Politics"],
            onboarded: true,
            post: [post1Id],
        },
        {
            _id: user2Id,
            id: "user2",
            username: "jane_writer",
            name: "Jane Writer",
            image: "https://example.com/avatar2.png",
            bio: "Journalist covering global affairs",
            followedCategories: ["Politics"],
            onboarded: true,
            post: [post2Id],
        },
        {
            _id: user3Id,
            id: "user3",
            username: "sports_guru",
            name: "Mike Goal",
            image: "https://example.com/avatar3.png",
            bio: "Lover of all things football",
            followedCategories: ["Sports"],
            onboarded: true,
            post: [post3Id],
        },
    ]);

    // Step 3: Seed posts
    await Post.insertMany([
        {
            _id: post1Id,
            title: "Breaking: AI Takes Over the World",
            content: "AI has become sentient...",
            caption: "The rise of AI",
            description: "How AI is dominating.",
            category: ["Technology"],
            tags: ["ai", "breaking-news"],
            author: user1Id,
            isVerified: true,
        },
        {
            _id: post2Id,
            title: "Elections 2025: What You Need to Know",
            content: "A comprehensive guide...",
            caption: "Election Guide",
            description: "Important dates and facts.",
            category: ["Politics"],
            tags: ["election", "2025"],
            author: user2Id,
            isVerified: false,
        },
        {
            _id: post3Id,
            title: "Donald Trump proposes to raise income taxes on wealthy Americans",
            content: "Move would breach Rupublican orthodoxy and comes as president seeks to pay for breaoder fiscal package",
            caption: "Here we go",
            description: "Republican leader new tax propose",
            category: ["Politics"],
            tags: ["Trump", "politics"],
            author: user3Id,
            isVerified: true,
        },
    ]);

    console.log("Users and posts seeded with linked _id references.");
};
