import React from "react";
import navLogo from "../img/logo.png";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function NavBar({ cartNum }) {
  return (
    <>
      <div className="navBar">
        <img className="logoNavBar" src={navLogo} alt="logoNav" />
        <Link to="/">Shop Now</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/contact">Contact</Link>

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
