
import fs from "fs";

export const ServerComponentTwo = () => {
    fs.readFileSync("components/server-component-two.tsx", "utf-8");
    console.log("Server Component Two rendered");
    return (
        <div>Server Component Two</div>
    );
}