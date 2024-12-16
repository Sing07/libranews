"use client";
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
        <form onSubmit={handleSubmit}>
            <input
                className="rounded-md mr-20"
                size={30}
                type="text"
                placeholder="Search"
                value={query}
                onChange={handleChange} // Update query on input change
                onKeyDown={handleKeyDown} // Handle Enter key down
            />
        </form>
    );
}
