import React from 'react'
import './Product.css'
const Product = ({product,cart,setCart,favorites,setFavorites}) => {
    const addCart = () => {
        setCart([...cart,product])
    }
    // const removeCart = () =>{
    //     setCart(cart.filter((c)=>c.id !== product.id))
    // }
    const toggleFavorite = () => {
        const isFavorite = favorites.some((f) => f.id === product.id);
        if (isFavorite) {
            setFavorites(favorites.filter((f) => f.id !== product.id));
        } else {
            setFavorites([...favorites, product]);
        }
    }
    const name = product.name.length > 21 ? product.name.substring(0,20) + ".." : product.name;
  return (
    <div className='product'>
        <div className='img'>
            <img src={product.pic} alt={product.name}></img>
        </div>
        <div className='details'>
            <h3>{name}</h3>
            <p>Price Rs:{product.amt} </p>
            {/* {cart.includes(product)?(
                <button className='btnRemove' onClick={removeCart}>Remove from Cart</button>
            ):(
                <button onClick={addCart}>Add to Cart</button>
            )} */}
            <button onClick={addCart}>Add to Cart</button>
            <button onClick={toggleFavorite}>
                    {favorites.some(f => f.id === product.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
        </div>
    </div>
  )
}

export default Product
