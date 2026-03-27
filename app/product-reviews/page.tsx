import { Suspense } from "react";

import { Product } from "@/components/product";
import { Reviews } from "@/components/reviews";
export default function ProductReviews() {
    return (
        <>
            <h1>Product Reviews page</h1>
            <Suspense fallback={<div>Loading product details...</div>}>
                <Product />
            </Suspense>
            
            <Suspense fallback={<div>Loading reviews...</div>}>
                <Reviews />
            </Suspense>
        </>
    );
}