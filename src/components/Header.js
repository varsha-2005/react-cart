import React, { useState } from 'react'
import { Link } from "react-router-dom"
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';


const Header = ({cart=[],favorites=[]}) => {
  const [MenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  }

  return (
    <nav>
    <div className='navbar'>
     <div className='navbar-item'>
     <span className="rotating-icon">
        <FontAwesomeIcon icon={faBurger} />
      </span>      
      <div className='logo'>Food Cart</div>
     </div>
      <ul className={`nav-links ${MenuOpen ? 'show' : ''}`}>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/Cart"}> <span className='cart-count'>{cart.length}</span> View Cart</Link></li>
        <li><Link to="/Favorites">Favorites ({favorites.length})</Link></li>
      </ul>
      <div className="menu-toggle" onClick={toggleMenu}>☰</div>
    </div>
    </nav>
  )
}

export default Header
