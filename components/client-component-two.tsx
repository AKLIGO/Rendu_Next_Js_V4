"use client";

import { useState } from "react";


export const ClientComponentTwo = () => {
    const [name, setName] = useState("Superman 2");
    console.log("Client Component Two rendered");
    return (
        <div>Client Component Two: {name}</div>
    );
}