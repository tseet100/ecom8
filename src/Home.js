import React from 'react';
import './Home.css';
import Product from './Product.js';

let imgBleach =
  'data:image/jpeg;base64,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';
let imgBounty =
  'https://www.shopmyexchange.com/products/images/xlarge/1082393_0000.jpg';
let imgNike =
  'data:image/jpeg;base64,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';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://dujye7n3e5wjl.cloudfront.net/photographs/1080-tall/time-100-influential-photos-andreas-gursky-99-cent-90.jpg"
        />
        <div className="home__row">
          <Product
            id="1"
            title="Clorox"
            price={9.99}
            image={imgBleach}
            rating={4}
          />
          <Product
            id="2"
            title="Bounty"
            price={14.99}
            image={imgBounty}
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Nike T-Shirt"
            price={6.99}
            image={imgNike}
            rating={5}
          />
          <Product
            id="3"
            title="Nike T-Shirt"
            price={6.99}
            image={imgNike}
            rating={5}
          />
          <Product
            id="3"
            title="Nike T-Shirt"
            price={6.99}
            image={imgNike}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Nike T-Shirt"
            price={6.99}
            image={imgNike}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;