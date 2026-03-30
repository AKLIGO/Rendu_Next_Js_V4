
import fs from "fs";

import { ServerComponentTwo } from "./server-component-two";

export const ServerComponentOne = () => {
    fs.readFileSync("components/server-component-one.tsx", "utf-8");
    console.log("Server Component One rendered");
    return (
        <>  <div>Server Component One</div>
            <ServerComponentTwo />
            
        </>
    );
}