import React, { useState } from "react";
import "./Product.css";
const Product = ({ product, cart, setCart, favorites, setFavorites }) => {
  const addToCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const toggleFavorite = () => {
    const isFavorite = favorites.some((f) => f.id === product.id);
    if (isFavorite) {
      setFavorites(favorites.filter((f) => f.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  };
  const name =
    product.name.length > 21
      ? product.name.substring(0, 20) + ".."
      : product.name;
  return (
    <div className="product">
      <div className="img">
        <img src={product.pic} alt={product.name}></img>
      </div>
      <div className="details">
        <h3>{name}</h3>

        <p>Price Rs:{product.amt} </p>

        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <button onClick={toggleFavorite}>
          {favorites.some((f) => f.id === product.id)
            ? "Remove Favorite"
            : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default Product;
