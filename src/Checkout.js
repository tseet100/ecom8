import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

let adImg =
  'https://cdn.shopify.com/s/files/1/1383/0317/articles/Lawn-Mower-3.0-vs-Lawn-Mower-2.0-What_s-The-Difference.jpg';

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={adImg} />
        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
export default Checkout;
