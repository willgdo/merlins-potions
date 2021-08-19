import React from 'react';
import Logo from '../images/logo.jpg';
import Bag from '../images/toy.png';
import './Header.css';

export const Header = () => {
  return (
    <div className="header">
        <div className="logo">
          <img src={Logo} alt="logo"></img>
        </div>
        <div className="search">
        <div id="input-container">
            <input type="search" placeholder="Search our stock"></input>      
          </div>
        </div>
        <div className="free-shipping">
          <p>
            Free Shipping       
            <span> on orders over $50</span>
          </p>
        </div>
        <div className="bag">
          <img src={Bag} alt="bag"></img>
          <p>BAG: <span>1</span></p>
        </div>
    </div>
  );
}

export default Header;
