
"use client";
import { useState } from "react";
export const SearchBar = () => {
     const [search, setSearch] = useState("");
    console.log("SearchBar rendered");
    return (
        <div>Search Bar Component</div>
    );
}