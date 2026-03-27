"use client";

import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {
    const result = serverSideFunction();
    console.log(result);
    return (
        <>
            <h1>Client Route page {result}</h1>
        </>
    );
}