import React, { useEffect, useState } from "react";
import "./Cart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart.reduce(
      (acc, curr) => acc + parseFloat(curr.amt) * curr.quantity,
      0
    );
    setTotal(newTotal.toFixed(2));
  }, [cart]);
  const removeCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      if (exist.quantity > 1) {
        setCart(
          cart.map((item) =>
            item.id === product.id
              ? { ...exist, quantity: exist.quantity - 1 }
              : item
          )
        );
      } else {
        setCart(cart.filter((c) => c.id !== product.id));
      }
    } else {
      setCart(cart.filter((c) => c.id !== product.id));
    }
  };

  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.pic} alt={product.name} />
            </div>
            <div className="cart-product-details">
              <h3>{product.name}</h3>
              <h3>Quantity: {product.quantity}</h3>
              <p>Price Rs : {product.amt}</p>
            </div>
            <button className="btnRemove" onClick={() => removeCart(product)}>
            <FontAwesomeIcon icon={faTrashAlt} />
            </button>
          </div>
        ))}
      </div>
      <h2 className="cart-amt">Total Amount = Rs: {total}</h2>
    </>
  );
};

export default Cart;
