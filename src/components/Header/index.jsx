import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "components/Header/style.scss";
import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

function Header(props) {
  return (
    <header className="header">
      <div className="header_container">
        <Nav className="header_nav">
          <NavItem className="header_nav__item">
            <NavLink
              to="/"
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
          </NavItem>

          <NavItem className="header_nav__item">
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
          </NavItem>

          <NavItem className="header_nav__item">
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
          </NavItem>
        </Nav>
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
          <div className="header_checkout__count">1</div>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
