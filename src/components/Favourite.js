import React from 'react'
import './Favorite.css'
const Favourite = ({favorites,setFavorites,cart,setCart}) => {
    const removeFavorite = (id) => {
        setFavorites(favorites.filter((f) => f.id !== id));
    };

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
                        <button className='btnRemove' onClick={() => removeFavorite(product.id)}>Remove from favorites</button>
                    </div>
                ))}
            </div>
    </>
  )
}

export default Favourite