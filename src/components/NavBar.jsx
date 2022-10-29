import React from "react";
import navLogo from "../img/logo.png";
import { FiShoppingCart } from "react-icons/fi";

function NavBar({ cartNum }) {
     return (
          <>
               <div className="navBar">
                    <img className="logoNavBar" src={navLogo} alt="logoNav" />
                    <a href="/">Shop Now</a>
                    <a href="/">Cart</a>

                    <div className="cart">
                         {" "}
                         <FiShoppingCart />
                         &nbsp;
                         {cartNum}
                    </div>
               </div>
          </>
     );
}

export default NavBar;
