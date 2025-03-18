import React, { useState, useEffect } from 'react';
import { fetchProducts } from './api';

function Dashboard() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const response = await fetchProducts();
                setProducts(response.data);
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        };

        loadProducts();
    }, []);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Available Products</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                {products.map(product => (
                    <div key={product._id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "10px" }}>
<img src={product.image} alt={product.name}
style={{ width: "100%", height: "150px", objectFit: "cover" }} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p><strong>Price: </strong>${product.price}</p>
                        <button style={{ background: "blue", color: "white", padding: "10px", border: "none", cursor: "pointer" }}>
                            Order Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
