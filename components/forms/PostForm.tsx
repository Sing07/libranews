// components/FormModal.js
import React from "react";
import { useForm } from "react-hook-form";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { PostValidation } from "@/lib/validations/post";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import { createPost } from "@/lib/actions/post.actions";

export default function PostForm({
    user,
    isOpen,
    onClose,
}: {
    user: string
    isOpen: boolean;
    onClose: () => void;
}) {
    const form = useForm<z.infer<typeof PostValidation>>({
        resolver: zodResolver(PostValidation),
        defaultValues: {
            caption: "",
            title: "",
            image: "",
            content: "",
            // tags: [],
            // description: "", // could take first sentence of post
        },
    });

    async function onSubmit(values: z.infer<typeof PostValidation>) {
        console.log(values);
        onClose(); //Close the modal after submission(unsure if work)
        form.reset();
        await createPost({
            author: user,
            caption: values.caption,
            title: values.title,
            image: values.image,
            content: values.content,
            id: user,
        })
    }

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogTrigger asChild></DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Write A Post</DialogTitle>
                    <DialogDescription>
                        Fill out the form to create a new post.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                    >
                        <FormField
                            control={form.control}
                            name="caption"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Caption</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="What would you like to say?"
                                            {...field}
                                        />
                                    </FormControl>
                                    {/* <FormDescription>
                                        This is your public display name.
                                    </FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Title</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="What would you like to share? missing <IMAGE below></IMAGE>" 
                                            {...field}
                                        />
                                    </FormControl>
                                    {/* <FormDescription>
                                        This is your public display name.
                                    </FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Content</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            rows={10}
                                            className="account-form_input no-focus"
                                            {...field}
                                        />
                                    </FormControl>
                                    {/* <FormDescription>
                                        This is your public display name.
                                    </FormDescription> */}
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
