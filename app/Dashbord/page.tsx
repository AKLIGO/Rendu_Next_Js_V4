
"use client";


import { useState } from "react";   
export default function Dashboard() {
    const [name, setName] = useState("");
    return (
        <>
            <h1>Tableau de bord</h1>
            
            <input
                type="text"
                placeholder="Entrez votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <p>Bienvenue, {name} !</p>
        </>
    );
}