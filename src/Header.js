import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import {useStateValue} from './StateProvider';
import {auth} from './firebase';

function Header() {
  const [{cart, user}] = useStateValue();
  const handleAuthentication = () => {
    if (user) auth.signOut();
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          alt=""
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNLTOUGcsMuAryJfdk6V60A-PFmv-8AY2vDQ&usqp=CAU"
        />
      </Link>
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <Link to={!user && '/login'}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              {user?.email || 'Guest'}
            </span>
            <span className="header__optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout">
          <div className="header__optionCart">
            <ShoppingCartIcon />
            <span className="header__optionLineTwo header__cartCount">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
