export const Product = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
    return(
        <>
            <div>Product in 2 min</div>
        </>
    );
}