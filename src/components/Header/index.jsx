import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "components/Header/style.scss";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

function Header() {
  const cart = useSelector((state) => state.cart);

  return (
    <header className="header">
      <div className="header_container">
        <ul className="header_nav">
          <li className="header_nav__item">
            <NavLink
              to="/home"
              style={({ isActive }) =>
                isActive
                  ? {
                      fontWeight: "700",
                      textDecoration: "underline",
                      color: "blue",
                    }
                  : {}
              }
            >
              Home
            </NavLink>
          </li>

          <li className="header_nav__item">
            <NavLink
              to="/products"
              style={({ isActive }) =>
                isActive
                  ? {
                      fontWeight: "700",
                      textDecoration: "underline",
                      color: "blue",
                    }
                  : {}
              }
            >
              Products
            </NavLink>
          </li>

          <li className="header_nav__item">
            <NavLink
              to="/reviews"
              style={({ isActive }) =>
                isActive
                  ? {
                      fontWeight: "700",
                      textDecoration: "underline",
                      color: "blue",
                    }
                  : {}
              }
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="header_container">
        <div className="header_info">COSMETIC</div>
      </div>

      <div className="header_container">
        <NavLink to="/checkout" className="header_checkout">
          <FontAwesomeIcon
            icon={faCartShopping}
            size="xl"
            fixedWidth
            className="header_checkout__icon"
          />

          {cart.length > 0 && (
            <div className="header_checkout__count">{cart.length}</div>
          )}
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
