import './Cart.css';

import React from 'react';

const Cart = (props) => {
    const products= props.cart;
    for(const product of products){
        const {price,shipping} = product;

    }
    return (
        <div>
            <h3>Items Ordered: $ {}</h3>
            <p>item price:</p>
            <p>shipping: ${}</p>
            <p>total before tax:</p>
            <p>tax:{}</p>
            <h3>Order Total:</h3>
        </div>
    );
};

export default Cart;