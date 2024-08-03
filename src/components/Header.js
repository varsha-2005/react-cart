import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'

const Header = ({cart=[],favorites=[]}) => {
  return (
    <div className='navbar'>
      <div className='logo'>Food Cart</div>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/Cart"}> <span className='cart-count'>{cart.length}</span> View Cart</Link></li>
        <li><Link to="/Favorites">Favorites ({favorites.length})</Link></li>
      </ul>
    </div>
  )
}

export default Header
