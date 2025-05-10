"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React, { useState } from "react";

export default function SearchInput() {
    const [query, setQuery] = useState("");
    const router = useRouter()

    // Handle the Enter key down event
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            e.preventDefault(); // Prevents form submission on Enter key press
            console.log("Enter key pressed with query14:", query); // Perform your action here
            router.push(`/search?q=${query}`); // Redirect to search page
        }
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent form submission
        console.log("Form submitted with query:", query); // Perform your action here
    };

    // Handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div className="flex items-center w-full max-w-md">
            <Search className="w-5 h-5 shrink-0" />
            <form onSubmit={handleSubmit} className="w-full ml-2">
                <input
                    className="w-full rounded-2xl bg-slate-200 px-3 py-1"
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
            </form>
        </div>
    );
}
