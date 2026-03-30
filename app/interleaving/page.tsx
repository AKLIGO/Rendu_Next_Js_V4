import { ServerComponentOne } from "@/components/server-component-one"; 


export default function InterleavingPage() {
    console.log("Interleaving Page rendered");
    return (
        <>
            <h1>Interleaving Page</h1>
            <ServerComponentOne />
        </>
    );
}