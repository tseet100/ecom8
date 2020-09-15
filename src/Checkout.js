import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct.js';
import {useStateValue} from './StateProvider';

let adImg =
  'https://cdn.shopify.com/s/files/1/1383/0317/articles/Lawn-Mower-3.0-vs-Lawn-Mower-2.0-What_s-The-Difference.jpg';

function Checkout() {
  const [{cart, user}] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" alt="" src={adImg} />
        <div>
          <h3>Aye {user?.email}</h3>
          <h2 className="checkout__title">Your Shopping Cart</h2>
          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
              qty={item.qty}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}
export default Checkout;
