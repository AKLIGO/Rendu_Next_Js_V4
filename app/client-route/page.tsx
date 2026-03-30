"use client";

import { useTheme } from "@/components/theme-provider";
import { clientSideFunction } from "@/utils/client-utils";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./ImageSlider.css";


import { serverSideFunction } from "@/utils/server-utils";

export default function ClientRoutePage() {

    const theme = useTheme() || { colors: { primary: "#0070f3", secondary: "#1c1c1e" } };

        // const settings = {
        // dots: true,
        // };
    const result = serverSideFunction();
    const clientResult = clientSideFunction();
    console.log(result, clientResult);
    return (
        <>
            <h1 style={{ color: theme?.colors?.secondary || "#1c1c1e" }}>
                Client Route page {result} - {clientResult}
            </h1>
        </>
    );
}