import React, { useState } from 'react'
import data from '../assests/products.json'
import Product from './Product';
import './Home.css'
const Home = ({cart,setCart,favorites, setFavorites }) => {
  const [products] = useState(data);

  return (
    <div className='product-container'>
      {products.map((product) => (
        <Product key={product.id} product={product} cart={cart} setCart={setCart}
        favorites={favorites}
        setFavorites={setFavorites}/>
      ))}
    </div>
  )
}

export default Home
