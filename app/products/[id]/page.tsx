export async function generateStaticParams(){
    return [
        { id: "1" },
        { id: "2" },
        { id: "3" },
    ];
}


export default async function ProductPageById({ params }: { params: { id: string } }) {
    const { id } = params;
    console.log("Product page rendered at", new Date().toLocaleTimeString());
    return (
        <>
            <h1>Product {id} details rendered at {new Date().toLocaleTimeString()}</h1>
        </>
    );
}