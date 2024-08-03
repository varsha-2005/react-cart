import React from 'react'
import './Favorite.css'
const Favourite = ({favorites}) => {
  return (
    <>  
        <h1 className='favorites-heading'>Favorite Products</h1>
            <div className='favorites-container'>
                {favorites.map((product) => (
                    <div className='favorites-product' key={product.id}>
                        <div className='img'>
                            <img src={product.pic} alt={product.name} />
                        </div>
                        <div className='favorites-product-details'>
                            <h3>{product.name}</h3>
                            <p>Price Rs : {product.amt}</p>
                        </div>
                        
                    </div>
                ))}
            </div>
    </>
  )
}

export default Favourite
