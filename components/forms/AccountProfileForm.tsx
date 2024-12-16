"use client";

import React from "react";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserValidation } from "@/lib/validations/user";
import { z } from "zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import { updateUser } from "@/lib/actions/user.actions";
// import { useRouter } from "next/router";
import { usePathname, useRouter } from "next/navigation";

type Props = {
    user: {
        id: string;
        objectId: string;
        username: string;
        name: string;
        bio: string;
        image: string;
    };
    btnTitle: string;
}

export default function AccountProfile({ user, btnTitle }: Props) {
    const router = useRouter();
    const pathname = usePathname();

    const form = useForm({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            profile_photo: user?.image || "",
            name: user?.name || "",
            username: user?.username || "",
            bio: user?.bio || "",
        },
    });

    async function onSubmit(values: z.infer<typeof UserValidation>) {


        await updateUser({
            userId : user.id, 
            username: values.username,
            name: values.name,
            bio: values.bio,
            image: values.profile_photo,
            path: pathname,
        });

        if(pathname === "/profile/edit"){
            router.back();
        }else {
            router.push('/')
        }
    }

    function handleImage(
        e: React.ChangeEvent<HTMLInputElement>,
        fieldChange: (value: string) => void
    ) {
        e.preventDefault();

        const fileReader = new FileReader();

        if (e.target.files?.length) {
            const file = e.target.files[0];


            if (!file.type.includes("image")) {
                return;
            }

            fileReader.onload = async (event) => {
                const imageDataUrl = event.target?.result?.toString() || "";
                fieldChange(imageDataUrl);
            };

            fileReader.readAsDataURL(file);
        }
    }

    return (
        <div>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col justify-start gap-10"
                >
                    <FormField
                        control={form.control}
                        name="profile_photo"
                        render={({ field }) => (
                            <FormItem className="flex items-center gap-4">
                                <FormLabel className="account-form_image-label">
                                    {field.value ? (
                                        <Image
                                            src={field.value}
                                            alt="profile_icon"
                                            width={96}
                                            height={96}
                                            priority
                                            className="rounded-full object-contain"
                                        />
                                    ) : (
                                        <Image
                                            src="/assets/profile.svg"
                                            alt="profile_icon"
                                            width={24}
                                            height={24}
                                            className="object-contain"
                                        />
                                    )}
                                </FormLabel>
                                <FormMessage />

                                <FormControl className="flex-1 text-base-semibold text-gray-200">
                                    <Input
                                        type="file"
                                        accept="image/*"
                                        placeholder="Upload a photo"
                                        className="account-form_image-input"
                                        onChange={(e) =>
                                            handleImage(e, field.onChange)
                                        }
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem className="w-full">
                                <FormLabel className="text-base-semibold text-light-2">
                                    Name
                                </FormLabel>
                                <FormControl className="flex-1 text-base-semibold text-gray-200">
                                    <Input
                                        type="text"
                                        className="account-form_input no-focus"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem className=" w-full">
                                <FormLabel className="text-base-semibold text-light-2">
                                    Username
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        type="text"
                                        className="account-form_input no-focus"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="bio"
                        render={({ field }) => (
                            <FormItem className=" w-full">
                                <FormLabel className="text-base-semibold text-light-2">
                                    Bio
                                </FormLabel>
                                <FormControl>
                                    <Textarea
                                        rows={10}
                                        className="account-form_input no-focus"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="bg-slate-400">
                        {btnTitle}
                    </Button>
                </form>
            </Form>
        </div>
    );
}
