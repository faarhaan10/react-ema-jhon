import './Product.css';

import React from 'react';

const Products = (props) => {
    const {img, name, seller,price,stock} = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h3>{name}</h3>
                <h4>{seller}</h4>
                <h2>{price}</h2>
                <p><small>only {stock} left in stock - order soon</small></p>
                <br />
                <button onClick={()=>{
                    props.handler(props.product)
                }}>add to cart</button>
            </div>
        </div>
    );
};

export default Products;