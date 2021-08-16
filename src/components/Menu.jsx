import React from "react";
import "./Menu.css";

export const Menu = () => {
  return (
    <div className="Menu">
      <div class="Nav-Menu">
        <nav>
          <a href="/">Potions <span>▼</span></a>
          <a href="/">Ingredients <span>▼</span></a>
          <a href="/">Books <span>▼</span></a>
          <a href="/">Suppliers <span>▼</span></a>
          <a href="/">Charms <span>▼</span></a>
          <a href="/">Clearance!</a>
        </nav>
      </div>
      <div className="Login">
        <div class="Enter">Sign In</div>
        <div><span>or</span></div>
        <div class="Enter">Sign Up</div>
      </div>
      
    </div>
  );
};

export default Menu;
