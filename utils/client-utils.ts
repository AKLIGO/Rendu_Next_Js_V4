import "client-only"
export const clientSideFunction =() => {
    console.log(
        `use window Object,
        use local storage,`
    );

    return "Client Result";
}