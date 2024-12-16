import * as z from "zod";

export const PostValidation = z.object({
    caption: z.string().min(1, { message: "Empty caption" }),
    title: z.string().min(1, { message: "Empty title" }),
    image: z.string(),
    content: z.string().min(1, { message: "Empty content" }),
    // tags: z.array(z.string()),
});

export const CommentValidation = z.object({
    content: z.string().min(1, { message: "Empty comment" }),
    author: z.string().min(1, { message: "Author is required" }),
    post: z.string().min(1, { message: "Post is requied" }),
});
