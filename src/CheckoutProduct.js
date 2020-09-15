import './CheckoutProduct.css';
import React from 'react';
import {useStateValue} from './StateProvider';

function CheckoutProduct({id, image, title, price, rating, qty}) {
  const [{basket}, dispatch] = useStateValue();

  const removeItemCart = () => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" alt="" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <span>{`(${qty})`}</span>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
        <button onClick={removeItemCart}>Remove From Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
