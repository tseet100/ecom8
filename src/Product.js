import React from 'react';
import './Product.css';
import {useStateValue} from './StateProvider';

function Product({title, image, price, rating, id, qty}) {
  const [{}, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id,
        title,
        image,
        price,
        rating,
        qty,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <h3>{id}</h3>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>*</p>
            ))}
        </div>
      </div>
      <img alt="" src={image} />
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default Product;
