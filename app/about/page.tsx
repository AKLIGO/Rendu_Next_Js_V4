import { cookies } from "next/headers";

export default async function About() {
    const cookieStore = cookies();
    const theme = (await cookieStore).get("theme");
    console.log(theme);

    console.log("About page rendered at", new Date().toLocaleTimeString());
    return (<>
        <h1>About page {new Date().toLocaleDateString()}</h1>
        
    </>);
}