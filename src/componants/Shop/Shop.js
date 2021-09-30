import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAdd = (product) =>{
        const newProduct = [...cart,product];
        setCart(newProduct);
    }

    return (
        <div className="shop"> 
            <div className="product-container">
                <h1>this is products area</h1>
                {
                    products.map(product => <Products 
                        key={product.key}
                        product={product}
                        handler={handleAdd}
                    ></Products>)
                }
            </div>
            <div className="cart-container">
                {
                    <Cart cart={cart}></Cart>
                }
            </div>
        </div>
    );
};

export default Shop;