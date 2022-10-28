import React from "react";
import navLogo from "../img/logo.png";

function NavBar() {
     return (
          <>
               <div className="navBar">
                    <img className="logoNavBar" src={navLogo} alt="logoNav" />
                    <a href="/">Shop Now</a>
                    <a href="/">Cart</a>
               </div>
          </>
     );
}

export default NavBar;
