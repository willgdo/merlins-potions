import React from 'react';
import Logo from '../images/logo.jpg';
import Bag from '../images/toy.png';
import Search from '../images/busca.png';
import './Header.css';

export const Header = () => {
  return (
    <div className="Header">
      <div className="Logo">
        <img src={Logo} alt="logo"></img>
      </div>
      <div className="Search">
        <div id="input_container">
          <input type="search" placeholder="Search our stock"></input>
          <img src={Search} alt="search" width="100" height="100"/>
        </div>
      </div>
      <div className="Bag">
        <p>
          Free Shipping<br/>       
          <span>on orders over $50</span>
        </p>
      </div>      
      <img src={Bag} alt="bag"></img>
      <p>BAG: 1</p>
    </div>
  );
}

export default Header;
