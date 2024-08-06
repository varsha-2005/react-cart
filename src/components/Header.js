import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

const Header = ({ cart = [], favorites = [] }) => {
<<<<<<< HEAD
  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen)
  };
  const [MenuOpen, setMenuOpen] = useState(false)

  return (
    <nav>
      <div className="navbar">
        <div className="navbar-item">
          <span className="rotating-icon">
            <FontAwesomeIcon icon={faBurger} />
          </span>
          <div className="logo">Hungry Wheels</div>
        </div>
        <ul className={`nav-links ${MenuOpen ? 'show' : ''}`}>
=======
  const [flex, setFlex] = useState(false);
  const toggleMenu = () => {
    setFlex((prevState) => !prevState);
  };

  return (
    <>
      <nav>
        <div className="navbar">
          <div className="navbar-item">
            <span className="rotating-icon">
              <FontAwesomeIcon icon={faBurger} />
            </span>
            <div className="logo">Hungry-Wheels</div>
          </div>
          <ul className="nav-flex">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/Cart"}>
                <span className="cart-count">{cart.length}</span> View Cart
              </Link>
            </li>
            <li>
              <Link to="/Favorites">Favorites ({favorites.length})</Link>
            </li>
          </ul>

          <div className="menu-toggle" onClick={toggleMenu}>
            ☰
          </div>
        </div>
      </nav>
      {flex && (
        <div className="nav-link">
>>>>>>> fa948c2814c5f17cfd29b2550e9ac7cc76dfbfd5
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/Cart"}>
              View Cart <span className="cart-count">{cart.length}</span>
            </Link>
          </li>
          <li>
            <Link to="/Favorites">Favorites ({favorites.length})</Link>
          </li>
        </div>
      )}
    </>
  );
};

export default Header;
