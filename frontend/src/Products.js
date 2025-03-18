import React, { useState, useEffect } from 'react';
import { fetchProducts } from './api';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts().then(res => setProducts(res.data)).catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h2>Product Listing</h2>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </div>
    );
}

export default Products;