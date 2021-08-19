import React from "react";
import "./Menu.css";

export const Menu = () => {
  return (
    <div className="menu">
      <div class="wrapper-menu">
        <nav class="nav-menu">
          <a href="/">Potions▼</a>
          <a href="/">Ingredients▼</a>
          <a href="/">Books▼</a>
          <a href="/">Suppliers▼</a>
          <a href="/">Charms▼</a>
          <a class="clearance"href="/">Clearance!</a>
        </nav>
      </div>   
      <div className="login">
        <div class="enter">
          <a href="/">Sign In</a> 
          <span>or</span> 
          <a href="/">Sign Up</a></div>
      </div>
      
    </div>
  );
};

export default Menu;
