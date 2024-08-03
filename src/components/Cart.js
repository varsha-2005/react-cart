import React, { useEffect, useState } from 'react'
import './Cart.css'

const Cart = ({ cart, setCart }) => {
    const [total, setTotal] = useState(0)

    useEffect(() => {
        setTotal(cart.reduce((acc, curr) => acc + parseFloat(curr.amt), 0))
    }, [cart])

    const removeCart = (id) => {
     
        setCart(cart.filter((c) => c.id !== id))
    }

    return (
        <>
            <h1 className='cart-heading'>Cart Products</h1>
            <div className='cart-container'>
                {
                    cart.map((product) => (
                        <div className='cart-product' key={product.id}>
                            <div className='img'>
                                <img src={product.pic} alt={product.name} />
                            </div>
                            <div className='cart-product-details'>
                                <h3>{product.name}</h3>
                                <p>Price Rs : {product.amt}</p>
                            </div>
                            <button className='btnRemove' onClick={() => removeCart(product.id)}>Remove from Cart</button>
                        </div>
                    ))
                }
            </div>
            <h2 className='cart-amt'>Total Amount = Rs: {total}</h2>
        </>
    )
}

export default Cart
