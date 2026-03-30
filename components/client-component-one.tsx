"use client";

import { useState } from "react";
import { ClientComponentTwo } from "./client-component-two";

export const ClientComponentOne = () => {
    const [name, setName] = useState("Superman");
    console.log("Client Component One rendered");
    return ( <>
        <ClientComponentTwo />
        <div>Client Component One: {name}</div>
    </>
    );
}