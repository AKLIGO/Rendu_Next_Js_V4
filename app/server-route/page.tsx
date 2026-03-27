import { serverSideFunction } from "@/utils/server-utils";

export default function ServerRoute() {
    const result = serverSideFunction();
    console.log(result);
    return (
        <>
            <h1>Server Route page {result}</h1>
        </>
    );
}